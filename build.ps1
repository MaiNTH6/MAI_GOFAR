# ==========================================
# GO FAR — PRODUCTION BUILD SCRIPT
# Tự động đóng gói dự án tĩnh vào thư mục 'dist' để sẵn sàng deploy lên hosting.
# ==========================================

$sourceDir = Get-Item .
$distDir = Join-Path $sourceDir "dist"

Write-Host "Đang khởi động tiến trình build sản phẩm cho GO FAR..." -ForegroundColor Cyan

# 1. Tạo mới hoặc làm sạch thư mục dist
if (Test-Path $distDir) {
    Write-Host "Đang dọn dẹp thư mục dist cũ..." -ForegroundColor Yellow
    Remove-Item -Path "$distDir\*" -Recurse -Force
} else {
    Write-Host "Đang tạo thư mục dist mới..." -ForegroundColor Yellow
    New-Item -ItemType Directory -Path $distDir | Out-Null
}

# 2. Sao chép các tệp HTML sản phẩm
Write-Host "Đang sao chép các tệp HTML..." -ForegroundColor Green
Copy-Item -Path "$sourceDir\*.html" -Destination $distDir -Force

# 3. Sao chép các tệp JS & CSS sản phẩm
Write-Host "Đang sao chép các tệp JS và CSS..." -ForegroundColor Green
Copy-Item -Path "$sourceDir\*.js" -Destination $distDir -Force
Copy-Item -Path "$sourceDir\styles.css" -Destination $distDir -Force

# 4. Sao chép thư mục chứa hình ảnh đã tối ưu hóa
Write-Host "Đang sao chép tài nguyên hình ảnh (đã được tối ưu)..." -ForegroundColor Green
$distImages = Join-Path $distDir "images"
New-Item -ItemType Directory -Path $distImages | Out-Null
Copy-Item -Path "$sourceDir\images\*" -Destination $distImages -Force

# 5. Đo lường kích thước gói sản phẩm
$files = Get-ChildItem -Path $distDir -Recurse -File
$totalSize = 0
foreach ($file in $files) {
    $totalSize += $file.Length
}
$sizeInMB = [Math]::Round($totalSize / 1MB, 2)
$sizeInKB = [Math]::Round($totalSize / 1KB, 2)

Write-Host "`n==========================================" -ForegroundColor Cyan
Write-Host "BUILD THÀNH CÔNG!" -ForegroundColor Green
Write-Host "Thư mục sản phẩm sẵn sàng tại: $distDir" -ForegroundColor White
Write-Host "Tổng số tệp tin đóng gói: $($files.Count)" -ForegroundColor White
if ($sizeInMB -gt 0.1) {
    Write-Host "Tổng dung lượng gói: $sizeInMB MB" -ForegroundColor White
} else {
    Write-Host "Tổng dung lượng gói: $sizeInKB KB" -ForegroundColor White
}
Write-Host "==========================================" -ForegroundColor Cyan
