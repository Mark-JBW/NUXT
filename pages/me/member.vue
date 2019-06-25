<template>
  <div>
    <!-- //头部 -->
    <div class="main">
      <div style="display:flex">
        <img
          src="~assets/img/score/heardImg.png"
          alt=""
          style="width:80px;height:80px;border-radius:50%"
        />
        <div class="right">
          <p style="display: flex;opacity:.82">
            <span style="font-size:14px;color:#464642;font-weight:500;"
              >Sun、</span
            >
            <img
              src="~assets/img/score/member_type.png"
              alt=""
              style="width:28px;height:25px"
            />
          </p>
          <p style="font-size:13px;margin-bottom:5px;margin-top:-3px">
            <span style="color:#fff;font-weight:500;">成长值：</span
            ><span style="color:#464642">5000</span>
          </p>
          <div
            style="display:flex;width:180px;height:9px;background:#fff;border-radius:5px;opacity:0.8"
          >
            <p class="progress" :style="{ width: true ? '45px' : '0px' }"></p>
            <p style="flex:1;display:flex">
              <span
                v-for="(item, index) in [0, 1, 2]"
                :key="index"
                style="flex:1;border-right:1px solid #C5A96D"
              ></span>
            </p>

            <!-- <span class="progress"></span>
            <span style="flex: 1;display:flex">
              <span style="flex:1;"></span>
              <span style="flex:1;border-left:1px solid #C5A96D"></span>
              <span style="flex:1;border-left:1px solid #C5A96D"></span>
            </span> -->
          </div>
          <p style="display:flex;width:180px;">
            <span
              v-for="(item, index) in [0, 1, 2, 3, 4]"
              :key="index"
              style="margin-right:28px;font-size:10px;color:#464642"
              >{{ index + 1 }}</span
            >
          </p>
          <p style="font-size:12px;color:#333;opacity:0.8">
            你已经超越了<span style="color:#C44044">50%</span>的会员
          </p>
        </div>
      </div>
    </div>
    <!-- 内容区域 -->
    <div style="padding:15px 20px 30px">
      <p style="font-size:16px;color:#333;font-weight:bold;margin-bottom:11px">
        会员规则
      </p>
      <div style="color:#333;font-size:13px">asdaadas</div>
    </div>
  </div>
</template>
<script>
export default {
  // arr.shift()
  data() {
    return {}
  },
  head() {
    return {
      title: '会员中心'
    }
  }
}
</script>
<style lang="less" scoped>
.main {
  padding: 25px 20px;
  height: 130px;
  background: linear-gradient(
    90deg,
    rgba(215, 191, 141, 1) 0%,
    rgba(195, 166, 106, 1) 100%
  );
  .right {
    margin-top: -5px;
    flex: 1;
    margin-left: 10px;
    .progress {
      width: 45px;
      border-radius: 5px 100px 100px 5px;
      background: linear-gradient(
        90deg,
        rgba(103, 98, 86, 1) 0%,
        rgba(64, 64, 62, 1) 100%
      );
    }
    // .col_progress {
    //   width: 45px;
    //   border-radius: 5px 100px 100px 5px;
    //   border-left: 1px solid #c5a96d;
    //   background: linear-gradient(
    //     90deg,
    //     rgba(103, 98, 86, 1) 0%,
    //     rgba(64, 64, 62, 1) 100%
    //   );
    // }
  }
}
</style>
