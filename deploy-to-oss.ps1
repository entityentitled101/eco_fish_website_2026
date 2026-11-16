# ===================================
# 阿里云 OSS 部署脚本
# ===================================

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  绿佳元网站 - 阿里云 OSS 部署工具" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 步骤 1: 安装依赖
Write-Host "[1/4] 检查依赖..." -ForegroundColor Yellow
if (-not (Test-Path "node_modules")) {
    Write-Host "正在安装依赖..." -ForegroundColor Gray
    npm install
}

# 步骤 2: 构建 OSS 版本
Write-Host ""
Write-Host "[2/4] 构建 OSS 部署版本（根路径模式）..." -ForegroundColor Yellow
$env:DEPLOY_TARGET = "oss"
npm run build

# 检查构建是否成功
if (-not (Test-Path "dist\index.html")) {
    Write-Host ""
    Write-Host "❌ 构建失败，请检查错误信息" -ForegroundColor Red
    exit 1
}

# 步骤 3: 创建压缩包
Write-Host ""
Write-Host "[3/4] 创建部署压缩包..." -ForegroundColor Yellow

$timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
$zipName = "oss_deploy_$timestamp.zip"

# 删除旧的压缩包（如果存在）
if (Test-Path $zipName) {
    Remove-Item $zipName -Force
}

# 压缩 dist 文件夹内容（不包含 dist 文件夹本身）
Compress-Archive -Path "dist\*" -DestinationPath $zipName

$zipSize = [math]::Round((Get-Item $zipName).Length / 1MB, 2)

Write-Host ""
Write-Host "✅ 构建完成！" -ForegroundColor Green
Write-Host ""
Write-Host "📦 部署包信息：" -ForegroundColor Cyan
Write-Host "   文件名: $zipName" -ForegroundColor White
Write-Host "   大小: $zipSize MB" -ForegroundColor White
Write-Host ""

# 步骤 4: 显示部署说明
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  🚀 OSS 部署步骤" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "方式一：使用阿里云控制台（推荐）" -ForegroundColor Yellow
Write-Host "  1. 登录阿里云 OSS 控制台" -ForegroundColor White
Write-Host "  2. 进入您的 Bucket: lvjiayuanecofish" -ForegroundColor White
Write-Host "  3. 删除 Bucket 中的旧文件（如果有）" -ForegroundColor White
Write-Host "  4. 上传 $zipName" -ForegroundColor White
Write-Host "  5. 在线解压到根目录" -ForegroundColor White
Write-Host "  6. 确保 index.html 在根目录" -ForegroundColor White
Write-Host ""
Write-Host "方式二：手动上传 dist 文件夹内容（最推荐）" -ForegroundColor Yellow
Write-Host "  1. 打开 dist 文件夹" -ForegroundColor White
Write-Host "  2. 选择所有文件和文件夹" -ForegroundColor White
Write-Host "  3. 直接拖拽上传到 OSS Bucket 根目录" -ForegroundColor White
Write-Host ""
Write-Host "方式三：使用 ossutil 命令行工具" -ForegroundColor Yellow
Write-Host "  ossutil64 cp -r dist\ oss://lvjiayuanecofish/ -u" -ForegroundColor Gray
Write-Host ""

# 步骤 5: 检查静态网站配置
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  ⚙️ OSS 静态网站配置检查" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "请确保您的 OSS Bucket 已配置静态网站托管：" -ForegroundColor White
Write-Host ""
Write-Host "  · 默认首页: index.html" -ForegroundColor White
Write-Host "  · 默认 404 页: index.html（SPA 单页应用必须）" -ForegroundColor White
Write-Host "  · 公共读权限: 已开启" -ForegroundColor White
Write-Host ""
Write-Host "配置路径: OSS 控制台 → Bucket 列表 → 基础设置 → 静态页面" -ForegroundColor Gray
Write-Host ""

# 步骤 6: 提供访问链接
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  🌐 访问地址" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "如果您已绑定自定义域名，部署后访问：" -ForegroundColor White
Write-Host "  https://您的域名.com" -ForegroundColor Cyan
Write-Host ""
Write-Host "如果使用 OSS 默认域名：" -ForegroundColor White
Write-Host "  http://lvjiayuanecofish.oss-cn-hongkong.aliyuncs.com" -ForegroundColor Cyan
Write-Host ""
Write-Host "⚠️  注意：首次部署后可能需要 1-2 分钟生效" -ForegroundColor Yellow
Write-Host ""

Write-Host "========================================" -ForegroundColor Green
Write-Host "  准备完成！请按照上述步骤部署到 OSS" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""

# 自动打开 dist 文件夹
Write-Host "按任意键打开 dist 文件夹..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey('NoEcho,IncludeKeyDown')
Invoke-Item dist
