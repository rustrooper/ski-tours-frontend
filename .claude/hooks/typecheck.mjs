// Stop: не даёт Claude закончить ответ, если в этом ходе он правил TS-файлы и сломал типы
import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const EDIT_TOOLS = new Set(['Edit', 'Write', 'MultiEdit', 'NotebookEdit']);
const TS_FILE = /\.(ts|tsx|mts|cts)$/i;

let raw = '';
for await (const chunk of process.stdin) raw += chunk;

let input;
try {
  input = JSON.parse(raw);
} catch {
  process.exit(0);
}

// Claude уже продолжал работу из-за этого хука — второй раз не блокируем, чтобы не зациклиться
if (input.stop_hook_active) process.exit(0);

// Идём по транскрипту с конца до начала текущего хода и ищем правки TS-файлов
function editedTsThisTurn(transcriptPath) {
  let lines;
  try {
    lines = readFileSync(transcriptPath, 'utf8').trimEnd().split('\n');
  } catch {
    return false;
  }

  for (let i = lines.length - 1; i >= 0; i--) {
    let entry;
    try {
      entry = JSON.parse(lines[i]);
    } catch {
      continue;
    }
    if (entry.isSidechain) continue;

    const content = entry.message?.content;

    if (entry.type === 'assistant' && Array.isArray(content)) {
      const touched = content.some(
        (c) =>
          c.type === 'tool_use' &&
          EDIT_TOOLS.has(c.name) &&
          TS_FILE.test(c.input?.file_path ?? c.input?.notebook_path ?? ''),
      );
      if (touched) return true;
    }

    // Реплика пользователя (не результат инструмента и не служебная вставка) — начало хода
    const isToolResult = Array.isArray(content) && content.some((c) => c.type === 'tool_result');
    if (entry.type === 'user' && !entry.isMeta && !isToolResult) return false;
  }
  return false;
}

if (!input.transcript_path || !editedTsThisTurn(input.transcript_path)) process.exit(0);

const projectDir = process.env.CLAUDE_PROJECT_DIR ?? input.cwd;
const tsc = spawnSync(
  process.execPath,
  [join(projectDir, 'node_modules/typescript/bin/tsc'), '--noEmit', '--pretty', 'false'],
  { cwd: projectDir, encoding: 'utf8' },
);

if (tsc.status !== 0) {
  const output = `${tsc.stdout}${tsc.stderr}`.trim().split('\n').slice(0, 40).join('\n');
  process.stderr.write(`pnpm typecheck упал. Исправь ошибки типов перед завершением:\n${output}\n`);
  process.exit(2);
}

process.exit(0);
