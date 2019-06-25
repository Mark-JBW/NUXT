<template>
  <div class="myOrder">
    <!-- tab -->
    <div class="tab flex">
      <div
        v-for="(item, index) in tabs"
        :key="index"
        class="flex-1"
        style="text-align:center"
        @click="active = index"
      >
        <span
          style="padding-bottom: 13px;"
          :style="{ borderBottom: active == index ? '2px solid red' : '' }"
        >
          <span :style="{ color: active == index ? '#C44044' : '#333' }">{{
            item
          }}</span>
          <span v-if="index > 0" style="color:#C44044">(1)</span>
        </span>
      </div>
    </div>
    <div style="padding:60px 0;background:#F3F4F8">
      <div
        v-for="(item, index) in [0, 1, 2]"
        :key="index"
        style="margin-bottom:10px"
      >
        <div class="flex" style="padding:5px 20px;background:#fff">
          <div class="flex-1" style="color:#666">6-21 15:50:21</div>
          <div class="flex-1" style="color:#C44044;text-align:right">
            待支付
          </div>
        </div>
        <div>
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
          <div v-if="active != 2" style="background:#fff">
            <p
              style="padding:10px 20px;border-bottom:1px solid #D8D8D8;text-align:right "
            >
              <span>共2件 总计：¥ 900.00（运费 ¥ 12.00）</span>
            </p>
            <p style="padding:6px 20px;text-align:right ">
              <span v-if="active == 0" class="cancle">取消订单</span>
              <span class="zhifu">{{
                active == 0 || active == 1
                  ? '立即支付'
                  : active == 3
                  ? '确认收货'
                  : active == 4
                  ? '评价'
                  : ''
              }}</span>
            </p>
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
      active: this.$route.query.index ? this.$route.query.index : 0,
      tabs: ['全部', '待支付', '待发货', '待收货', '待评价']
    }
  },
  head() {
    return {
      title: '我的订单'
    }
  },
  mounted() {},
  methods: {
    // tab切换
  }
}
</script>
<style lang="less" scoped>
.myOrder {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #f3f4f8;
  font-size: 14px;
  color: #333;
  .tab {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
    height: 50px;
    border-top: 1px solid #e6e6e8;
    border-bottom: 1px solid #e6e6e8;
    background: #fff;
    line-height: 50px;
    z-index: 99;
  }
  .cancle {
    display: inline-block;
    width: 80px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    border: 1px solid #c44044;
    color: #c44044;
    border-radius: 5px;
    margin-right: 10px;
  }
  .zhifu {
    display: inline-block;
    width: 80px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    background: #c44044;
    color: #fff;
    border-radius: 5px;
  }
}
</style>
