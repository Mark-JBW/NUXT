<template>
  <div class="aboutMsg">
    <div style="padding:10px 0;background:#F3F4F8">
      <div style="padding:10px 0;background:#fff;text-align:center">
        <img src="~assets/img/logo.png" style="width:50px;height:50px" alt="" />
        <p>公司名字</p>
      </div>
    </div>
    <div style="margin:21px 0 10px;padding:10px 20px;background:#fff">
      <span>客服电话</span>
      <span style="color:#C44044;margin-left:20px">021-0001002</span>
    </div>
    <div style="padding:10px 20px;background:#fff">
      <div class="flex">
        <span>公司地址</span>
        <div class="flex-1" style="margin-left:20px">
          上海市宝山区逸仙路2816号华滋奔腾大厦 A幢14L
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: '关于我们'
    }
  },

  head() {
    return {
      title: '关于我们'
      // meta: [
      //   { charset: 'utf-8' },
      //   { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      //   { hid: 'description', name: 'description' }
      // ]
    }
  }
}
</script>
<style lang="less" scoped>
.aboutMsg {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #f3f4f8;
  font-size: 14px;
  color: #333333;
}
</style>
