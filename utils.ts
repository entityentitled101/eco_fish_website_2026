// 图片路径工具函数
// 自动添加 GitHub Pages base 路径
export const getImageUrl = (path: string): string => {
    // 开发环境直接返回
    if (import.meta.env.DEV) {
        return path;
    }
    // 生产环境添加 base 路径
    const base = import.meta.env.BASE_URL || '/';
    return base + path.replace(/^\//, '');
};
