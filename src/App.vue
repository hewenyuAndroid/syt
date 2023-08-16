<script setup lang="ts">
import request from "@/utils/request";
import { onMounted } from "vue";
import { reqHospital } from "@/api/home/index";

onMounted(() => {
  a();
  console.log("Mounted");
});

const a = async () => {
  let aaa: any = await reqHospital(1, 2);
  console.log("--->", aaa);
};
</script>

<template>
  <div class="container">
    <!-- 顶部 -->
    <HospitalTop />
    <!-- 内容区域 -->
    <div class="content">
      <!-- 展示路由内容区域 -->
      <router-view></router-view>
    </div>
    <!-- 底部 -->
    <HospitalBottom />
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content {
  width: 1200px;
  min-height: 700px;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
