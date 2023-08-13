<template>
  <div class="page-search">
    <el-autocomplete :trigger-on-focus="false" clearable placeholder="请输入" />
    <el-button type="primary" size="default" :icon="Search">搜索</el-button>
  </div>
</template>

<script setup lang="ts">
// 引入 element-plus 提供的图标
import { Search } from "@element-plus/icons-vue";

</script>

<style scoped lang="scss">
.page-search {
  width: 100%;
  height: 50px;
  margin: 20px 0;
  //   background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
}

// 深度选择器
// css: >>>
// scss: ::v-deep
::v-deep(.el-input__wrapper) {
  width: 600px;
  margin-right: 10px;
}

.el-button{
    width: 120px;
}
</style>