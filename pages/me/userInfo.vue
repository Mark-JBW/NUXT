<template>
  <div class="main">
    <!-- //头部部分 -->
    <div class="head">
      <img src="~assets/img/score/heardImg.png" alt="" class="heardImg" />
      <div style="flex:1;display:flex;align-items: center;">
        <div style="flex:1">
          <p style="font-size:16px;color:#fff">
            <span style="vertical-align: super;">懒羊羊</span>
            <img
              src="~assets/img/score/member_type.png"
              alt=""
              style="width:28px;height:25px;vertical-align: bottom;"
            />
          </p>
          <p style="margin: -5px 0;">
            <img
              v-for="(item, index) in [0, 1, 2, 3, 4]"
              :key="index"
              src="~assets/img/userInfo/star.png"
              alt=""
              style="width:12px;hieght:11px;margin-right:6px"
            />
          </p>
          <div class="head-left">
            <div style="display:flex;align-items:center">
              <img
                src="~assets/img/userInfo/head_ionic.png"
                alt=""
                style="width:12px;hieght:13px"
              />
              <span style="font-size:10px;color:#B79B60;margin:0 5px"
                >每日签到</span
              >
              <img
                src="~assets/img/userInfo/ionic_right.png"
                alt=""
                style="width:4px;height:7px"
              />
            </div>
          </div>
        </div>
        <div class="head-right">
          <div style="display:flex;align-items:center">
            <img
              src="~assets/img/userInfo/head_right.png"
              alt=""
              style="width:20px;height:20px;margin-right:5px"
            />
            <span style="font-size:11px;color:#F1DBAB">会员中心</span>
          </div>
        </div>
      </div>
    </div>
    <!-- //订单部分 -->
    <div style="padding:20px 0 25px 0;background:#fff">
      <nuxt-link :to="{ name: 'trade-myOrder' }">
        <div style="padding-left:15px">
          <div
            style="display:flex;border-bottom:1px solid #D6D6D6;padding-bottom:10px;padding-right:20px"
          >
            <div style="flex:1;color:#333333;font-weight:bold;font-size:15px">
              我的订单
            </div>
            <div style="flex:1;font-size:14px;color:#999;text-align:right">
              <span>查看全部</span>
              <img
                src="~assets/img/userInfo/right.png"
                alt=""
                style="wdith:6px;height:10px;margin-left:9px"
              />
            </div>
          </div>
        </div>
      </nuxt-link>
      <div style="padding-top:27px;display:flex">
        <div
          v-for="(item, index) in groups"
          :key="index"
          style="flex:1;text-align: center;"
          @click="handleJump(index)"
        >
          <div style="position:relative">
            <img
              :src="
                require('../../assets/img/userInfo/group' +
                  (index + 1) +
                  '.png')
              "
              alt=""
              style="width:26px;height:21px;"
            />
            <span class="count">1</span>
          </div>
          <p style="margin-top:10px;color:#333;font-size:12px">{{ item }}</p>
        </div>
      </div>
    </div>
    <!-- //我的资产 -->
    <div style="margin-top:10px;padding:20px 15px 25px;background:#fff">
      <p style="color:#333;font-size:15px;font-weight:bold;">我的资产</p>
      <div style="display:flex;margin-top:15px">
        <div style="flex:1;text-align:center">
          <p class="num">500</p>
          <p class="scoe">积分</p>
        </div>

        <div style="flex:1;text-align:center" @click="handleCoupon">
          <p class="num">500</p>
          <p class="scoe">优惠券</p>
        </div>
        <div style="flex:1;text-align:center" @click="handleVolume">
          <p class="num">500</p>
          <p class="scoe">内购券</p>
        </div>
      </div>
    </div>
    <!-- 我的服务 -->
    <div style="margin-top:10px;padding:21px 15px;background:#fff">
      <p style="color:#333;font-size:15px;font-weight:bold;">我的服务</p>
      <div style="display:flex;margin-top:20px">
        <div
          v-for="(item, index) in ionicList"
          :key="index"
          style="flex:1;text-align:center"
          @click="handleList(index)"
        >
          <img
            style="width:20px;height:19px"
            :src="
              require('../../assets/img/userInfo/ionic0' + (index + 1) + '.png')
            "
            alt=""
          />
          <p class="scoe">{{ item }}</p>
        </div>
      </div>
      <div class="flex" style="margin-top:23px">
        <div class="flex-1" style="text-align:center">
          <img
            src="~assets/img/userInfo/ionic05.png"
            alt=""
            style="width:20px;height:19px"
          />
          <p class="scoe">我的拼团</p>
        </div>
        <div class="flex-1" style="text-align:center">
          <img
            src="~assets/img/userInfo/ionic06.png"
            alt=""
            style="width:20px;height:19px"
          />
          <p class="scoe">我的砍价</p>
        </div>
        <div class="flex-1"></div>
        <div class="flex-1"></div>
      </div>
    </div>
    <!-- //分享有礼 -->
    <div style="margin-top:10px;padding:20px 15px 50px 15px;background:#fff">
      <p class="flex align-center">
        <img
          src="~assets/img/userInfo/gift.png"
          alt=""
          style="width:16px;height:16px"
        />
        <span class="weight5" style="font-weight:bold;margin:0 4px"
          >分享有礼</span
        >
        <img
          src="~assets/img/userInfo/alert.png"
          alt=""
          style="width:16px;height:16px"
        />
      </p>
      <div style="padding:15px 0 15px 5px;">
        <div
          v-for="(item, index) in [1, 2, 3]"
          :key="index"
          class="flex"
          style="padding:15px 0;border-bottom:1px solid #D6D6D6"
        >
          <img
            src="~assets/img/userInfo/group1.png"
            alt=""
            style="width:71px;height:71px;margin-right:10px"
          />
          <div class="flex-1">
            <div class="flex">
              <p class="flex-1 weight5">满减大促销</p>
              <p
                class="flex align-center justify-content share"
                @click="share = true"
              >
                <span>去分享</span>
                <img
                  src="~assets/img/userInfo/share.png"
                  alt=""
                  style="width:9px;height:9px; margin-left: 2px;"
                />
              </p>
            </div>
            <div
              class="line_ellipsis vertical"
              style="-webkit-box-orient: vertical;"
            >
              时髦的百搭单品，百搭有轻松，时髦的百搭单品，百搭有轻松，时髦dada阿达的…时髦的百搭单品，
            </div>
          </div>
        </div>
      </div>
    </div>
    <tabbar :active="3" :curr-index="3"></tabbar>
    <div v-show="share" class="shareLert">
      <img
        src="~assets/img/mall/mall-share.png"
        style="width:100%;height:100%"
        alt=""
      />
    </div>
  </div>
