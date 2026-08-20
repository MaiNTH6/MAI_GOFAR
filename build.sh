#!/usr/bin/env bash
# ==========================================
# GO FAR — PRODUCTION BUILD SCRIPT (Linux/Netlify)
# Bản tương đương build.ps1, dùng cho Netlify build (chạy trên Ubuntu).
# Đóng gói dự án tĩnh vào 'dist' — chỉ những tệp cần công khai.
# ==========================================
set -euo pipefail

echo "Đang khởi động tiến trình build sản phẩm cho GO FAR..."

# 1. Tạo mới thư mục dist
rm -rf dist
mkdir -p dist/images

# 2. Sao chép các tệp HTML sản phẩm
echo "Đang sao chép các tệp HTML..."
cp ./*.html dist/

# 3. Sao chép các tệp JS, CSS & SEO sản phẩm
echo "Đang sao chép các tệp JS, CSS và cấu hình SEO..."
cp ./*.js dist/
cp styles.css dist/
if [ -f robots.txt ];  then cp robots.txt  dist/; fi
if [ -f sitemap.xml ]; then cp sitemap.xml dist/; fi
if [ -f _headers ];    then cp _headers    dist/; fi
# CNAME: báo cho GitHub Pages biết domain tuỳ chỉnh. Bắt buộc nằm trong gói publish.
if [ -f CNAME ];       then cp CNAME       dist/; fi

# 4. Sao chép thư mục chứa hình ảnh đã tối ưu hóa
echo "Đang sao chép tài nguyên hình ảnh (đã được tối ưu)..."
cp -R images/. dist/images/

# 5. Đo lường kích thước gói sản phẩm
file_count=$(find dist -type f | wc -l)
total_size=$(du -sh dist | cut -f1)

echo ""
echo "=========================================="
echo "BUILD THÀNH CÔNG!"
echo "Tổng số tệp tin đóng gói: $file_count"
echo "Tổng dung lượng gói: $total_size"
echo "=========================================="
