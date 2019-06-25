<template>
  <div class="activity">
    <div>
      活动详情。同首页
    </div>
    <div class="fixed">
      去分享
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  head() {
    return {
      title: '活动详情'
    }
  }
}
</script>
<style lang="less" scoped>
.activity {
  .fixed {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 48px;
    background: #c44044;
    color: #fff;
    font-size: 16px;
    text-align: center;
    line-height: 48px;
  }
}
</style>
