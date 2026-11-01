#!/usr/bin/env bash
cd "$(dirname "$0")"
export PATH="/Users/prom1/node-v22/bin:$PATH"

echo "🌸 KHỞI ĐỘNG TIKTOK LIVE CHÙA ONLINE (9:16) 🌸"
echo "⚡ Chế độ: Kết Nối Trực Tiếp (100% Miễn Phí, Không Cần API Key)"
echo "Khởi động ứng dụng Desktop Electron..."
./node_modules/.bin/electron main.cjs
