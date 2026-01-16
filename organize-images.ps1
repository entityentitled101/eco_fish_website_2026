# 图片整理脚本
# 创建 public/images 文件夹结构并移动所有图片

$baseDir = "C:\Users\yifzo\Desktop\绿佳元网站"
$publicImagesDir = "$baseDir\public\images"

# 创建文件夹结构
Write-Host "创建文件夹结构..." -ForegroundColor Green
New-Item -ItemType Directory -Force -Path "$publicImagesDir\hero" | Out-Null
New-Item -ItemType Directory -Force -Path "$publicImagesDir\tech" | Out-Null
New-Item -ItemType Directory -Force -Path "$publicImagesDir\products" | Out-Null
New-Item -ItemType Directory -Force -Path "$publicImagesDir\bases" | Out-Null
New-Item -ItemType Directory -Force -Path "$publicImagesDir\team" | Out-Null
New-Item -ItemType Directory -Force -Path "$publicImagesDir\other" | Out-Null
New-Item -ItemType Directory -Force -Path "$publicImagesDir\backgrounds" | Out-Null

# 移动首页图片
Write-Host "移动首页图片..." -ForegroundColor Cyan
Move-Item "$baseDir\fish（1）.jpg" "$publicImagesDir\hero\" -Force -ErrorAction SilentlyContinue
Move-Item "$baseDir\fish（2）.jpg" "$publicImagesDir\hero\" -Force -ErrorAction SilentlyContinue

# 移动四养技术图片
Write-Host "移动四养技术图片..." -ForegroundColor Cyan
Move-Item "$baseDir\4_mud.png" "$publicImagesDir\tech\" -Force -ErrorAction SilentlyContinue
Move-Item "$baseDir\4_grass.png" "$publicImagesDir\tech\" -Force -ErrorAction SilentlyContinue
Move-Item "$baseDir\4_water.jpg" "$publicImagesDir\tech\" -Force -ErrorAction SilentlyContinue
Move-Item "$baseDir\4_fish.png" "$publicImagesDir\tech\" -Force -ErrorAction SilentlyContinue
Move-Item "$baseDir\4_fish_fish.webp" "$publicImagesDir\tech\" -Force -ErrorAction SilentlyContinue
Move-Item "$baseDir\4_fish_shrimp.jpg" "$publicImagesDir\tech\" -Force -ErrorAction SilentlyContinue
Move-Item "$baseDir\4_header.png" "$publicImagesDir\tech\" -Force -ErrorAction SilentlyContinue

# 移动产品图片（根目录）
Write-Host "移动产品图片..." -ForegroundColor Cyan
Move-Item "$baseDir\dish (1).JPG" "$publicImagesDir\products\" -Force -ErrorAction SilentlyContinue
Move-Item "$baseDir\dish (2).JPG" "$publicImagesDir\products\" -Force -ErrorAction SilentlyContinue
Move-Item "$baseDir\dish (3).JPG" "$publicImagesDir\products\" -Force -ErrorAction SilentlyContinue
Move-Item "$baseDir\fish_quality (1).jpg" "$publicImagesDir\products\" -Force -ErrorAction SilentlyContinue
Move-Item "$baseDir\fish_quality (2).jpg" "$publicImagesDir\products\" -Force -ErrorAction SilentlyContinue
Move-Item "$baseDir\other_fish (1).png" "$publicImagesDir\products\" -Force -ErrorAction SilentlyContinue
Move-Item "$baseDir\other_fish (2).png" "$publicImagesDir\products\" -Force -ErrorAction SilentlyContinue
Move-Item "$baseDir\other_fish (3).png" "$publicImagesDir\products\" -Force -ErrorAction SilentlyContinue
Move-Item "$baseDir\product_package (1).jpg" "$publicImagesDir\products\" -Force -ErrorAction SilentlyContinue
Move-Item "$baseDir\product_package (2).jpg" "$publicImagesDir\products\" -Force -ErrorAction SilentlyContinue
Move-Item "$baseDir\gift_package.png" "$publicImagesDir\products\" -Force -ErrorAction SilentlyContinue

# 移动产品图片（components文件夹）
Write-Host "移动components中的产品图片..." -ForegroundColor Cyan
Move-Item "$baseDir\components\dish (1).JPG" "$publicImagesDir\products\" -Force -ErrorAction SilentlyContinue
Move-Item "$baseDir\components\dish (2).JPG" "$publicImagesDir\products\" -Force -ErrorAction SilentlyContinue
Move-Item "$baseDir\components\dish (3).JPG" "$publicImagesDir\products\" -Force -ErrorAction SilentlyContinue
Move-Item "$baseDir\components\fish_display (1).jpg" "$publicImagesDir\products\" -Force -ErrorAction SilentlyContinue
Move-Item "$baseDir\components\fish_display (2).jpg" "$publicImagesDir\products\" -Force -ErrorAction SilentlyContinue
Move-Item "$baseDir\components\fish_quality (1).jpg" "$publicImagesDir\products\" -Force -ErrorAction SilentlyContinue
Move-Item "$baseDir\components\fish_quality (2).jpg" "$publicImagesDir\products\" -Force -ErrorAction SilentlyContinue

# 移动基地图片
Write-Host "移动基地图片..." -ForegroundColor Cyan
Move-Item "$baseDir\base (1).jpg" "$publicImagesDir\bases\" -Force -ErrorAction SilentlyContinue
Move-Item "$baseDir\base (2).jpg" "$publicImagesDir\bases\" -Force -ErrorAction SilentlyContinue

# 移动团队图片
Write-Host "移动团队图片..." -ForegroundColor Cyan
Move-Item "$baseDir\ppl (1).png" "$publicImagesDir\team\" -Force -ErrorAction SilentlyContinue
Move-Item "$baseDir\ppl (2).png" "$publicImagesDir\team\" -Force -ErrorAction SilentlyContinue

# 移动对比图片
Write-Host "移动对比图片..." -ForegroundColor Cyan
Move-Item "$baseDir\contrast (1).jpg" "$publicImagesDir\other\" -Force -ErrorAction SilentlyContinue
Move-Item "$baseDir\contrast (2).jpg" "$publicImagesDir\other\" -Force -ErrorAction SilentlyContinue

# 移动背景图片
Write-Host "移动背景图片..." -ForegroundColor Cyan
Move-Item "$baseDir\bg_1.jpg" "$publicImagesDir\backgrounds\" -Force -ErrorAction SilentlyContinue
Move-Item "$baseDir\bg_2.jpg" "$publicImagesDir\backgrounds\" -Force -ErrorAction SilentlyContinue

# 移动其他图片
Write-Host "移动其他图片..." -ForegroundColor Cyan
Move-Item "$baseDir\logo（长）.png" "$publicImagesDir\other\" -Force -ErrorAction SilentlyContinue
Move-Item "$baseDir\weixin.jpg" "$publicImagesDir\other\" -Force -ErrorAction SilentlyContinue

Write-Host "`n✅ 图片移动完成！" -ForegroundColor Green
Write-Host "文件夹结构：" -ForegroundColor Yellow
Write-Host "  public/images/hero/       - 首页图片"
Write-Host "  public/images/tech/       - 四养技术图片"
Write-Host "  public/images/products/   - 产品图片"
Write-Host "  public/images/bases/      - 基地图片"
Write-Host "  public/images/team/       - 团队图片"
Write-Host "  public/images/backgrounds/- 背景图片"
Write-Host "  public/images/other/      - 其他图片（logo、微信等）"
