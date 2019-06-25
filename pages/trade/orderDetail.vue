<template>
  <div class="order">
    <!-- 1 -->
    <div class="flex align-center" style="padding:8px 20px;background:#fff">
      <img
        src="~assets/img/mall/order_adress.png"
        style="width:14px;height:21px"
        alt=""
      />
      <div class="flex-1" style="padding:0 40px 0 15px;">
        <p class="flex">
          <span class="flex-1">收货人：孙小美</span>
          <span>13899999999</span>
        </p>
        <p style="margin-top:10px">
          上海上海市宝山区长江南路 1888 号 A336~A 338室
        </p>
      </div>
      <img
        src="~assets/img/mall/mall_right.png"
        alt=""
        style="width:6px;height:10px"
      />
    </div>
    <!-- 2 -->
    <div style="padding:10px 0 50px 0;background:#F3F4F8">
      <div style="padding:5px 20px;background:#fff">
        <img
          src="~assets/img/trade/orderDetail.png"
          alt=""
          style="width:20px;height:20px;margin-right:8px;vertical-align: bottom;"
        />
        <span>购物清单</span>
      </div>
      <div
        v-for="(item, index) in [0, 1, 2]"
        :key="index"
        style="margin-bottom:10px"
      >
        <div style="padding:5px 10px 0;background:#fff">
          <div
            class="flex align-center"
            style="padding:6px 10px;background:#F9F9F9;"
          >
            <div class="flex-1">
              <div class=" flex">
                <img
                  src=""
                  style="width:89px;height:89px;border:1px solid red;margin-right:10px"
                  alt=""
                />
                <div class="flex-1" style="position:relative">
                  <div>
                    <div class="flex">
                      <p
                        class="flex-1 line_ellipsis"
                        style=" -webkit-box-orient: vertical;color:#333"
                      >
                        欧莱雅植物护发素 深层护理
                      </p>
                      <div class="flex" style="align-items: flex-end">
                        <span v-if="true" style="color:#666;">X 1</span>
                      </div>
                    </div>
                  </div>
                  <p
                    class="flex align-center"
                    style="position:absolute;bottom:0;width:100%"
                  >
                    <span class="flex-1">
                      <span style="color:#666;">红色 ML</span>
                    </span>
                    <span style="color:#C44044;">￥400.00</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="background:#fff">
          <p style="padding:10px 20px;border-bottom:1px solid #D8D8D8">
            包邮
          </p>
          <p
            class="flex"
            style="padding:10px 20px;border-bottom:1px solid #D8D8D8"
          >
            <span class="flex-1">9折活动</span>
            <span>-￥40.00</span>
          </p>
          <p
            class="flex"
            style="padding:10px 20px;border-bottom:1px solid #D8D8D8"
          >
            <span class="flex-1">满100减10</span>
            <span>-￥10.00</span>
          </p>
        </div>
      </div>
    </div>
    <!-- 6 -->
    <div class="flex zf">
      <div class="flex-1">
        <span>总计：</span>
        <span style="color:#C44044;font-size:15px">¥180.00</span>
      </div>
      <div class="pay" @click="btn = true">
        支付
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hide: false,
      checked: false,
      btn: false,
      code: false,
      alert: false
    }
  },
  head() {
    return {
      title: '订单详情'
    }
  },
  methods: {}
}
</script>
<style lang="less" scoped>
.order {
  position: absolute;
  font-size: 14px;
  color: #333;
  width: 100%;
  height: 100%;
  background: #f3f4f8;
  .rel {
    padding: 20px 25px;
    background: #fff;
    border-radius: 6px;
    margin: auto;
    position: relative;
  }
  .abs {
    width: 50px;
    height: 50px;
    position: absolute;
    right: 0px;
    top: 0px;
    text-align: center;
    line-height: 50px;
  }
  .alert_btn {
    width: 100%;
    height: 40px;
    background: #c44044;
    font-size: 14px;
    color: #fff;
    border-radius: 20px;
    text-align: center;
    line-height: 40px;
  }
  .ma {
    width: 100%;
    height: 50px;
    border: 1px solid #d6d6d6;
    border-radius: 6px;
    margin: 40px 0;
    padding: 1px;
    display: flex;
  }
  .pay {
    padding: 0 46px;
    height: 100%;
    background: #c44044;
    font-size: 14px;
    color: #fff;
  }
  .zf {
    position: fixed;
    width: 100%;
    bottom: 0;
    background: #fff;
    height: 48px;
    padding-left: 20px;
    line-height: 48px;
  }
  .border {
    padding: 15px 0;
    border-bottom: 0.5px solid #d6d6d6;
  }
  .border:last-child {
    border-bottom: none;
  }
  .btm {
    padding: 13px 20px;
    border-bottom: 0.5px solid #d6d6d6;
  }
  input {
    border: none;
    outline: none;
    width: 100%;
  }
  .input {
    padding-left: 78px;
    color: #999;
  }
}
</style>
