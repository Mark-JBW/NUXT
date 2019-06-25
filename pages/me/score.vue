<template>
  <div>
    <!-- 名片部分 -->
    <div class="heard">
      <div style="padding:25px 15px 0 ;display:flex; align-items: center;">
        <img
          style="width:60px;height:60px;border-radius:50%;margin-right:10px;"
          src="~assets/img/score/heardImg.png"
          alt=""
        />
        <div style="flex:1;display:flex">
          <div style="flex:1">
            <p style="color:#fff;font-size:14px">剩余积分：5000</p>
            <p style="color:#fff;font-size:12px;opacity:.6;margin-top:13px">
              2019年12月31日到期积分：500
            </p>
          </div>
          <div>
            <p class="ionic1">
              <img
                src="~assets/img/score/score_ionic1.png"
                alt=""
                style="width:15px;height:12px;vertical-align: middle;"
              />
              <span style="font-size:10px;color:#fff">积分规则</span>
            </p>
            <p class="ionic2 flex align-center">
              <img
                src="~assets/img/score/score_ionic2.png"
                style="width:12px;height:14px;vertical-align: middle;"
                alt=""
              />
              <span style="font-size:10px;color:#393835;margin-left: 8px;"
                >密码设置</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- 中间签到 -->
    <div style="padding:0 20px;font-size:14px;margin-top: -41px;">
      <div class="score_card">
        <p style="color:#333;margin-bottom:20px;opacity:.77;font-weight:bold">
          连续签到赢积分
        </p>
        <div style="display:flex; justify-content: space-between;">
          <!-- <div style="justify-content: space-around;text-align: left;"> -->
          <div
            v-for="(item, index) in [1, 2, 3, 4, 5, 6, 7]"
            :key="index"
            :style="'width:' + (width - 20) / 7 + 'px'"
            style="text-aign:left"
          >
            <div class="flex align-center">
              <!-- <p
                v-show="index < 0"
                :style="'width:' + ((width - 36) / 7 - 26) / 2 + 'px'"
                style="height:2px;background:#D5B470;display:inline-block"
              ></p> -->
              <div class="flex-1 flex align-center">
                <img
                  src="~assets/img/score/chose_true.png"
                  alt=""
                  style="width:26px;height:26px;border-radius:50%"
                />
                <p
                  v-if="index < 6"
                  class="flex-1"
                  style="height:2px;background:#D5B470;display:inline-block"
                ></p>
              </div>
            </div>
            <p style="color:#333;font-size:10px;opacity:.7;padding-left:3px">
              1天
            </p>
            <!-- </div> -->
          </div>
        </div>
        <div class="signBtn">签到</div>
      </div>
    </div>
    <!-- //积分收入和支出切换 -->
    <div style="padding-left:20px;margin-top:20px">
      <div style="display:flex;margin-bottom:5px">
        <div
          v-for="(item, index) in ['积分收入', '积分支出']"
          :key="index"
          class="tab_score"
          :style="{
            color: index == type ? '#333' : '#666',
            fontWeight: index == type ? 'bold' : 'normal'
          }"
          @click="type = index"
        >
          <span>{{ item }}</span>
          <p v-if="index == type" class="tab_border"></p>
        </div>
      </div>
      <div v-for="(item, index) in [0, 1, 2]" :key="index" class="tab_content">
        <p style="color:#333;font-size:14px;font-weight:bold">变动原因</p>
        <span style="position:absolute;color:#C44044;font-size:16px;right:20px"
          >+100</span
        >
        <p style="font-size:13px;color:#666;margin-top:10px">
          2019-06-06 12:00:00
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      width: '',
      type: 0
    }
  },
  head() {
    return {
      title: '积分中心'
    }
  },
  mounted() {
    this.width = this.getViewportSize.size().width
  },
  methods: {}
}
</script>
<style scoped>
.tab_score {
  flex: 1;
  text-align: center;
  font-size: 16px;
}
.tab_border {
  width: 15px;
  height: 5px;
  border-radius: 3px;
  background: #c44044;
  margin: auto;
  margin-top: 2px;
}
.tab_content {
  position: relative;
  border-bottom: 1px solid #d6d6d6;
  padding: 15px 20px 14px 0;
}
.score_card {
  padding: 16px 0 16px 16px;
  border-radius: 10px;
  background: linear-gradient(
    90deg,
    rgba(236, 213, 167, 1) 0%,
    rgba(220, 196, 144, 1) 100%
  );
}
.heard {
  width: 100%;
  height: 151px;
  background: url('~assets/img/score/heard_bg.png');
  background-size: 100% 100%;
}
.ionic1 {
  height: 20px;
  padding: 0 8px;
  line-height: 20px;
  background: linear-gradient(
    90deg,
    rgba(215, 191, 141, 1) 0%,
    rgba(195, 166, 106, 1) 100%
  );
  border-radius: 10px;
}
.ionic2 {
  height: 20px;
  padding: 0 8px;
  line-height: 20px;
  background: rgba(255, 255, 255, 1);
  opacity: 0.7931999999999999;
  border-radius: 10px;
  margin-top: 13px;
}
.signBtn {
  width: 120px;
  height: 36px;
  background: #fff;
  border-radius: 20px;
  margin: auto;
  color: #b48f41;
  font-size: 14px;
  margin-top: 19px;
  text-align: center;
  line-height: 36px;
}
</style>
