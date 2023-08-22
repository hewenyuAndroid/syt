<template>
  <div class="container">
    <header>
      <h1>医院</h1>
    </header>
    <div class="level">
      <span>等级:</span>
      <ul>
        <!-- 
          1.定义 active 属性，值为 currentLevel == ''
          2.增加点击事件，切换 currentLevel 为默认值
        -->
        <li :class="{ active: currentLevel == '' }" @click="changeLevel('')">
          全部
        </li>
        <li
          v-for="level in levelList"
          :key="level.id"
          :class="{ active: currentLevel == level.id }"
          @click="changeLevel(level.id)"
        >
          {{ level.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

// 导入等级的response对象
import type {
  HospitalLevelOrRegionData,
  HospitalLevelOrRegionArr,
} from "@/api/home/type";

// 导入等级接口函数
import { reqHospitalLevelOrRegion, DICT_CODE } from "@/api/home/index";

onMounted(() => {
  requestLevel();
});

// 等级数据
const levelList = ref<HospitalLevelOrRegionArr>([]);

/**
 * 当前选中的level
 * 全部: ''
 * 其它: level.id
 */
let currentLevel = ref<string>("");

function changeLevel(level: string) {
  console.log("changeLevel(): level=", level);
  currentLevel.value = level;
  // todo 修改level
}

const requestLevel = async () => {
  // 请求医院等级数据
  const result: HospitalLevelOrRegionData = await reqHospitalLevelOrRegion(
    DICT_CODE.LEVEL
  );
  console.log("---->requestLevel():", result);

  // 赋值响应式数据
  levelList.value = result.data;
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