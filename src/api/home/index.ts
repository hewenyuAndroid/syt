// home页面相关接口管理

// 导入 request 对象
import request from "@/utils/request";

import type { HospitalResponseData, HospitalLevelOrRegionData } from "@/api/home/type";

// 通过枚举管理首页相关的api
enum API {
    // 获取已有的医院的数据接口地址
    URL_HOSPITAL_LIST = '/hosp/hospital/',
    /**
     * 获取医院的等级/地区
     * 等级: HosType
     * 地区: Beijin
     */
    URL_HOSPITAL_LEVEL_OR_REGION = "/cmn/dict/findByDictCode/"
}

enum DICT_CODE {
    LEVEL = "HosType",
    REGIONO = "Beijin"
}

/**
 * 分页获取医院列表
 * 
 * @param pageIndex 当前页面下标
 * @param pageSize 请求一页的数据大小
 * @returns 
 */
export const reqHospitalList = (pageIndex: number, pageSize: number) =>
    request.request_8201.get<any, HospitalResponseData>(API.URL_HOSPITAL_LIST + `${pageIndex}/${pageSize}`)

/**
 * 请求医院等级/地区
 * 
 * @param type 
 * @returns 
 */
export const reqHospitalLevelOrRegion = (type: string) =>
    request.request_8202.get<any, HospitalLevelOrRegionData>(API.URL_HOSPITAL_LEVEL_OR_REGION + `${type}`)
