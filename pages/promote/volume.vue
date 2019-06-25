<template>
  <div class="volume">
    <div style=" background:#F3F4F8;padding:10px 20px;">
      <div v-for="(item, index) in [0, 1]" :key="index" class="content flex">
        <div style="width:100px;text-align:center;margin-top:26px">
          <p style="color:#fff;font-size:18px;font-weight:bold">
            NV25SAZ
          </p>
          <p style="color:#fff;font-size:12px;;margin-top:25px">
            支付码
          </p>
        </div>
        <div
          class="flex-1"
          style="color:#333;font-size:14px;padding:21px 0 0 9px"
        >
          <p>用于公司内购商城</p>
          <p>仅可使用一次</p>
          <p style="color:#999;font-size:12px;margin-top:17px">
            有效期：2017/06/17~2017/06/20
          </p>
        </div>
      </div>
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
      title: '活动券'
    }
  }
}
</script>
<style lang="less" scoped>
.volume {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #f3f4f8;
  .content {
    width: 100%;
    height: 100px;
    background: url('~assets/img/coupon/volume.png');
    background-size: 100% 100%;
    margin-bottom: 10px;
  }
}
</style>
