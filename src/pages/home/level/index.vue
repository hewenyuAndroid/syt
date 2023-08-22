<template>
  <div class="container">
    <header>
      <h1>医院</h1>
    </header>
    <div class="level">
      <span>等级:</span>
      <ul>
        <li class="active">全部</li>
        <li>三级甲等</li>
        <li>三级甲等</li>
        <li>三级甲等</li>
        <li>三级甲等</li>
        <li>三级甲等</li>
        <li>三级甲等</li>
        <li>三级甲等</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

// 导入等级的response对象
import type { HospitalLevelOrRegionData } from "@/api/home/type";

// 导入等级接口函数
import { reqHospitalLevelOrRegion } from "@/api/home/index";

onMounted(() => {
  requestLevel();
});

const requestLevel = async () => {
  const result: HospitalLevelOrRegionData = await reqHospitalLevelOrRegion(
    "HosType"
  );
  console.log("----aaa>", result);
};
</script>

<script lang="ts">
// vue2 写法
export default {
  name: "Level",
};
</script>

<style scoped lang="scss">
.level {
  color: #7f7f7f;
  margin-top: 20px;
}
header h1 {
  font-weight: 900;
  margin: 10px 0;
}
.level {
  display: flex;
  font-size: 16px;
}
.level ul {
  display: flex;
}
.level ul li {
  margin-left: 10px;
  // todo 这个写法需要了解下
  &.active {
    color: #55a6fe;
  }
}

.level ul li:hover {
  color: #55a6fe;
  cursor: pointer;
}
</style>