<template>
  <div class="newaddress">
    <div style="padding:10px 0">
      <p style="padding:10px 20px;background:#fff">
        <input type="text" placeholder="收货人姓名" />
      </p>
      <p style="padding:10px 20px;background:#fff;margin:10px 0">
        <input type="number" placeholder="手机号码" />
      </p>
      <div>
        <p
          class="flex align-center"
          style="padding:10px 20px;background:#fff;border-bottom:0.5px solid #D8D8D8"
        >
          <input type="text" class="flex-1" placeholder="所在地区" />
          <img
            src="~assets/img/mall/mall_right.png"
            style="width:6px;height:10px"
            alt=""
          />
        </p>
        <p style="padding:10px 20px;background:#fff">
          <input type="text" placeholder="详细地址" />
        </p>
      </div>
      <p
        class="flex align-center "
        style="padding:10px 20px;background:#fff;margin-top:10px"
      >
        <img
          :src="require('../../assets/img/trade/redact' + 1 + '.png')"
          alt=""
          style="width:16px;height:16px;margin-right:10px"
        />
        <span style="color:#C44044">设置为默认地址</span>
      </p>
    </div>
    <div style="padding:154px 20px 0;color:#fff">
      <p class="btn1">保存</p>
      <p class="btn2">删除</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  head() {
    return {
      title: '新增收货地址'
      // 修改收货地址动态改版
    }
  }
}
</script>
<style lang="less" scoped>
.newaddress {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #f3f4f8;
  color: #333;
  font-size: 14px;
  input {
    border: none;
    outline: none;
    width: 100%;
  }
  .btn1 {
    background: #c44044;
    text-align: center;
    line-height: 40px;
    height: 40px;
    border-radius: 5px;
  }
  .btn2 {
    background: #ccc;
    text-align: center;
    line-height: 40px;
    height: 40px;
    border-radius: 5px;
    margin-top: 10px;
  }
  input::-webkit-input-placeholder {
    /* placeholder颜色  */
    color: #999999;
  }
}
</style>
