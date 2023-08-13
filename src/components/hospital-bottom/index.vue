<template>
  <div class="footer">
    <div class="content">
      <div class="left">京ICP备案号: 123456789号-1 电话号: xxxxxx</div>

      <div class="right">
        <span>联系我们</span>
        <span>合作伙伴</span>
        <span>用户协议</span>
        <span>隐私协议</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scope lang="scss">
.footer {
  width: 100%;
  height: 50px;
  background-color: #f0f2f5;
}
.content {
  width: 1200px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #666666;
}

.content .right span {
  margin-left: 10px;
}
</style>