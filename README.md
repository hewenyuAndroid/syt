# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.


# 项目配置

## 创建项目

`npm create vite`

`vite` 官网: https://cn.vitejs.dev/

## 启动项目自动打开浏览器配置

```js
// package.json
"scripts": {
   // 增加 --open ，num run dev 启动项目后自动打开浏览器
   "dev": "vite --open",
   "build": "vue-tsc && vite build",
   "preview": "vite preview"
},
```

## src别名配置

找到 `vite.config.ts` 配置文件.

如果 红色波浪线提示，则安装 `npm install @types/node` , `@types/node` 是一个文件包，用于描述 `Node.js` 核心模块和常用的第三方库的类型信息;

```js
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
 }
})
```

找到 `tsconfig.json` 配置文件，找到配置项 `compilerOptions` 添加配置，这一步的作用是让 IDE 可以对路径进行智能提示;

```js
"baseUrl": ".",
"paths": {
   "@/*": ["src/*"]
}
```

## main.ts 中 导入 ./App.vue 报错

新建项目后 `main.ts` 中包: `cannot find module './App.vue'...`

报错原因: vite使用的是 ts, ts识别不了 `.vue` 后缀的文件

解决办法: 在项目的根目录下创建 `env.d.ts` 文件，打开文件输入如下内容即可:

```js
declare module "*.vue" {
    import { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, Any>
    export default component
}
```