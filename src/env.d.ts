// 解决 main.ts 中 import App from '@/App.vue' 报错
declare module "*.vue" {
    import { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, Any>
    export default component
}