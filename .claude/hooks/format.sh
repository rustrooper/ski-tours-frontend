#!/bin/bash
# PostToolUse: eslint --fix + prettier для изменённого файла (как lint-staged)
INPUT=$(cat)
FILE_PATH=$(printf '%s' "$INPUT" | node -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>{try{process.stdout.write(JSON.parse(s).tool_input?.file_path??"")}catch{}})')
[[ -z "$FILE_PATH" || ! -f "$FILE_PATH" ]] && exit 0

cd "$CLAUDE_PROJECT_DIR" || exit 0

case "$FILE_PATH" in
  *.ts | *.tsx | *.js | *.jsx)
    if ! LINT_OUTPUT=$(pnpm exec eslint --fix "$FILE_PATH" 2>&1); then
      # Оставшиеся ошибки возвращаем Claude, чтобы он их исправил
      echo "$LINT_OUTPUT" >&2
      pnpm exec prettier --write "$FILE_PATH" > /dev/null 2>&1
      exit 2
    fi
    pnpm exec prettier --write "$FILE_PATH" > /dev/null 2>&1
    ;;
  *.json | *.md | *.css | *.yml | *.yaml)
    pnpm exec prettier --write --ignore-unknown "$FILE_PATH" > /dev/null 2>&1
    ;;
esac

exit 0
