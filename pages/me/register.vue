<template>
  <div class="register_main">
    <div class="bg"></div>
    <div class="content">
      <!-- 手机号 -->
      <div class="flex">
        <img
          src="~assets/img/register/re_phone.png"
          style="width:14px;height:20px;margin-right:15px"
          alt=""
        />
        <div
          class="flex-1 flex"
          style="border-bottom:1px solid #D6D6D6;padding-bottom:15px"
        >
          <span class="weight3">手机号</span>
          <input
            type="text"
            class="flex-1 weight3"
            style="padding-left:50px;color:#999"
            placeholder="请输入手机号码"
          />
        </div>
      </div>
      <!-- //验证码 -->
      <div class="flex" style="margin-top:20px">
        <img
          src="~assets/img/register/re_safe.png"
          style="width:16px;height:19px;margin-right:14px"
          alt=""
        />
        <div
          class="flex-1 flex"
          style="border-bottom:1px solid #D6D6D6;padding-bottom:15px"
        >
          <span class="weight3">手机号</span>
          <div class="flex-1 flex">
            <input
              type="text"
              class="flex-1 weight3"
              style="padding-left:50px;color:#999"
              placeholder="短信验证码"
            />
            <p
              class="flex-1"
              style="color:#C44044;font-size:13px;font-weight:400;text-align:right"
              @click="getMsg"
            >
              {{ getmsg }}
            </p>
          </div>
        </div>
      </div>
      <!-- 姓名 -->
      <div class="flex" style="margin-top:20px">
        <img
          src="~assets/img/register/re_name.png"
          style="width:16px;height:17px;margin-right:14px"
          alt=""
        />
        <div
          class="flex-1 flex"
          style="border-bottom:1px solid #D6D6D6;padding-bottom:15px"
        >
          <span class="weight3">姓名</span>
          <input
            type="text"
            class="flex-1 weight3"
            style="padding-left:63px;color:#999"
            placeholder="请输入您的姓名"
          />
        </div>
      </div>
      <!-- 出生日期 -->
      <div class="flex" style="margin-top:20px">
        <img
          src="~assets/img/register/re_date.png"
          style="width:16px;height:17px;margin-right:14px"
          alt=""
        />
        <div
          class="flex-1 flex"
          style="border-bottom:1px solid #D6D6D6;padding-bottom:15px"
        >
          <span class="weight3">出生日期</span>
          <input
            type="text"
            class="flex-1 weight3"
            style="padding-left:37px;color:#999"
            placeholder="请输入您的生日日期"
          />
        </div>
      </div>
    </div>
    <!-- 按钮 -->
    <div style="padding:0 17px;margin-top: 77px;">
      <div class="btn">提交</div>
    </div>
  </div>
</template>
<script>
// import { newGetCode } from '@/api/index'
// import { Toast } from 'vant'
export default {
  data() {
    return {
      getmsg: '获取验证码',
      changeMsg: true
    }
  },
  head() {
    return {
      title: '注册'
    }
  },
  mounted() {},
  methods: {
    // 获取短信验证码
    getMsg() {
      // if (!this.changeMsg) {
      //   return
      // }
      // if (this.tel === '') {
      //   Toast('请填写手机号')
      //   return
      // }
      // newGetCode({
      //   tel: this.tel,
      //   type: 'PARENT'
      // }).then(res => {
      //   if (!res.data.code) {
      //     Toast.success('获取成功')
      //     let time = 60
      //     const timer = setInterval(() => {
      //       this.getmsg = time + '秒后重发'
      //       this.changeMsg = false
      //       time--
      //       if (time < 0) {
      //         clearInterval(timer)
      //         this.getmsg = '获取验证码'
      //         this.changeMsg = true
      //       }
      //     }, 1000)
      //   } else {
      //     Toast(res.data.description)
      //   }
      // })
    }
  }
}
</script>
<style lang="less" scoped>
.register_main {
  .bg {
    width: 100%;
    height: 405px;
    background: url('~assets/img/register/re_bg.png');
    background-size: 100% 100%;
    position: fixed;
    top: 0;
  }
  .content {
    padding: 220px 16px 0 21px;
    position: relative;
    input {
      border: none;
      outline: none;
      background: none;
      width: 100%;
    }
  }
  .btn {
    background: #c44044;
    width: 100%;
    border-radius: 5px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    color: #fff;
    font-size: 16px;
  }
}
</style>
