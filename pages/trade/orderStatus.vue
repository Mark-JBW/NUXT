<template>
  <div class="order">
    <!-- #CCCCCC交易关闭 -->
    <div class="status">
      待发货
    </div>
    <!-- 1 -->
    <div
      class="flex align-center"
      style="padding:8px 20px;background:#fff;margin-bottom: 10px;"
    >
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
    <!-- 3 -->
    <div>
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
    <!-- 3.1 -->
    <div
      style="padding:11px 20px;background:#fff;margin-bottom:10px"
      class="flex"
    >
      <span style="font-size:16px;">备注：</span>
      <input
        class="flex-1"
        style="width:100%;padding-left:10px"
        type="text"
        placeholder="请输入内容"
      />
    </div>
    <!--4 -->
    <div style="padding-bottom:50px;background:#f3f4f8">
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
      <!-- 订单 -->

      <div style="padding:10px 20px;background:#fff">
        <p class="flex">
          <span>订单编号：</span>
          <span class="flex-1" style="color:#999">2017052120165236554</span>
        </p>
        <p class="flex" style="margin-top:10px">
          <span>下单时间：</span>
          <span class="flex-1" style="color:#999">2017/05/21 20:16:52</span>
        </p>
        <p class="flex" style="margin-top:10px">
          <span>付款时间：</span>
          <span class="flex-1" style="color:#999">2017/05/21 20:16:52</span>
        </p>
        <p class="flex" style="margin-top:10px">
          <span>发货时间：</span>
          <span class="flex-1" style="color:#999">2017/05/21 20:16:52</span>
        </p>
        <p class="flex" style="margin-top:10px">
          <span>收货时间：</span>
          <span class="flex-1" style="color:#999">2017/05/21 20:16:52</span>
        </p>
      </div>
      <!-- 物流信息 -->
      <div style="margin-top:10px;padding:10px 20px;background:#fff">
        <p class="flex">
          <span>快递公司：</span>
          <span class="flex-1" style="color:#999">xxxxxxxx</span>
        </p>
        <p class="flex" style="margin-top:10px">
          <span>物流编号：</span>
          <span class="flex-1" style="color:#999">xxxxxxxx</span>
        </p>
      </div>
      <!-- 退款 -->
      <div style="margin-top:10px;padding:10px 20px;background:#fff">
        <p class="flex">
          <span>售后类型：</span>
          <span class="flex-1" style="color:#999">xxxxxxxxx</span>
        </p>
        <p class="flex" style="margin-top:10px">
          <span>售后原因：</span>
          <span class="flex-1" style="color:#999">xxxxxxxxx</span>
        </p>
        <p class="flex" style="margin-top:10px">
          <span>退货物流：</span>
          <span class="flex-1" style="color:#999">xxxxxxxxx</span>
        </p>
        <p class="flex" style="margin-top:10px">
          <span>退货单号：</span>
          <span class="flex-1" style="color:#999">xxxxxxxxx</span>
        </p>
        <p class="flex" style="margin-top:10px">
          <span>退货时间：</span>
          <span class="flex-1" style="color:#999">xxxxxxxxx</span>
        </p>
        <p class="flex" style="margin-top:10px">
          <span>审核时间：</span>
          <span class="flex-1" style="color:#999">xxxxxxxxx</span>
        </p>
        <p class="flex" style="margin-top:10px">
          <span>失败原因：</span>
          <span class="flex-1" style="color:#999">xxxxxxxxx</span>
        </p>
      </div>
    </div>
    <!-- 6 -->
    <div class="flex zf">
      <div class="flex-1">
        <span>总计：</span>
        <span style="color:#C44044;font-size:15px">¥180.00</span>
      </div>
      <div class="flex-1 flex">
        <div
          class="flex-1"
          style="border:1px solid #C44044;color:#C44044;text-align:center;"
        >
          取消订单
        </div>
        <div class="pay flex-1">
          支付
        </div>
      </div>
    </div>
    <!-- 7评价 -->
    <div class="apply">
      {{ 1 == 1 ? '确认收货' : '评价' }}
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
  font-size: 13px;
  color: #333;
  width: 100%;
  background: #f3f4f8;
  .status {
    width: 100%;
    height: 75px;
    line-height: 75px;
    font-size: 16px;
    color: #fff;
    text-align: center;
    background: linear-gradient(
      90deg,
      rgba(215, 191, 141, 1) 0%,
      rgba(195, 166, 106, 1) 100%
    );
  }

  .pay {
    text-align: center;
    height: 100%;
    background: #c44044;
    font-size: 14px;
    color: #fff;
  }
  .apply {
    background: #c44044;
    font-size: 16px;
    color: #fff;
    text-align: center;
    line-height: 48px;
    height: 48px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
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
    color: #999;
  }
}
</style>
