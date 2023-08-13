<template>
  <div class="top">
    <div class="content">
      <div class="left">
        <img src="../../assets/images/logo.png" alt="logo" />
        <p>尚医通 预约挂号统一平台</p>
      </div>

      <div class="right">
        <p class="help">帮助中心</p>
        <p class="login">登录/注册</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scope lang="scss">
.top {
  /* 固定在顶部上方，使用固定定位 */
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 70px;
  background-color: #fff;
}
.content {
  width: 1200px;
  height: 70px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.left {
  display: flex;
  justify-content: center;
  align-items: center;
}

.left img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
.left p {
  font-size: 20px;
  color: #55a6fe;
}

.right {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #999;
}
.help {
  margin-right: 10px;
}
</style>