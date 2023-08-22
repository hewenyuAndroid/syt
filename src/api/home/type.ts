// 定义首页模块数据类型

/**
 * 数据类型抽象
 */
export interface ResponseData {
    code: number,
    message: string,
    ok: boolean,
}

/**
 * 医院信息数据类型
 */
export interface Hospital {
    "id": string,
    "createTime": string,
    "updateTime": string,
    "isDeleted": number,
    "param": {
        "hostypeString": string,
        "fullAddress": string
    },
    "hoscode": string,
    "hosname": string,
    "hostype": string,
    "provinceCode": string,
    "cityCode": string,
    "districtCode": string,
    "address": string,
    "logoData": string,
    "intro": string,
    "route": string,
    "status": number,
    "bookingRule": {
        "cycle": number,
        "releaseTime": string,
        "stopTime": string,
        "quitDay": number,
        "quitTime": string,
        "rule": string[]
    }
}


/**
 * 医院信息数组类型
 */
export type Content = Hospital[];

/**
 * 定义接口返回的医院数据类型
 */
export interface HospitalResponseData extends ResponseData {
    data: {
        content: Content,
        "pageable": {
            "sort": {
                "sorted": boolean,
                "unsorted": boolean,
                "empty": boolean
            },
            "pageNumber": number,
            "pageSize": number,
            "offset": number,
            "paged": boolean,
            "unpaged": boolean
        },
        "totalPages": number,
        "totalElements": number,
        "last": boolean,
        "first": boolean,
        "sort": {
            "sorted": boolean,
            "unsorted": boolean,
            "empty": boolean
        },
        "numberOfElements": number,
        "size": number,
        "number": number,
        "empty": boolean
    }
}

/**
 * 医院等级/地区数据对象
 */
export interface HospitalLevelOrRegion {
    "createTime": string,
    "dictCode": string,
    "hasChildren": boolean,
    "id": number,
    "isDeleted": number,
    "name": string,
    "param": {},
    "parentId": number,
    "updateTime": string,
    "value": string
};

export type HospitalLevelOrRegionArr = HospitalLevelOrRegion[];

export interface HospitalLevelOrRegionData extends ResponseData {

}

