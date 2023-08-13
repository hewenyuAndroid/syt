// vue3 框架提供的方法 createApp，可以用来创建应用实例
import { createApp } from 'vue'
// 引入清除默认样式
import '@/style/reset.scss'
// 引入根组件App
import App from '@/App.vue'

// 引入全局组件: top bottom
import HospitalTop from '@/components/hospital-top/index.vue'
import HospitalBottom from '@/components/hospital-bottom/index.vue'

// 创建应用实例对象
const app = createApp(App)

// 注册全局组件
app.component('HospitalTop', HospitalTop)
app.component('HospitalBottom', HospitalBottom)

// 挂载
app.mount('#app')
