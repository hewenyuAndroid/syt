<template>
  <el-pagination
    v-model:current-page="currentPage"
    v-model:page-size="pageSize"
    :page-sizes="[10, 20, 30, 40]"
    :background="true"
    layout="prev, pager, next, jumper, ->,sizes, total"
    :total="total"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";

// 当前选中的页签
let currentPage = ref<number>(1);
let pageSize = ref<number>(42);
let total = ref<number>(400);
</script>

<style scoped lang="scss">
</style>