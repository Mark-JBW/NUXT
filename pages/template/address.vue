<template>
  <div class="address">
    <div style="padding:10px 0 45px;background:#F3F4F8;">
      <div v-for="(item, index) in [0, 1]" :key="index">
        <div class="top">
          <div class="flex">
            <span class="flex-1">收货人：孙小美</span>
            <span>13899999999</span>
          </div>
          <p style="margin-top:10px">
            上海上海市宝山区长江南路 1888 号 A336~A338室
          </p>
        </div>
        <div class="flex btm">
          <div class="flex-1">
            <!-- <span>默认地址</span> -->
            <p class="flex align-center ">
              <img
                :src="require('../../assets/img/trade/redact' + 1 + '.png')"
                alt=""
                style="width:16px;height:16px;margin-right:10px"
              />
              <span>设置为默认地址</span>
            </p>
          </div>
          <span>
            <span style="color:#C5AA6E;margin-right:20px">编辑</span>
            <span>删除</span>
          </span>
        </div>
      </div>
    </div>
    <div class="add">新增收货地址</div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  head() {
    return {
      title: '我的收货地址'
      // 修改收货地址动态改版
    }
  }
}
</script>
<style lang="less" scoped>
.address {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #f3f4f8;
  color: #333;
  font-size: 14px;
  .top {
    padding: 10px 20px;
    border-bottom: 0.5px solid #d8d8d8;
    background: #fff;
  }
  .btm {
    padding: 6px 20px;
    font-size: 12px;
    color: #c44044;
    background: #fff;
    margin-bottom: 10px;
  }
  .add {
    background: #c44044;
    font-size: 14px;
    color: #fff;
    text-align: center;
    line-height: 40px;
    height: 40px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
}
</style>
