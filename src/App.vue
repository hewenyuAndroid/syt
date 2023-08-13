<script setup lang="ts">
</script>

<template>
  <div class="container">
    <!-- 顶部 -->
    <HospitalTop />
    <!-- 内容区域 -->
    <div class="content">content</div>
    <!-- 底部 -->
    <div class="footer">footer</div>
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
  background-color: aqua;
  height: 700px;
  margin-top: 70px;
}

.footer {
  width: 100%;
  height: 100px;
  background-color: bisque;
}
</style>
