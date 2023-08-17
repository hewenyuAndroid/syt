// home页面相关接口管理

// 导入 request 对象
import request from "@/utils/request";

// 通过枚举管理首页相关的api
enum API {
    // 获取已有的医院的数据接口地址
    URL_HOSPITAL_LIST = '/hosp/hospital/'
}

// 分页获取议员列表
export const reqHospitalList = (pageIndex: number, pageSize: number) =>
    request.get(API.URL_HOSPITAL_LIST + `${pageIndex}/${pageSize}`)

