<template>
  <el-pagination
    v-model:current-page="pageInfo.pageIndex"
    v-model:page-size="pageInfo.pageSize"
    :page-sizes="[10, 20, 30, 40]"
    :background="true"
    layout="prev, pager, next, jumper, ->,sizes, total"
    :total="pageInfo.total"
    @current-change="changePage"
  />
</template>

<script setup lang="ts">
import { ref, computed, reactive } from "vue";

const props = defineProps(["onPageIndexChange", "pageInfo"]);

/**
 * 分页信息
 */
let pageInfo = reactive(props.pageInfo);

/**
 * 分页页码发生变化
 */
const changePage = (index: number) => {
  // 分页器下标发生变更时的回调函数
  console.log("---------------->changePage(), index=", index);
  props.onPageIndexChange(index);
  pageInfo.pageIndex = index;
};
</script>

<style scoped lang="scss">
</style>