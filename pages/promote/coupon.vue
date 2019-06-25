<template>
  <div class="coupon">
    <!-- 头部 -->
    <div class="head flex align-center">
      <p class="flex-1" style="font-size:14px;color:#fff;font-weight:500;">
        可用优惠券数量：5000
      </p>
      <p class="flex align-center justify-content rule">
        <img
          src="~assets/img/coupon/an.png"
          alt=""
          style="width:14px;height:14px;margin-right:3px"
        />
        <span>查看规则</span>
      </p>
    </div>
    <!-- tab -->
    <div class="flex align-center tab">
      <div
        v-for="(item, index) in ['未使用', '已使用', '已过期']"
        :key="index"
        class="flex-1"
        style="text-align:center"
        @click="handleTab(index)"
      >
        <p :style="{ color: type == index ? '#C44044' : '#666' }">{{ item }}</p>
        <p v-if="type == index" class="border"></p>
      </div>
    </div>
    <!-- 内容 -->
    <div style="padding:15px 20px;background: #f3f4f8;">
      <div v-for="(item, index) in [0, 1]" :key="index">
        <div class="content_bg flex align-center" :class="'content_bg' + type">
          <p style="color:#fff;font-size:12px;width:100px;text-align:center">
            <span>¥</span>
            <span style="color:#fff;font-size:30px">50</span>
          </p>
          <div class="flex-1" style="margin-left:12px">
            <div class="flex" style="height:76px">
              <div class="flex-1">
                <p
                  style="color:#333;font-size:14px;font-weight:bold;margin-top:14px"
                >
                  全场商品(限内购商城使用)
                </p>
                <p style="color:#666;font-size:13px;margin:7px 0 15px">
                  满减券 满100减51
                </p>
              </div>
              <img
                :src="
                  require('../../assets/img/coupon/tab_right' + type + '.png')
                "
                style="width:40px;height:40px;margin:16px 10px 0 0"
                alt=""
              />
            </div>
            <div style="color:#999;font-size:10px;">
              有效期：2019.04.01 ～ 2019.08.01
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: 0
    }
  },
  head() {
    return {
      title: '我的优惠券'
    }
  },
  methods: {
    // tab切换
    handleTab(index) {
      this.type = index
    }
  }
}
</script>
<style lang="less" scoped>
.coupon {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #f3f4f8;
  .head {
    height: 70px;
    background: linear-gradient(
      90deg,
      rgba(215, 191, 141, 1) 0%,
      rgba(195, 166, 106, 1) 100%
    );
    padding: 0 20px;
    .rule {
      height: 20px;
      border-radius: 10px;
      background: #fff;
      opacity: 0.79;
      color: #393835;
      font-size: 10px;
      font-weight: 400;
      padding: 0 8px;
    }
  }
  .tab {
    height: 40px;
    background: #fff;
    font-size: 14px;
    color: #666;
    font-weight: 400;
    box-shadow: 0px 2px 8px 0px rgba(228, 228, 228, 0.66);
  }
  .border {
    width: 15px;
    height: 2px;
    border-radius: 3px;
    background: #c44044;
    margin: auto;
    margin-top: 2px;
  }
  .content_bg {
    width: 100%;
    height: 100px;
    margin-bottom: 15px;
  }
  .content_bg0 {
    background: url('~assets/img/coupon/tab0.png');
    background-size: 100% 100%;
  }
  .content_bg1 {
    background: url('~assets/img/coupon/tab1.png');
    background-size: 100% 100%;
  }
  .content_bg2 {
    background: url('~assets/img/coupon/tab2.png');
    background-size: 100% 100%;
  }
}
</style>
