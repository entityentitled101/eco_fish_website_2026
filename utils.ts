
/**
 * 获取图片的完整路径
 * 自动根据环境（开发/生产）添加正确的 Base URL
 * 
 * @param path 图片在 public 目录下的路径，例如 "/images/fish.jpg"
 * @returns 完整的图片 URL
 */
export const getImageUrl = (path: string): string => {
    // 确保 path 以 / 开头
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;

    // import.meta.env.BASE_URL 在 Vite 中会自动根据 base 配置注入
    // 开发环境通常是 "/"
    // 生产环境会是 "/eco_fish_website_2026/"
    return `${import.meta.env.BASE_URL}${normalizedPath.substring(1)}`;
};
