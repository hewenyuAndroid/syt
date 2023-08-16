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

## SCSS 安装

命令: `npm i --save-dev sass`

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

## 去除项目默认的样式

npm 默认创建的项目中会有默认的样式，需要清除默认样式

1. 进入npm官网 https://www.npmjs.com/ 搜索 `reset.scss`
2. 找到 对应的 `reset.scss` 文件拷贝文件代码: `https://www.npmjs.com/package/reset.scss?activeTab=code`
3. 在 `src` 目录下创建 `style/reset.scss` 文件，然后将 第2步的内容拷贝到该文件下;
4. 在 `main.ts` 文件中导入清除默认样式的 css 文件: `import '@/style/reset.scss'`;

注意: 如果执行完上述步骤报错 (`Preprocessor dependency "sass" not found. Did you install it?`)，则需要安装 `sass` 插件;

执行 `npm install sass`, 安装成功后重启项目;


## 安装 vue-router

- 安装最新版本: `npm i vue-router`  // 最新版本 4.x
- 安装历史版本: `npm i vue-router@3`   // 安装 vue2 对应的路由版本 3.x


## element ui 使用

> element ui 组件安装

首次使用需要先安装: `npm install element-plus --save`

安装文档: https://element-plus.gitee.io/zh-CN/guide/installation.html

导入文档: https://element-plus.gitee.io/zh-CN/guide/quickstart.html

> element 图标组件

首次使用需要先安装: `npm install @element-plus/icons-vue`

文档: https://element-plus.gitee.io/en-US/component/icon.html#icon-usage

## 安装 axios

> 安装最新版本: `npm i axios`


## vite 跨域配置

文档: https://cn.vitejs.dev/config/server-options.html#server-proxy
