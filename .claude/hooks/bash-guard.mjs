// PreToolUse (Bash): блокирует опасные команды и всё, кроме pnpm
let raw = '';
for await (const chunk of process.stdin) raw += chunk;

let command = '';
try {
  command = JSON.parse(raw).tool_input?.command ?? '';
} catch {
  process.exit(0);
}

const block = (reason) => {
  process.stderr.write(`Заблокировано хуком bash-guard: ${reason}\nКоманда: ${command}\n`);
  process.exit(2);
};

// .env проверяем по исходной команде — путь может быть в кавычках
if (/(^|[\s'"=\/<>])\.env(?!\.example\b)(\.[\w.-]+)?(?=$|[\s'";|&)>])/.test(command)) {
  block('работа с .env* через Bash запрещена. Правьте файл вручную.');
}

if (/(^|[\s;&|])HUSKY=0\b/.test(command)) {
  block('HUSKY=0 отключает pre-commit хуки.');
}

// Убираем heredoc и строки в кавычках, чтобы текст сообщений не давал ложных срабатываний
const stripped = command
  .replace(/<<-?\s*(['"]?)(\w+)\1[\s\S]*?\n\s*\2\b/g, '')
  .replace(/'[^']*'|"(?:\\.|[^"\\])*"/g, 'Q');

const segments = stripped.split(/&&|\|\||[;|\n]|\$\(|`/);

for (const segment of segments) {
  const tokens = segment.trim().split(/\s+/).filter(Boolean);
  // Пропускаем префиксы вида VAR=value
  while (tokens.length && /^\w+=/.test(tokens[0])) tokens.shift();
  if (!tokens.length) continue;

  const [cmd, sub] = tokens;
  const args = tokens.slice(1);
  const shortFlags = args
    .filter((a) => /^-[a-zA-Z]+$/.test(a))
    .join('')
    .replace(/-/g, '');
  const has = (...flags) => flags.some((f) => args.includes(f));

  // --- Опасные команды ---
  if (cmd === 'rm') {
    const recursive = /[rR]/.test(shortFlags) || has('--recursive');
    const force = shortFlags.includes('f') || has('--force');
    if (recursive && force) block('rm с флагами -r и -f. Удаляйте конкретные файлы без -rf.');
  }

  if (cmd === 'git') {
    if (sub === 'push' && (has('-f', '--force', '--force-with-lease') || /f/.test(shortFlags))) {
      block('force push переписывает историю на remote.');
    }
    if (sub === 'push' && args.some((a) => /^\+/.test(a))) {
      block('push с +refspec — это force push.');
    }
    if (sub === 'reset' && has('--hard')) {
      block('git reset --hard уничтожает незакоммиченные изменения.');
    }
    if (sub === 'clean' && /f/.test(shortFlags)) {
      block('git clean -f удаляет untracked-файлы без возможности восстановления.');
    }
    if ((sub === 'commit' || sub === 'push') && has('--no-verify')) {
      block('--no-verify обходит pre-commit хуки.');
    }
    if (sub === 'commit' && /n/.test(shortFlags)) {
      block('git commit -n обходит pre-commit хуки.');
    }
  }

  // --- Только pnpm ---
  if (cmd === 'npm') {
    const hints = {
      install: 'pnpm install / pnpm add <pkg>',
      i: 'pnpm install / pnpm add <pkg>',
      ci: 'pnpm install --frozen-lockfile',
      uninstall: 'pnpm remove <pkg>',
      remove: 'pnpm remove <pkg>',
      update: 'pnpm update',
      run: `pnpm ${args.slice(1).join(' ')}`.trim(),
      exec: 'pnpm exec <cmd>',
    };
    block(`в проекте используется pnpm. Используйте: ${hints[sub] ?? `pnpm ${sub ?? ''}`.trim()}`);
  }
  if (cmd === 'npx') block('в проекте используется pnpm. Используйте: pnpm exec <cmd> или pnpm dlx <pkg>');
  if (cmd === 'yarn') block('в проекте используется pnpm, а не yarn.');
}

process.exit(0);
