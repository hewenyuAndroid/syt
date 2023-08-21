/**
 * 对 axios 进行二次封装
 * 
 * 封装的目的:
 * 1. 利用 axios 请求、响应拦截器功能;
 * 2. 请求拦截器: 可以在请求头中统一传入公共参数
 * 3. 相应拦截器: 可以统一预处理 response 数据
 */

// 1. 引入 axios
import axios from 'axios';

// 2. 利用 axios.create 方法创建一个 axios 实例 （可以设置基础路径、超时时间等）
const request = axios.create({
    baseURL: '/admin',    // 请求的基础路径设置
    timeout: 5000,  // 设置超时时间 5000 ms
})

// 3. 添加请求拦截器
request.interceptors.request.use((config) => {
    // config: 请求拦截器回调注入的对象 （配置对象），配置对象身上最重要的一件事情 headers 属性
    // 可以通过携带公共参数
    return config;
})

// 4. 添加响应拦截器
request.interceptors.response.use(
    (response) => {
        // 响应拦截器成功的回调，一般会简化数据
        // 这里直接返回 data
        return response.data;
    },
    (error) => {
        // 处理网络请求失败的错误
        console.log('--aaa>>',error)
        return Promise.reject(new Error(error.message));
    }
)

// 5. 对外暴露 request
export default request;

