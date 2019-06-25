<template>
  <div class="main">
    <div style="padding:30px 20px 0;">
      <div
        class="flex"
        style="justify-content: space-around;margin-bottom:10px"
      >
        <div
          v-for="(item, index) in list"
          :key="index"
          style="background:#fff;text-align:center;width:105px;height:110px;border-radius:4px;box-shadow:0px 2px 14px 0px rgba(217,217,217,0.5);"
        >
          <img
            :src="require('../../assets/img/help/title' + (index + 1) + '.png')"
            style="width:46px;height:46px;margin: 18px 0 10px;"
            alt=""
          />
          <p class="size">{{ item }}</p>
        </div>
      </div>

      <div class="flex" style="justify-content: space-around;">
        <div
          style="background:#fff;text-align:center;width:105px;height:110px;border-radius:4px;box-shadow:0px 2px 14px 0px rgba(217,217,217,0.5);"
        >
          <img
            src="~assets/img/help/title4.png"
            style="width:46px;height:46px;margin: 18px 0 10px;"
            alt=""
          />
          <p class="size">退换货规则</p>
        </div>
        <div
          style="background:#fff;text-align:center;width:105px;height:110px;border-radius:4px;box-shadow:0px 2px 14px 0px rgba(217,217,217,0.5);"
        >
          <img
            src="~assets/img/help/title5.png"
            style="width:46px;height:46px;margin: 18px 0 10px;"
            alt=""
          />
          <p class="size">配送服务规则</p>
        </div>
        <div style="width:105px;height:110px;border-radius:4px"></div>
      </div>
    </div>
    <div class="fixed"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: ['会员规则', '积分规则', '优惠券规则']
    }
  },
  head() {
    return {
      title: '帮助中心'
    }
  }
}
</script>
<style lang="less" scoped>
.main {
  .size {
    color: #333333;
    font-size: 13px;
    font-weight: 400;
  }
  .fixed {
    width: 100%;
    height: 372px;
    position: fixed;
    background: url('~assets/img/help/bg.png');
    background-size: 100% 100%;
    bottom: 0;
  }
}
</style>
