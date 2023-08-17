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
        <!-- 医院等级 -->
        <Level />
        <!-- 地区 -->
        <Region />
        <!-- 医院卡片列表 -->
        <div class="hospital-list">
          <Card
            class="hospital-card"
            v-for="(item, index) in hospitalList"
            :key="index"
            :hospitalDetail="item"
          />
        </div>
        <!-- 分页组件 -->
        <Pagination class="pagination" />
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

// 分页
let pageIndex = ref(1);
let pageSize = ref(10);

// 医院数据列表
let hospitalList = ref([]);

// 组件被挂载时
onMounted(() => {
  requestHospitalList();
});

const requestHospitalList = async () => {
  const result: any = await reqHospitalList(pageIndex.value, pageSize.value);
  console.log("requestHospitalList-->", result);
  hospitalList.value = result.data.data.content;
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