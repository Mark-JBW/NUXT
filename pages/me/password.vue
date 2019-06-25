<template>
  <div class="main">
    <div class="content">
      <span style="width:100px;text-align:left">手机号</span>
      <div style="flex:1">
        <input type="text" placeholder="请输入手机号" />
      </div>
    </div>
    <div class="content">
      <span style="width:100px;text-align:left">验证码</span>
      <div style="flex:1;display:flex">
        <input style="flex:1" type="text" placeholder="请输入手机号" />
        <span style="color:#C44044">
          发送验证码
        </span>
      </div>
    </div>
    <div class="content">
      <span style="width:100px;text-align:left">支付密码</span>
      <div style="flex:1">
        <input type="text" placeholder="6位数字" />
      </div>
    </div>
    <div class="content">
      <span style="width:100px;text-align:left">再次输入</span>
      <div style="flex:1">
        <input type="text" placeholder="6位数字" />
      </div>
    </div>
    <div style="padding:100px 20px 0">
      <div class="btn">确定</div>
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
      title: '积分支付密码设置'
    }
  }
}
</script>
<style scoped>
.main {
  width: 100%;
  background: #f4f4f4;
  font-size: 13px;
  color: #333333;
  position: absolute;
}
input {
  border: none;
  outline: none;
  color: #666666;
  width: 100%;
}
.content {
  display: flex;
  padding: 13px 20px;
  border-bottom: 1px solid #d6d6d6;
  background: #fff;
}
.btn {
  width: 100%;
  height: 48px;
  border-radius: 5px;
  font-size: 16px;
  background: #c44044;
  text-align: center;
  line-height: 48px;
  color: #fff;
}
</style>
