<template>
  <div class="main">
    <div class="content" style="padding:2px 20px">
      <div class="name">
        头像
      </div>
      <div style="flex:1;text-align:right">
        <img
          src=""
          style="border:1px solid red;width:40px;height:40px;display:inline-block;border-radius:50%"
          alt=""
        />
      </div>
    </div>
    <div class="content">
      <div class="name">
        会员等级
      </div>
      <div class="right">
        V5
      </div>
    </div>
    <div class="content">
      <div class="name">
        昵称
      </div>
      <div class="right">
        懒羊羊
      </div>
    </div>
    <div class="content">
      <div class="name">
        手机号
      </div>
      <div class="right">
        14000988999
      </div>
    </div>
    <div class="content">
      <div class="name">
        姓名
      </div>
      <div class="right">
        懒羊羊
      </div>
    </div>
    <div class="content">
      <div class="name">
        出生日期
      </div>
      <div class="right">
        2019年2月12日
      </div>
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
      title: '个人资料'
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
.content .name {
  flex: 1;
  text-align: left;
  font-weight: 400;
}
.content .right {
  flex: 1;
  text-align: right;
  color: #666666;
}
.content {
  display: flex;
  align-items: center;
  padding: 13px 20px;
  border-bottom: 1px solid #d6d6d6;
  background: #fff;
}
</style>
