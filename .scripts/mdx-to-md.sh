#!/bin/bash

# 인수로 폴더 경로를 받음
TARGET_DIR="$1"

# 인수가 제공되지 않으면 오류 메시지 출력 및 종료
if [ -z "$TARGET_DIR" ]; then
  echo "Usage: $0 <target_directory>"
  exit 1
fi

# 폴더가 존재하지 않으면 오류 메시지 출력 및 종료
if [ ! -d "$TARGET_DIR" ]; then
  echo "Error: Directory $TARGET_DIR does not exist."
  exit 1
fi

# 하위 디렉토리를 포함하여 모든 .mdx 파일을 순회
find "$TARGET_DIR" -type f -name "*.mdx" | while read -r file; do
  # 새 파일명 생성 (.md 확장자로 변경)
  new_file="${file%.mdx}.md"

  # 파일명 변경
  mv "$file" "$new_file"

  echo "Renamed: $file -> $new_file"
done
