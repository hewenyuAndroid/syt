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
})
