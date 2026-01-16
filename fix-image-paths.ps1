# 批量替换图片路径脚本
Write-Host "开始处理图片路径..." -ForegroundColor Cyan

$files = Get-ChildItem -Path "components", "." -Include "*.tsx", "*.ts" -Recurse -File | Where-Object { $_.Name -ne "utils.ts" }

$modifiedFiles = @()

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    $originalContent = $content
    
    # 替换 src="/images/
    $content = $content -replace 'src="(/images/[^"]+)"', 'src={getImageUrl("$1")}'
    
    # 替换 image: "/images/
    $content = $content -replace 'image:\s*"(/images/[^"]+)"', 'image: getImageUrl("$1")'
    
    if ($content -ne $originalContent) {
        # 添加 import 语句
        if ($content -notmatch "import.*getImageUrl") {
            $content = $content -replace "(import.*?;)", "`$1`nimport { getImageUrl } from '../utils';"
        }
        
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8 -NoNewline
        $modifiedFiles += $file.Name
        Write-Host "已修改: $($file.Name)" -ForegroundColor Green
    }
}

Write-Host ""
Write-Host "完成! 共修改 $($modifiedFiles.Count) 个文件" -ForegroundColor Yellow
