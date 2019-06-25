<template>
  <div class="myOrder">
    <!-- tab -->

    <div style="padding:10px 0;background:#F3F4F8">
      <div
        v-for="(item, index) in [0, 1, 2]"
        :key="index"
        style="margin-bottom:10px"
      >
        <div class="flex" style="padding:5px 20px;background:#fff">
          <div class="flex-1" style="color:#666">6-21 15:50:21</div>
          <div
            class="flex-1"
            style="text-align:right"
            :style="{ color: index == 0 ? '#C44044' : '#666' }"
          >
            {{ index == 1 ? '退货中' : '退货成功' }}
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
          <div style="background:#fff">
            <p style="padding:10px 20px;text-align:right ">
              <span>共2件 总计：¥ 900.00（运费 ¥ 12.00）</span>
            </p>
            <p v-if="index == 0" class="end" @click="hide = true">
              <span class="zhifu">{{
                index == 0 || index == 1 ? '填写退货物流' : ''
              }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- 填写退货物流弹窗 -->
    <div v-show="hide" class="wualert">
      <div style="padding:40% 48px 0;">
        <div style="background:#fff;border-radius:4px;padding-top:15px;">
          <div style="padding:0 45px 20px;border-bottom:1px solid #E5E5E5">
            <p
              style="color:#000;font-size:17px;font-weight:bold;text-align:center"
            >
              填写退货物流
            </p>
            <p class="iptbor" style="margin:10px 0">
              <input type="text" placeholder="请输入快递公司" />
            </p>
            <p class="iptbor">
              <input type="text" placeholder="请输入快递单号" />
            </p>
          </div>
          <p class="btnd" @click="handleBtn">确定</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 1,
      hide: false
    }
  },
  head() {
    return {
      title: '退货'
    }
  },
  mounted() {},
  methods: {
    // 快递单号
    handleBtn() {}
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
  .end {
    padding: 6px 20px;
    text-align: right;
    border-top: 1px solid #d8d8d8;
  }
  .wualert {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 99;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    .btnd {
      color: #c44044;
      font-size: 17px;
      text-align: center;
      padding: 7px 0;
      font-weight: bold;
    }
    .iptbor {
      width: 100%;
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 10px;
    }
  }
  input {
    border: none;
    outline: none;
    color: #999999;
    font-size: 14px;
    width: 100%;
    height: 20px;
  }
  .zhifu {
    display: inline-block;
    width: 100px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    background: #c44044;
    color: #fff;
    border-radius: 5px;
  }
}
</style>
