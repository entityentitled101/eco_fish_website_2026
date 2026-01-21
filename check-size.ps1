# Check project size and images

Write-Host "=== Project Size Analysis ===" -ForegroundColor Cyan
Write-Host ""

# Exclude node_modules and .git
$allFiles = Get-ChildItem -Recurse -File | 
Where-Object { $_.FullName -notmatch '\\node_modules\\' -and $_.FullName -notmatch '\\.git\\' }

$totalSize = $allFiles | Measure-Object -Property Length -Sum
$totalMB = [math]::Round($totalSize.Sum / 1MB, 2)
$totalCount = $totalSize.Count

Write-Host "Total files: $totalCount" -ForegroundColor Green
Write-Host "Total size: $totalMB MB" -ForegroundColor Green
Write-Host ""

Write-Host "=== Image Files Analysis ===" -ForegroundColor Cyan
Write-Host ""

# Check all images
$images = Get-ChildItem -Recurse -Include *.jpg, *.jpeg, *.png, *.gif, *.webp, *.JPG -File |
Where-Object { $_.FullName -notmatch '\\node_modules\\' -and $_.FullName -notmatch '\\.git\\' }

$imageSize = ($images | Measure-Object -Property Length -Sum).Sum
$imageMB = [math]::Round($imageSize / 1MB, 2)

Write-Host "Total images: $($images.Count)" -ForegroundColor Yellow
Write-Host "Images size: $imageMB MB" -ForegroundColor Yellow
Write-Host ""

Write-Host "=== Top 10 Largest Images ===" -ForegroundColor Cyan
Write-Host ""

$images | 
Select-Object Name, @{Name = "MB"; Expression = { [math]::Round($_.Length / 1MB, 2) } }, @{Name = "KB"; Expression = { [math]::Round($_.Length / 1KB, 0) } } | 
Sort-Object MB -Descending |
Select-Object -First 10 |
Format-Table -AutoSize

Write-Host ""
Write-Host "=== Other Files ===" -ForegroundColor Cyan

$jsFiles = Get-ChildItem -Recurse -Include *.js, *.ts, *.tsx, *.jsx -File |
Where-Object { $_.FullName -notmatch '\\node_modules\\' -and $_.FullName -notmatch '\\.git\\' -and $_.FullName -notmatch '\\dist\\' }
$jsMB = [math]::Round(($jsFiles | Measure-Object -Property Length -Sum).Sum / 1MB, 2)

Write-Host "JS/TS files: $($jsFiles.Count) files, $jsMB MB" -ForegroundColor Magenta

$otherFiles = $allFiles | Where-Object { 
    $_.Extension -notin @('.jpg', '.jpeg', '.png', '.gif', '.webp', '.JPG', '.js', '.ts', '.tsx', '.jsx')
}
$otherMB = [math]::Round(($otherFiles | Measure-Object -Property Length -Sum).Sum / 1MB, 2)

Write-Host "Other files: $($otherFiles.Count) files, $otherMB MB" -ForegroundColor Magenta
Write-Host ""

Write-Host "=== Feasibility Check ===" -ForegroundColor Green
Write-Host ""
if ($totalMB -le 100) {
    Write-Host "SUCCESS: Current size is $totalMB MB, within 100MB limit!" -ForegroundColor Green
}
else {
    $needToReduce = [math]::Round($totalMB - 100, 2)
    Write-Host "ALERT: Current size is $totalMB MB, need to reduce $needToReduce MB" -ForegroundColor Red
    Write-Host "Suggestion: Compress images (currently $imageMB MB)" -ForegroundColor Yellow
}
Write-Host ""
