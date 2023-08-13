// vue3 框架提供的方法 createApp，可以用来创建应用实例
import { createApp } from 'vue'
// 引入清除默认样式
import '@/style/reset.scss'
// 引入根组件App
import App from '@/App.vue'

// 引入全局组件: top bottom
import HospitalTop from '@/components/hospital-top/index.vue'
import HospitalBottom from '@/components/hospital-bottom/index.vue'

// 引入 vue-router 核心插件并安装
import router from '@/router'

// 引入 element ui组件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// element-plus 国际化
// 忽略 ts 警告
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// 创建应用实例对象
const app = createApp(App)

// 注册全局组件
app.component('HospitalTop', HospitalTop)
app.component('HospitalBottom', HospitalBottom)

// 安装 vue-router
app.use(router);
// 安装 element ui 组件
app.use(ElementPlus, {
    // 配置 element-plus 组件国际化语言为中文
    locale: zhCn,
});

// 挂载
app.mount('#app')
