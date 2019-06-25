<template>
  <div class="pay">
    <div class="top" style="">
      <img
        src="~assets/img/trade/pay.png"
        alt=""
        style="width:94px;height:93px;margin-bottom:30px"
      />
      <p style="">您的订单支付成功</p>
    </div>
    <div style="margin-top:45px;padding:0 20px">
      <div
        class="flex"
        style="color:#fff;font-size:17px;height:44px;line-height:44px"
      >
        <div
          class="flex-1"
          style="background:#C5AA6E;border-radius:5px;text-align:center;margin-right:20px;"
        >
          返回商城
        </div>
        <div
          class="flex-1"
          style="background:#C44044;border-radius:5px;text-align:center"
        >
          查看订单
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
      title: '支付成功'
    }
  }
}
</script>
<style lang="less" scoped>
.pay {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #f3f4f8;
  .top {
    text-align: center;
    background: #fff;
    padding: 42px 0;
    color: #000;
    font-size: 17px;
    font-weight: bold;
  }
}
</style>
