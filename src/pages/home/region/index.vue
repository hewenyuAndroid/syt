<template>
  <div class="region">
    <span>地区:</span>
    <ul>
      <li :class="{ active: currentRegion == '' }" @click="changeRegion('')">
        全部
      </li>
      <li
        v-for="region in regionList"
        :key="region.value"
        :class="{ active: currentRegion == region.value }"
        @click="changeRegion(region.value)"
      >
        {{ region.name }}
      </li>
      <li>杭州</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// 导入request函数
import { reqHospitalLevelOrRegion, DICT_CODE } from "@/api/home/index";
// 导入接口数据对象
import {
  HospitalLevelOrRegionData,
  HospitalLevelOrRegionArr,
} from "@/api/home/type";

// 导入组合式api
import { ref, onMounted } from "vue";

// 当前选中的地区
let currentRegion = ref<string>("");

// 地区数据列表
let regionList = ref<HospitalLevelOrRegionArr>([]);

const $emit = defineEmits(["onRegionChange"]);

function changeRegion(region: string) {
  console.log("changeRegion()", region);
  if (region == currentRegion.value) {
    console.log("changeRegion(): repeat click ", region);
    return;
  }
  currentRegion.value = region;
  $emit("onRegionChange", region);
}

onMounted(() => {
  requestRegion();
});

/**
 * 请求地区
 */
const requestRegion = async () => {
  const result: HospitalLevelOrRegionData = await reqHospitalLevelOrRegion(
    DICT_CODE.REGIONO
  );

  console.log("------>requestRegion():", result);
  // 更新响应式数据
  if (result.code == 200) {
    regionList.value = result.data;
  }
};
</script>

<script lang="ts">
// vue2 写法
export default {
  name: "Region",
};
</script>


<style scoped lang="scss">
.region {
  font-size: 16px;
  color: #7f7f7f;
  margin-top: 20px;
  display: flex;
}
.region ul {
  display: flex;
  // todo  flex 需要去了解下
  flex-wrap: wrap;
}
.region ul li {
  margin-left: 10px;
  margin-bottom: 10px;
}
.region span {
  width: 40px;
}

.active {
  color: #55a6fe;
}

.region ul li:hover {
  color: #55a6fe;
  cursor: pointer;
}
</style>