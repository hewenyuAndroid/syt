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