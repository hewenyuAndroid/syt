<template>
  <div class="page-info">
    <!-- 轮播图 -->
    <Carousel />
  </div>
</template>

<script setup lang="ts">
// 引入首页轮播图组件
import Carousel from "./carousel/index.vue";
</script>

<style scope lang="scss">
.page-info {
  width: 100%;
}
</style>