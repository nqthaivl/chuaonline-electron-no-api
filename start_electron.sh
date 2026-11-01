#!/usr/bin/env bash
cd "$(dirname "$0")"
export PATH="/Users/prom1/node-v22/bin:$PATH"

echo "🌸 Đang khởi động Ứng dụng Desktop Electron Chùa Online (9:16)..."
echo "⚡ Chế độ: Kết Nối Trực Tiếp (100% Miễn Phí, Không Cần API Key)"
./node_modules/.bin/electron main.cjs
