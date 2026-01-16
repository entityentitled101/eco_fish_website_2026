const fs = require('fs');
const path = require('path');

// 递归获取所有tsx和ts文件
function getAllFiles(dirPath, arrayOfFiles = []) {
    const files = fs.readdirSync(dirPath);

    files.forEach(file => {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
        } else if ((file.endsWith('.tsx') || file.endsWith('.ts')) && file !== 'utils.ts') {
            arrayOfFiles.push(fullPath);
        }
    });

    return arrayOfFiles;
}

// 处理文件
const files = [...getAllFiles('./components'), ...getAllFiles('./')];
let modifiedCount = 0;

files.forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;

    // 替换 src="/images/
    content = content.replace(/src="(\/images\/[^"]+)"/g, 'src={getImageUrl("$1")}');

    // 替换 image: "/images/
    content = content.replace(/image:\s*"(\/images\/[^"]+)"/g, 'image: getImageUrl("$1")');

    if (content !== originalContent) {
        // 添加 import
        if (!content.includes('getImageUrl')) {
            content = content.replace(/(import.*?;)/, "$1\nimport { getImageUrl } from '../utils';");
        }

        fs.writeFileSync(filePath, content, 'utf8');
        modifiedCount++;
        console.log('✓ 已修改:', path.basename(filePath));
    }
});

console.log(`\n完成! 共修改 ${modifiedCount} 个文件`);
