import { createRouter, createWebHistory } from 'vue-router';

// createRouter 方法用于创建路由器实例，可以管理多个路由

export default createRouter({
    // 设置路由器模式 (history模式，这里可以考虑使用hash模式)
    history: createWebHistory(),
    // 管理路由 （配置路由）
    routes: [
        {
            path: '/home',
            component: () => import('@/pages/home/index.vue')
        },
        {
            path: '/hospital',
            component: () => import('@/pages/hospital/index.vue')
        },
        {
            // 配置默认跳转到 home 页面
            path: '/',
            redirect: '/home'
        }
    ],
    // 滚动行为: 控制滚动条位置
    scrollBehavior() {
        return {
            left: 0,
            top: 0
        }
    }

})