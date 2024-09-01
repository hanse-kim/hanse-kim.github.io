#!/bin/bash

# 인수로 받은 특정 폴더를 탐색
TARGET_DIR=$1

# 대상 폴더가 없을 경우 스크립트를 종료
if [ -z "$TARGET_DIR" ]; then
  echo "Usage: $0 <target-directory>"
  exit 1
fi

# .md 및 .mdx 파일을 탐색하여 hide: true를 찾고, 해당 부모 디렉토리를 삭제
find "$TARGET_DIR" -type f \( -name "*.md" -o -name "*.mdx" \) | while read -r file; do
  if grep -q "^hide: true" "$file"; then
    # 부모 디렉토리를 찾고 삭제
    parent_dir=$(dirname "$file")
    echo "Deleting directory: $parent_dir"
    rm -rf "$parent_dir"
  fi
done
