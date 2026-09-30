#!/bin/bash
INPUT=$(cat)
FILE_PATH=$(printf '%s' "$INPUT" | node -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>{try{process.stdout.write(JSON.parse(s).tool_input?.file_path??"")}catch{}})')
FILE_PATH="${FILE_PATH//\\//}"   # \ → / для Windows

# Список защищённых паттернов
PROTECTED_PATTERNS=("/.env" "pnpm-lock.yaml")

for PATTERN in "${PROTECTED_PATTERNS[@]}"; do
  if [[ "$FILE_PATH" == *"$PATTERN"* ]]; then
    echo "Заблокировано: $FILE_PATH является защищённым файлом." >&2
    exit 2
  fi
done

exit 0
