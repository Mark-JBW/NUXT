<template>
  <div class="sales">
    <!-- 1 -->
    <div class="flex" style="background:#fff;padding:13px 20px;">
      <div class="flex-1">
        <img
          :src="require('../../assets/img/mall/circle' + 1 + '.png')"
          alt=""
          style="width:12px;height:12px;margin-right:3px"
        />
        <span>全选</span>
      </div>
      <div class="flex-1" style="color:#666;text-align:right">编辑退货数量</div>
    </div>
    <!-- 2 -->
    <div>
      <div style="background:#fff;padding:5px 20px 20px 20px;margin:10px 0;">
        <div
          v-for="(item, index) in list"
          :key="index"
          class=" flex align-center"
          style="padding:15px 0 0;"
        >
          <img
            :style="{
              marginTop: index + 1 == list.length ? '0' : '-15px'
            }"
            :src="require('../../assets/img/mall/circle' + 1 + '.png')"
            alt=""
            class="mal-img"
          />
          <div
            class="flex-1 flex borders"
            :style="{
              paddingBottom: index + 1 == list.length ? '0' : '15px',
              borderBottom: index + 1 == list.length ? '0' : '1px solid #d6d6d6'
            }"
          >
            <img
              src=""
              style="width:89px;height:89px;border:1px solid red;margin-right:10px;display:inline-block;"
              alt=""
            />
            <div class="flex-1 ">
              <p
                style="-webkit-box-orient: vertical;font-size:14px;font-weight:bold"
                class="line_ellipsis"
              >
                商品名称商品名称商品名称商品名称商品名称商品名称…
              </p>
              <p style="color:#666666;margin:8px 0">规格：红色、XL</p>
              <p class="flex align-center">
                <span class="flex-1">
                  <span style="color:#C44044;font-size:15px;font-weight:bold"
                    >¥100.00</span
                  >
                  <del style="color:#999;font-size:12px;">¥ 200</del>
                </span>
                <span style="color:#999;font-size:13px;">数量：1</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 3 -->
    <div style="background:#F3F4F8;padding:0 0 20px 0">
      <!-- 3.1 -->
      <div style="margin:10px 0;background:#fff;">
        <div style="height:44px;padding:0 20px" class="flex align-center">
          <div class="flex-1 flex align-center">
            <span style="font-weight:bold">仅退款</span>
            <img
              src="~assets/img/mall/order_ionic.png"
              alt=""
              style="width:17px;hieght:17px;margin-left:4px"
            />
          </div>
          <div class="flex-1" style="text-align:right" @click="type1 = !type1">
            <img
              :src="
                require('../../assets/img/mall/mall-tp' +
                  (type1 ? 2 : 1) +
                  '.png')
              "
              alt=""
              style="width:10px;hieght:6px;"
            />
          </div>
        </div>
        <div v-show="type1">
          <div class="flex align-center sal-main">
            <img
              :src="require('../../assets/img/mall/circle' + 1 + '.png')"
              alt=""
              class="mal-img"
            />
            <div class="flex-1">未收到货</div>
          </div>
          <div class="flex align-center sal-main">
            <img
              :src="require('../../assets/img/mall/circle' + 1 + '.png')"
              alt=""
              class="mal-img"
            />
            <div class="flex-1">发错/漏发</div>
          </div>
          <div class="flex align-center sal-main">
            <img
              :src="require('../../assets/img/mall/circle' + 1 + '.png')"
              alt=""
              class="mal-img"
            />
            <div class="flex-1">其他</div>
          </div>
          <div style="padding:0 20px 13px 40px">
            <div>
              <textarea
                name=""
                placeholder="输入原因"
                style="width:100%;height:50px;"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <!-- 3.2 -->
      <div style="margin-bottom:20px;background:#fff;">
        <div style="height:44px;padding:0 20px" class="flex align-center">
          <div class="flex-1  align-center">
            <span style="font-weight:bold">退货退款</span>
          </div>
          <div class="flex-1" style="text-align:right" @click="type2 = !type2">
            <img
              :src="
                require('../../assets/img/mall/mall-tp' +
                  (type2 ? 2 : 1) +
                  '.png')
              "
              alt=""
              style="width:10px;hieght:6px;"
            />
          </div>
        </div>
        <div v-show="type2">
          <div class="flex align-center sal-main">
            <img
              :src="require('../../assets/img/mall/circle' + 1 + '.png')"
              alt=""
              class="mal-img"
            />
            <div class="flex-1">质量问题</div>
          </div>
          <div class="flex align-center sal-main">
            <img
              :src="require('../../assets/img/mall/circle' + 1 + '.png')"
              alt=""
              class="mal-img"
            />
            <div class="flex-1">不喜欢</div>
          </div>
          <div class="flex align-center sal-main">
            <img
              :src="require('../../assets/img/mall/circle' + 1 + '.png')"
              alt=""
              class="mal-img"
            />
            <div class="flex-1">七天无理由</div>
          </div>
          <div class="flex align-center sal-main">
            <img
              :src="require('../../assets/img/mall/circle' + 1 + '.png')"
              alt=""
              class="mal-img"
            />
            <div class="flex-1">其他</div>
          </div>
          <div style="padding:0 20px 13px 40px">
            <div>
              <textarea
                name=""
                placeholder="输入原因"
                style="width:100%;height:50px;"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div style="padding:0 20px;">
        <div class="btnget" style="">
          提交申请
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [0, 1, 2],
      type2: false,
      type1: false
    }
  },
  head() {
    return {
      title: '申请退货'
    }
  },
  methods: {}
}
</script>
<style lang="less" scoped>
.sales {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #f3f4f8;
  font-size: 13px;
  color: #333;
  .sal-main {
    height: 44px;
    border-top: 0.5px solid #d6d6d6;
    padding: 0 20px;
  }
  .mal-img {
    width: 12px;
    height: 12px;
    margin-right: 10px;
  }
  .btnget {
    width: 100%;
    height: 48px;
    line-height: 48px;
    background: #c44044;
    border-radius: 5px;
    text-align: center;
    font-size: 16px;
    color: #fff;
  }
  textarea {
    border: none;
    color: #999;
  }
  .borders {
    border-bottom: 0.5px solid #d6d6d6;
  }
}
</style>
