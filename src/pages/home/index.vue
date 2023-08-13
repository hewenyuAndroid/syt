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
          <Card class="hospital-card" v-for="item in 10" :key="item" />
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