import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 导入 path
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 给 src 目录增加别名配置
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src')
    }
  },
  // 配置代理跨域
  server: {
    proxy: {
      '/api': {
        target: 'http://syt.atguigu.cn',
        changeOrigin: true,
        // /api 路径不需要重写，默认保留
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/admin_8201': {
        target: 'http://139.198.34.216:8201',
        changeOrigin: true,
        // /admin_8201 替换成 /admin
        rewrite: (path) => path.replace(/^\/admin_8201/, '/admin'),
      },
      '/admin_8202': {
        target: 'http://139.198.34.216:8202',
        changeOrigin: true,
        // /admin_8202 替换成 /admin
        rewrite: (path) => path.replace(/^\/admin_8202/, '/admin'),
      }
    }
  }
})
