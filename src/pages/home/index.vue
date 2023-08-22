<template>
  <div class="page-info">
    <!-- 轮播图 -->
    <Carousel />
    <!-- 搜索 -->
    <Search />
    <!-- 医院结构 -->
    <el-row gutter="20">
      <!-- 左侧区域 -->
      <el-col :span="20">
        <!-- 
          医院等级 
          传入自定义事件 onLevelChange
          -->
        <Level @onLevelChange="onLevelChange" />
        <!-- 地区 -->
        <Region />
        <!-- 医院卡片列表 -->
        <div class="hospital-list">
          <Card
            class="hospital-card"
            v-for="(item, index) in hospitalList"
            :key="index"
            :hospitalDetail="item"
            :onPageIndexChange="onPageIndexChange"
          />
        </div>
        <!-- 分页组件 -->
        <Pagination
          class="pagination"
          :pageInfo="pageInfo"
          :onPageIndexChange="onPageIndexChange"
        />
      </el-col>
      <!-- 右侧区域 -->
      <el-col :span="4">right</el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
// 引入首页轮播图组件
import Carousel from "./carousel/index.vue";
// 引入首页搜索组件
// 删除ts警告
// @ts-ignore
import Search from "./search/index.vue";
// 引入等级组件
import Level from "./level/index.vue";
// 引入地区组件
import Region from "./region/index.vue";
// 引入卡片组件
import Card from "./card/index.vue";
// 引入分页组件
// @ts-ignore
import Pagination from "./pagination/index.vue";

// 引入生命周期组件
import { onMounted, ref, reactive } from "vue";

// 引入医院接口
import { reqHospitalList } from "@/api/home/index";

// 引入医院数据对象
import type { HospitalResponseData, Content } from "@/api/home/type";

// 分页
let pageInfo = reactive({
  pageIndex: 1,
  pageSize: 10,
  total: 0,
});
let pageIndex = ref<number>(1);
let pageSize = ref<number>(10);

// 分页总数
let totalCount = ref<number>(0);

// 医院数据列表
let hospitalList = ref<Content>([]);

// 医院等级
let hosType = ref<string>("");
// 医院地区
let districtCode = ref<string>("");

/**
 * 子组件level变更时父组件的自定义事件回调函数
 */
function onLevelChange(level: string) {
  console.log("onLevelChange():", level);
  hosType.value = level;
  // 等级变更，重新请求数据
  requestHospitalList();
}

// 组件被挂载时
onMounted(() => {
  requestHospitalList();
});

/**
 * 下标变更时的回调函数
 */
function onPageIndexChange(index: number, size: number) {
  console.log("home index onPageIndexChange():", index);
  pageIndex.value = index;
  pageSize.value = size;
  requestHospitalList();
}

/**
 * 请求医院列表
 */
const requestHospitalList = async () => {
  const result: HospitalResponseData = await reqHospitalList(
    pageIndex.value,
    pageSize.value,
    hosType.value,
    districtCode.value
  );
  console.log("requestHospitalList-->", result);
  if (result.code === 200) {
    hospitalList.value = result.data.content;
    pageInfo.total = result.data.totalElements;
  }
};
</script>

<style scope lang="scss">
.page-info {
  width: 100%;
}

.hospital-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
}

.hospital-card {
  width: 48%;
  margin-bottom: 10px;
}

.hospital-card:hover {
  cursor: pointer;
}

.pagination {
  margin: 20px 0;
}
</style>