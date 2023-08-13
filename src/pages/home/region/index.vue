<template>
  <div class="region">
    <span>地区:</span>
    <ul>
      <li class="active">全部</li>
      <li>杭州</li>
      <li>杭州</li>
      <li>杭州</li>
      <li>杭州</li>
      <li>杭州</li>
      <li>杭州</li>
      <li>杭州</li>
      <li>杭州</li>
      <li>杭州</li>
      <li>杭州</li>
      <li>杭州</li>
      <li>杭州</li>
      <li v-for="i in 20" :key="i">杭州1</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
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
  width: 60px;
}

.active {
  color: #55a6fe;
}

.region ul li:hover {
  color: #55a6fe;
  cursor: pointer;
}
</style>