</template>
<script>
import tabbar from '~/components/tabbar.vue'
export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    tabbar
  },
  data() {
    return {
      groups: ['待付款', '待发货', '已发货', '待评价', '退款/售后'],
      ionicList: ['我的收藏', '收货地址', '帮助中心', '联系客服'],
      share: false
    }
  },
  head() {
    return {
      title: '个人中心'
    }
  },
  methods: {
    // 付款跳转
    handleJump(index) {
      if (index < 4) {
        this.$router.push({
          path: '/trade/myOrder',
          query: { index: index + 1 }
        })
      } else {
        this.$router.push({})
      }
    },
    // 跳转到优惠券
    handleCoupon() {
      this.$router.push({ path: '/promote/coupon' })
    },
    // 跳转到活动券
    handleVolume() {
      this.$router.push({ path: '/promote/volume' })
    },
    // 我的服务
    handleList(index) {
      index === 0 && this.$router.push({ path: '/me/collect' })
      index === 1 && this.$router.push({ path: '/template/address' })
      index === 2 && this.$router.push({ path: '/template/aboutMsg' })
    }
  }
}
</script>
<style lang="less" scoped>
.num {
  color: #c5aa6e;
  font-size: 20px;
  font-weight: 500;
}
.scoe {
  color: #333;
  font-size: 12px;
  margin-top: 11px;
}
.shareLert {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 999;
}
.share {
  height: 20px;
  width: 62px;
  border-radius: 10px;
  border: 1px solid #c44044;
  color: #c44044;
  font-size: 10px;
}
.vertical {
  font-size: 13px;
  margin-top: 15px;
  color: #666;
  font-weight: 400;
  height: 36px;
  width: 100%;
}
.main {
  position: absolute;
  background: #f3f4f8;
  width: 100%;
  height: 100%;
}
.count {
  display: inline-block;
  width: 12px;
  height: 12px;
  background: #c44044;
  border-radius: 50%;
  text-align: center;
  line-height: 12px;
  color: #fff;
  font-size: 10px;
  position: absolute;
  top: -5px;
  margin-left: -8px;
}
.head {
  height: 130px;
  background: linear-gradient(
    90deg,
    rgba(215, 191, 141, 1) 0%,
    rgba(195, 166, 106, 1) 100%
  );
  padding: 30px 0 30px 20px;
  display: flex;
  .heardImg {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-right: 18px;
  }
  .head-left {
    width: 90px;
    line-height: 20px;
    height: 20px;
    padding: 0 7px;
    border-radius: 10px;
    background: #fef1d4;
    margin-top: 11px;
  }
  .head-right {
    height: 36px;
    background: #444444;
    padding: 0 8px;
    border-radius: 100px 0px 0px 100px;
    line-height: 36px;
  }
}
</style>
