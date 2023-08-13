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
import Search from "./search/index.vue";
// 引入等级组件
import Level from "./level/index.vue";
// 引入地区组件
import Region from "./region/index.vue";
</script>

<style scope lang="scss">
.page-info {
  width: 100%;
}
</style>