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
    <div style="background:#fff;margin-top:10px">
      <div class="flex btm">
        <p class="flex-1">优惠券</p>
        <p style="color:#666" @click="code = !code">
          <span>请选择</span>
          <img
            src="~assets/img/mall/mall_right.png"
            alt=""
            style="width:6px;hieght:10px;margin-left:10px"
          />
        </p>
      </div>
      <div
        class="flex"
        style="padding:7px 20px 2px;border-bottom:0.5px solid #D6D6D6"
      >
        <p class="flex-1 flex align-center">
          <span>积分抵扣</span>
          <img
            src="~assets/img/mall/order_ionic.png"
            alt=""
            style="width:17px;hieght:17px;margin-left:4px"
          />
        </p>
        <p @click="hide = !hide">
          <van-switch v-model="checked" active-color="#C44044" />
        </p>
      </div>
      <div class="flex btm">
        <p class="flex-1">工会优惠券</p>
        <p @click="alert = true">
          <span style="color:#666">请选择</span>
          <img
            src="~assets/img/mall/mall_right.png"
            alt=""
            style="width:6px;hieght:10px;margin-left:10px"
          />
        </p>
      </div>
      <div class="flex btm">
        <p>备注</p>
        <p class="flex-1">
          <input class="input" type="text" placeholder="选填，可填写您的要求" />
          <!-- <textarea
            id=""
            style="width:100%;height:20px;border:none"
            name=""
            cols="30"
            rows="10"
            placeholder="选填，可填写您的要求"
          ></textarea> -->
        </p>
      </div>
    </div>
    <!-- 积分兑换弹窗 -->
    <div v-show="code" class="alert">
      <div style="padding:0 45px;margin-top:40%;">
        <div class="rel">
          <div class="abs" @click="code = false">
            <img
              src="~assets/img/mall/alert_close.png"
              style="width:16px;hieght:15px"
              alt=""
            />
          </div>
          <p style="text-align:center;font-size:18px;font-weight:bold">
            请输入兑换码
          </p>
          <p class="ma">
            <input
              type="text"
              placeholder="请输入兑换码"
              style="text-align: center;font-size:14px"
            />
          </p>
          <p class="alert_btn">
            确定
          </p>
        </div>
      </div>
    </div>
    <!-- 3 -->
    <div style="margin:10px 0;background:#fff;">
      <div class="flex btm">
        <p class="flex-1">商品金额</p>
        <p>
          <span style="color:#C44044">¥200.00</span>
        </p>
      </div>
      <div class="flex btm">
        <p class="flex-1">运费</p>
        <p>
          <span style="color:#666">¥10.00</span>
        </p>
      </div>
      <div class="flex btm">
        <p class="flex-1 flex align-center">
          <span>活动优惠</span>
          <img
            src="~assets/img/mall/order_ionic.png"
            alt=""
            style="width:17px;hieght:17px;margin-left:4px"
          />
        </p>
        <p>
          <span style="color:#666">-¥10.00</span>
        </p>
      </div>
      <div class="flex btm">
        <p class="flex-1">优惠券</p>
        <p>
          <span style="color:#666">¥10.00</span>
        </p>
      </div>
      <div class="flex btm">
        <p class="flex-1">积分抵扣</p>
        <p>
          <span style="color:#666">¥10.00</span>
        </p>
      </div>
      <div class="flex btm" style="border-bottom:none">
        <p class="flex-1">工会优惠券</p>
        <p>
          <span style="color:#666">¥10.00</span>
        </p>
      </div>
    </div>
    <!-- 4 -->
    <div style="background:#fff;padding:20px">
      <p style="font-size:15px;font-weight:bold">商品</p>
      <div v-for="(item, index) in [0, 1, 2]" :key="index" class="border flex">
        <img
          src=""
          style="width:89px;height:89px;border:1px solid red;margin-right:10px"
          alt=""
        />
        <div class="flex-1">
          <p
            style="-webkit-box-orient: vertical;font-size:14px;font-weight:bold"
            class="line_ellipsis"
          >
            商品名称商品名称商品名称商品名称商品名称商品名称…
          </p>
          <p style="color:#666666;margin:8px 0">规格：红色、XL</p>
          <p class="flex align-center">
            <span class="flex-1">
              <span style="color:#C44044;font-size:15px;font-weight:bold"
                >¥100.00</span
              >
              <del style="color:#999;font-size:12px;">¥ 200</del>
            </span>
            <span style="color:#999;font-size:13px;">数量：1</span>
          </p>
        </div>
      </div>
    </div>
    <!-- 5 -->
    <div style="padding-bottom:50px;">
      <div style="background:#fff;padding:20px;margin:10px 0;">
        <p style="font-size:15px;font-weight:bold">赠品(颜色随机)</p>
        <div
          v-for="(item, index) in [0, 1, 2]"
          :key="index"
          class="border flex"
        >
          <img
            src=""
            style="width:89px;height:89px;border:1px solid red;margin-right:10px"
            alt=""
          />
          <div class="flex-1">
            <p
              style="-webkit-box-orient: vertical;font-szie:14px;font-weight:bold"
              class="line_ellipsis"
            >
              商品名称商品名称商品名称商品名称商品名称商品名称…
            </p>
            <p style="color:#666666;margin:8px 0">规格：红色、XL</p>
            <p class="flex align-center">
              <span class="flex-1">
                <span style="color:#C44044;font-size:15px;font-weight:bold"
                  >¥100.00</span
                >
                <del style="color:#999;font-size:12px;">¥ 200</del>
              </span>
              <span style="color:#999;font-size:13px;">数量：1</span>
            </p>
          </div>
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
    <!-- 活动优惠弹窗 -->
    <div v-show="alert" class="alert">
      <div style="padding:0 45px;margin-top:40%;">
        <div class="rel" style="padding:20px 20px 30px">
          <p style="text-align:center;font-size:18px;font-weight:bold">
            活动优惠
          </p>
          <p
            v-for="(item, index) in [0, 1, 2]"
            :key="index"
            class="flex"
            style="padding:15px 0;border-bottom:0.5px solid #D6D6D6"
          >
            <span class="flex-1 ellipsis" style="color:#666"
              >活动名称活动名称</span
            >
            <span style="color:#C44044">-15.00</span>
          </p>
          <p class="alert_btn" style="margin-top:40px" @click="alert = false">
            我知道了
          </p>
        </div>
      </div>
    </div>
    <!-- 积分兑换弹窗 -->
    <div v-show="hide" class="alert">
      <div style="padding:0 45px;margin-top:40%;">
        <div class="rel" style="padding:20px 20px 30px">
          <p style="text-align:center;font-size:18px;font-weight:bold">
            积分规则
          </p>
          <div style="margin:15px 0 30px">
            啊实打实多啊实打实多啊实打实多啊实打实多啊实打实多啊实打实多
          </div>
          <p class="alert_btn" @click="hide = false">
            我知道了
          </p>
        </div>
      </div>
    </div>
    <!-- 支付弹窗 -->
    <div v-show="btn" class="alert">
      <div style="padding:0 45px;margin-top:40%;">
        <div class="rel">
          <div class="abs" @click="btn = false">
            <img
              src="~assets/img/mall/alert_close.png"
              style="width:16px;hieght:15px"
              alt=""
            />
          </div>
          <p style="text-align:center;font-size:18px;font-weight:bold">
            请输入支付密码
          </p>
          <div
            class="flex"
            style="margin:40px 0 35px;justify-content: space-around"
          >
            <input
              v-for="(item, index) in [0, 1, 2, 3, 4, 5]"
              :key="index"
              type="text"
              style="width:30px;height:30px;border-radius:4px;border:1px solid #D6D6D6;text-align:center;line-height:30px"
            />
          </div>
          <p class="alert_btn" @click="btn = false">
            确定
          </p>
        </div>
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
      title: '确认订单'
    }
  },
  methods: {}
}
</script>
<style lang="less" scoped>
.order {
  position: absolute;
  font-size: 13px;
  color: #333;
  width: 100%;
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
  .alert {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 99;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
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
