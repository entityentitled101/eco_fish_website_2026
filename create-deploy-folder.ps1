# Create deployment folder with only necessary files

$deployFolder = "deploy"

Write-Host "=== Creating Deployment Folder ===" -ForegroundColor Cyan
Write-Host ""

# Remove old deploy folder if exists
if (Test-Path $deployFolder) {
    Write-Host "Removing old deployment folder..." -ForegroundColor Yellow
    Remove-Item -Recurse -Force $deployFolder
}

# Create new deploy folder
Write-Host "Creating new deployment folder: $deployFolder" -ForegroundColor Green
New-Item -ItemType Directory -Path $deployFolder | Out-Null

# Files and folders to copy
$itemsToCopy = @(
    "public",
    "components",
    ".github",
    "App.tsx",
    "constants.ts",
    "index.html",
    "index.tsx",
    "metadata.json",
    "package.json",
    "package-lock.json",
    "tsconfig.json",
    "types.ts",
    "utils.ts",
    "vite.config.ts",
    ".gitignore",
    "README.md"
)

# Copy each item
foreach ($item in $itemsToCopy) {
    if (Test-Path $item) {
        Write-Host "Copying: $item" -ForegroundColor Gray
        if (Test-Path $item -PathType Container) {
            # It's a directory
            Copy-Item -Path $item -Destination "$deployFolder\$item" -Recurse -Force
        }
        else {
            # It's a file
            Copy-Item -Path $item -Destination "$deployFolder\$item" -Force
        }
    }
}

Write-Host ""
Write-Host "=== Checking Deployment Folder Size ===" -ForegroundColor Cyan
Write-Host ""

# Calculate size
$deploySize = (Get-ChildItem "$deployFolder" -Recurse -File | Measure-Object -Property Length -Sum).Sum
$deploySizeMB = [math]::Round($deploySize / 1MB, 2)
$fileCount = (Get-ChildItem "$deployFolder" -Recurse -File | Measure-Object).Count

Write-Host "Total files: $fileCount" -ForegroundColor Green
Write-Host "Total size: $deploySizeMB MB" -ForegroundColor Green
Write-Host ""

if ($deploySizeMB -le 100) {
    Write-Host "SUCCESS: Deployment folder is ready! ($deploySizeMB MB)" -ForegroundColor Green
    Write-Host "Folder name: $deployFolder" -ForegroundColor Cyan
    Write-Host "Location: $PWD\$deployFolder" -ForegroundColor Cyan
}
else {
    Write-Host "WARNING: Size is $deploySizeMB MB, exceeds 100MB limit" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "=== Next Steps ===" -ForegroundColor Cyan
Write-Host "1. Open the 'deploy' folder in File Explorer" -ForegroundColor White
Write-Host "2. Compress it to ZIP or upload directly to hosting service" -ForegroundColor White
Write-Host ""
Write-Host "Opening folder in Explorer..." -ForegroundColor Green
Start-Process explorer.exe -ArgumentList $deployFolder
