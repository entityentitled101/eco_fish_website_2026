import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  
  // 检查部署目标：OSS 或 GitHub Pages
  const deployTarget = process.env.DEPLOY_TARGET || 'github';
  const isOSS = deployTarget === 'oss';
  
  return {
    // OSS 部署使用根路径 '/'，GitHub Pages 使用子路径
    base: isOSS ? '/' : (mode === 'production' ? '/eco_fish_website_2026/' : '/'),
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
