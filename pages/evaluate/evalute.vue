<template>
  <div class="eval">
    <div style="padding:10px 0 50px 0;background: #f3f4f8">
      <div
        v-for="(item, index) in [0, 1, 2]"
        :key="index"
        style="margin-bottom:10px;background:#fff;padding:10px 0"
      >
        <img
          src=""
          style="width:100px;height:75px;border:1px solid red;margin:0 0 50px 20px;display:inline-block"
          alt=""
        />
        <div class="flex border">
          <span class="show">描述相符：</span>
          <div class="flex-1 flex" style="text-align:right;margin-left:85px">
            <div
              v-for="(val, i) in [0, 1, 2, 3, 4]"
              :key="i"
              style="text-align:center"
              class="flex-1"
            >
              <img
                :src="
                  require('../../assets/img/evalute/evl-star' +
                    (index == 0 ? 2 : 1) +
                    '.png')
                "
                style="width:20px;height:19px;"
                alt=""
              />
            </div>
          </div>
        </div>
        <!-- 上传图片 -->
        <div class="flex" style="padding:9px 20px 0">
          <span class="show">上传图片：</span>
          <div class="flex-1" style="margin-left">
            <img
              src="~assets/img/evalute/evl-upload.png"
              alt=""
              style="width:50px;height:50px"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="fixed">
      <div class="flex">
        <div class="flex-1 flex align-center">
          <p
            style="width:16px;height:16px;border:1px solid #D0D0D0;border-radius:4px;margin:0 10px 0 20px;dispaly:inline-block"
          ></p>
          <span style="color:#C44044;font-size:14px;">匿名评价</span>
        </div>
        <div class="flex-1 btn">
          发表评价
        </div>
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
      title: '评价'
    }
  }
}
</script>
<style lang="less" scoped>
.eval {
  position: absolute;
  width: 100%;
  background: #f3f4f8;
  .border {
    height: 39px;
    border-top: 1px solid #d8d8d8;
    border-bottom: 1px solid #d8d8d8;
    padding: 0 20px;
    line-height: 39px;
  }
  .fixed {
    position: fixed;
    height: 40px;
    bottom: 0;
    line-height: 40px;
    width: 100%;
    left: 0;
    background: #fff;
  }
  .show {
    font-size: 14px;
    font-weight: 400;
    color: #333333;
  }
  .btn {
    background: #c44044;
    text-align: center;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
  }
}
</style>
