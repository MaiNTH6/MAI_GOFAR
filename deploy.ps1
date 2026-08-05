# ==========================================
# GO FAR — PRODUCTION DEPLOY SCRIPT
# Tự động upload thư mục 'dist' lên host gofarvietnam.com qua giao thức FTP.
# ==========================================

$envPath = Join-Path $HOME ".env"

# 1. Đọc file cấu hình .env
function Get-Env {
    param($Path = $envPath)
    $envHash = @{}
    if (Test-Path $Path) {
        Get-Content $Path | ForEach-Object {
            # Bỏ qua dòng trống hoặc comment
            if ($_ -match '^\s*([^#=]+)\s*=\s*(.*)\s*$') {
                $key = $Matches[1].Trim()
                $val = $Matches[2].Trim()
                $envHash[$key] = $val
            }
        }
    }
    return $envHash
}

$envVars = Get-Env

$ftpHost = $envVars["FTP_HOST"]
$ftpUser = $envVars["FTP_USER"]
$ftpPassword = $envVars["FTP_PASSWORD"]
$ftpPath = $envVars["FTP_PATH"]

# Kiểm tra nếu thiếu thông tin
if (-not $ftpHost -or -not $ftpUser -or -not $ftpPassword) {
    Write-Host "LỖI: Thiếu thông tin cấu hình FTP trong file $envPath" -ForegroundColor Red
    Write-Host "Vui lòng cấu hình các biến sau vào file $envPath:" -ForegroundColor Yellow
    Write-Host "  FTP_HOST=ftp.gofarvietnam.com (hoặc IP hosting)" -ForegroundColor Yellow
    Write-Host "  FTP_USER=tên_đăng_nhập_ftp" -ForegroundColor Yellow
    Write-Host "  FTP_PASSWORD=mật_khẩu_ftp" -ForegroundColor Yellow
    Write-Host "  FTP_PATH=/public_html (thư mục gốc trên host)" -ForegroundColor Yellow
    exit 1
}

# Chuẩn hóa đường dẫn đích
if (-not $ftpPath) { $ftpPath = "/public_html" }
if (-not $ftpPath.StartsWith("/")) { $ftpPath = "/" + $ftpPath }
if ($ftpPath.EndsWith("/")) { $ftpPath = $ftpPath.Substring(0, $ftpPath.Length - 1) }

$sourceDir = Join-Path (Get-Item .).FullName "dist"

if (-not (Test-Path $sourceDir)) {
    Write-Host "LỖI: Chưa có thư mục 'dist'. Vui lòng chạy build.ps1 trước!" -ForegroundColor Red
    exit 1
}

Write-Host "Bắt đầu upload dữ liệu lên $ftpHost..." -ForegroundColor Cyan
Write-Host "Đường dẫn gốc trên host: $ftpPath" -ForegroundColor Cyan

# Hàm tạo thư mục trên FTP nếu chưa tồn tại
function Create-FtpDirectory {
    param(
        [string]$uri,
        [System.Net.NetworkCredential]$credentials
    )
    try {
        $request = [System.Net.FtpWebRequest]::Create($uri)
        $request.Credentials = $credentials
        $request.Method = [System.Net.WebRequestMethods+Ftp]::MakeDirectory
        $request.UsePassive = $true
        $request.KeepAlive = $false
        
        $response = $request.GetResponse()
        $response.Close()
        return $true
    } catch {
        # Thường là lỗi 550 nếu thư mục đã tồn tại
        return $false
    }
}

# Hàm upload 1 file lên FTP
function Upload-FtpFile {
    param(
        [string]$localPath,
        [string]$remoteUri,
        [System.Net.NetworkCredential]$credentials
    )
    try {
        $request = [System.Net.FtpWebRequest]::Create($remoteUri)
        $request.Credentials = $credentials
        $request.Method = [System.Net.WebRequestMethods+Ftp]::UploadFile
        $request.UseBinary = $true
        $request.UsePassive = $true
        $request.KeepAlive = $false
        
        $fileBytes = [System.IO.File]::ReadAllBytes($localPath)
        $request.ContentLength = $fileBytes.Length
        
        $requestStream = $request.GetRequestStream()
        $requestStream.Write($fileBytes, 0, $fileBytes.Length)
        $requestStream.Close()
        
        $response = $request.GetResponse()
        $response.Close()
        return $true
    } catch {
        Write-Host "Lỗi khi upload tệp $localPath: $_" -ForegroundColor Red
        return $false
    }
}

$credentials = New-Object System.Net.NetworkCredential($ftpUser, $ftpPassword)
$distItems = Get-ChildItem -Path $sourceDir -Recurse

$totalFiles = 0
$uploadedFiles = 0

# Tạo thư mục gốc ftpPath trước
$baseUri = "ftp://$ftpHost$ftpPath"
Create-FtpDirectory -uri $baseUri -credentials $credentials | Out-Null

foreach ($item in $distItems) {
    # Tính đường dẫn tương đối
    $relativePath = $item.FullName.Substring($sourceDir.Length).Replace("\", "/")
    $remoteUri = "ftp://$ftpHost$ftpPath$relativePath"
    
    if ($item.PSIsContainer) {
        Write-Host "Đang tạo thư mục trên host: $relativePath..." -ForegroundColor Yellow
        Create-FtpDirectory -uri $remoteUri -credentials $credentials | Out-Null
    } else {
        $totalFiles++
        Write-Host "Uploading [$totalFiles]: $relativePath..." -ForegroundColor Green
        if (Upload-FtpFile -localPath $item.FullName -remoteUri $remoteUri -credentials $credentials) {
            $uploadedFiles++
        }
    }
}

Write-Host "`n==========================================" -ForegroundColor Cyan
if ($uploadedFiles -eq $totalFiles) {
    Write-Host "DEPLOY THÀNH CÔNG!" -ForegroundColor Green
    Write-Host "Website của bạn đã được tải lên trực tiếp tại http://$ftpHost" -ForegroundColor White
    Write-Host "Tổng số tệp đã upload: $uploadedFiles/$totalFiles" -ForegroundColor White
} else {
    Write-Host "DEPLOY HOÀN TẤT VỚI MỘT SỐ LỖI" -ForegroundColor Yellow
    Write-Host "Đã upload thành công: $uploadedFiles/$totalFiles tệp tin." -ForegroundColor White
    Write-Host "Vui lòng kiểm tra lại đường truyền hoặc phân quyền trên host." -ForegroundColor Yellow
}
Write-Host "==========================================" -ForegroundColor Cyan
