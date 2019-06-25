<template>
  <div class="shopDetail">
    <!-- //头部 -->
    <div>
      <van-swipe :autoplay="3000" @change="onChange">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img class="img" :src="image" />
        </van-swipe-item>
        <div slot="indicator" class="custom-indicator">{{ current + 1 }}/4</div>
      </van-swipe>
      <div class="head-content">
        <div class="flex">
          <div class="flex-1" style="color:#C44044">
            <span style="font-size:20px;font-weight:bold;">¥</span>
            <span class="price">150</span>
            <del style="color:#999;font-size:14px">¥200</del>
            <span class="zhe">7.5折</span>
          </div>
          <div style="color:#333;font-size:12px;">
            销量：<span style="color:#C44044">6000</span>
          </div>
        </div>
        <p
          class="line_ellipsis"
          style="color:#333;font-size:16px;font-weight:bold;-webkit-box-orient: vertical;margin:18px 0 10px;"
        >
          商品名称商品名称商品名称商品名称商品名称商品名称商品商品名称
        </p>
        <p style="color:#666;font-size:12px">水洗全棉 慵懒自然</p>
      </div>
    </div>
    <!-- 2 -->
    <div
      style="margin:10px 0;padding:15px 20px;background:#fff;font-size:13px;color:#666"
      @click="
        hide = true
        discounts = true
      "
    >
      <div class="flex">
        <div class="flex-1" style="color:#333;font-weight:bold">优惠</div>
        <div
          class="flex-1 flex align-center "
          style="color:#999;justify-content: flex-end;"
        >
          查看更多
          <img
            src="~assets/img/mall/mall_right.png"
            style="width:6px;height:10px;margin-left:5px"
            alt=""
          />
        </div>
      </div>
      <div
        v-for="(value, i) in [0, 1]"
        :key="i"
        class="flex"
        style="margin-top:15px"
      >
        <div class="manjian">
          满减
        </div>
        <span>活动名称活动名称活动名称</span>
      </div>
    </div>
    <!-- 3 -->
    <div class="three" @click="showStepper = true">
      <div class="flex">
        <div class="flex-1" style="font-weight:bold">请选择规格数量</div>
        <div
          class="flex-1 flex align-center "
          style="color:#999;justify-content: flex-end;"
        >
          <img
            src="~assets/img/mall/mall_right.png"
            style="wdith:6px;height:10px;"
            alt=""
          />
        </div>
      </div>
    </div>
    <!-- 4 -->
    <div style="padding-bottom:50px;margin-bottom:10px;background:#F3F4F8">
      <div class="flex align-center tab">
        <div
          v-for="(item, index) in ['图文详情', '评价', '常见问题']"
          :key="index"
          class="flex-1"
          style="text-align:center"
          @click="handleTab(index)"
        >
          <p
            :style="{
              color: type == index ? '#C44044' : '#666',
              borderRight: index == 2 ? 'none' : '1px solid #ccc'
            }"
          >
            {{ item }}
          </p>
          <p v-if="type == index" class="border"></p>
        </div>
      </div>
      <div>
        <img src="~assets/img/mall/mall_img.png" alt="" />
      </div>
      <div
        class="shareImg"
        @click="
          hide = true
          double = true
        "
      >
        <img
          style="width:60px;height:60px"
          src="~assets/img/mall/mall_share.png"
          alt=""
        />
      </div>
    </div>
    <!-- 5 -->
    <div class="flex bottom">
      <div class="flex-1 flex">
        <div
          v-for="(item, index) in ['客服', '收藏', '购物车']"
          :key="index"
          class="flex-1 kefu"
        >
          <p>
            <img
              :src="
                require('../../assets/img/mall/mall_serve' +
                  (index + 1) +
                  '.png')
              "
              alt=""
              :style="{
                wdith: index == 0 ? '16px' : '18px',
                height: index == 0 ? '15px' : '17px'
              }"
            />
          </p>
          <p>{{ item }}</p>
        </div>
      </div>
      <div
        style="text-align:center;font-weight:bold;line-height:48px"
        class="flex-1 "
        @click="showStepper = true"
      >
        加入购物车
      </div>
      <div class="flex-1 buy" @click="showStepper = true">
        立即购买
      </div>
    </div>
    <!-- 右上角分享 -->
    <!-- <div class="shopalert">
        <img
          src="~assets/img/mall/mall-share.png"
          style="width:100%;height:100%"
          alt=""
        />
    </div> -->
    <!-- 链接分享 -->
    <div
      v-if="href"
      class="href"
      style="width:100%;position:fixed;top:0"
      @click="href = false"
    >
      <img
        src="~assets/img/mall/mall-share.png"
        style="width:100%;height:100%"
        alt=""
      />
    </div>
    <div
      v-if="hide"
      class="shopalert"
      @click="
        hide = false
        shareImg = false
        double = false
        discounts = false
      "
    >
      <!-- 海报和链接 -->
      <div v-if="double" class="alertmain">
        <div class="flex" style="padding-bottom:20px;">
          <div
            class="flex-1"
            @click.stop="
              hide = false
              double = false
              href = true
            "
          >
            <img src="~assets/img/mall/share-href.png" class="shopimg" alt="" />
            <p style="color:#666">分享链接</p>
          </div>
          <div
            class="flex-1"
            @click.stop="
              hide = true
              shareImg = true
              double = false
            "
          >
            <img src="~assets/img/mall/share-bug.png" class="shopimg" alt="" />
            <p style="color:#666">生成海报分享</p>
          </div>
        </div>
        <p class="bor"></p>
        <p style="color:#464642;">取消</p>
      </div>
      <!-- 海报 -->
      <div v-if="shareImg">
        <div class="bug">
          <div class="bugmain">
            <div class="flex align-center">
              <div class="flex-1">
                <img
                  src="~assets/img/mall/long.png"
                  alt=""
                  style=":width:64px;height:15px;margin-left:10px"
                />
              </div>
              <div>
                <p class="pai">
                  名品生活·温暖相待
                </p>
              </div>
            </div>
            <div style="margin:10px 0 14px 0">
              <img
                src=""
                style="width:100%;height:220px;border:1px solid red;display: inline-block;"
                alt=""
              />
            </div>
            <div class="flex" style="padding:0 15px 10px 0;">
              <div class="flex-1" style="padding-right:7px;position:relative">
                <p style="font-weight:bold">
                  <span style="font-size:16px;color:#C44044">¥</span>
                  <span style="font-size:24px;color:#C44044;margin-left:-5px"
                    >150</span
                  >
                  <del style="font-size:12px;color:#fff">¥ 200</del>
                </p>
                <p class="line_ellipsis bugname">
                  商品名称商品名称商品名称商品..
                </p>
              </div>
              <img
                src="~assets/img/mall/sao.png"
                style="width:80px;height:80px;"
                alt=""
              />
            </div>
            <div class="flex">
              <div class="flex-1" style="color:#fff;font-size:12px">
                水洗全棉 慵懒自然
              </div>
              <div
                class="flex-1"
                style="color:#333;font-size:10px;text-align:right"
              >
                长按二维码领取新人福利
              </div>
            </div>
          </div>
        </div>
        <p class="long">
          长按图片保存至相册
        </p>
      </div>
      <!-- //优惠 -->
      <div v-if="discounts">
        <div
          style="position:fixed;bottom:0;width:100%;z-index:999;background:#fff"
        >
          <div>
            <p class="you">
              优惠
            </p>
            <div class="abs" @click="hide = false">
              <img
                src="~assets/img/mall/alert_close.png"
                style="width:16px;hieght:15px"
                alt=""
              />
            </div>
          </div>
          <div style="padding:0 20px;">
            <p style="color:#C44044;font-size:14px;font-weight:bold">
              可参与以下优惠活动
            </p>
            <div
              v-for="(item, index) in [0, 1, 2]"
              :key="index"
              class="alertborder flex align-center"
            >
              <p class="man-close">
                满减
              </p>
              <div class="flex-1 flex" style="margin-left:10px">
                <span class="flex-1 ellipsis">活动名称活动名称活动名称</span>
                <img
                  src="~assets/img/mall/mall_right.png"
                  style="width:6px;height:10px"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 基础用法 -->
    <!-- <div class="sku-container">
      <van-sku
        v-model="showStepper"
        stepper-title="数量"
        hide-quota-text
        :sku="skuData.sku"
        :goods="skuData.goods_info"
        :goods-id="skuData.goods_id"
        :hide-stock="skuData.sku.hide_stock"
        :quota="skuData.quota"
        :quota-used="skuData.quota_used"
        @buy-clicked="onBuyClicked"
        @add-cart="onAddCartClicked"
      >
      </van-sku>
    </div> -->

    <div>
      <div class="sku-container">
        <van-sku
          v-model="showStepper"
          stepper-title="数量"
          :sku="skuData.sku"
          :goods="skuData.goods_info"
          :goods-id="skuData.goods_id"
          :hide-stock="skuData.sku.hide_stock"
          :quota="skuData.quota"
          :quota-used="skuData.quota_used"
          show-add-cart-btn
          reset-stepper-on-hide
          @sku-selected="jump"
          @buy-clicked="onBuyClicked"
          @add-cart="onAddCartClicked"
        >
          <template slot="sku-header-price" slot-scope="props">
            <div class="van-sku__goods-price">
              <div style="margin-top:-11px">
                <span style="color:#C44044;font-size:15px"
                  >￥{{ props.price }}</span
                >
                <del style="color:#999;font-size:13px">¥ 200</del>
              </div>
              <div
                class="van--num"
                style="font-szie:12px;color:#999;margin-top:5px"
              >
                库存：<span style="color:#CAB078;margin-left:5px">{{
                  num
                }}</span>
              </div>
              <div class="abs" @click="showStepper = false">
                <img
                  src="~assets/img/mall/alert_close.png"
                  style="width:16px;hieght:15px"
                  alt=""
                />
              </div>
            </div>
          </template>
        </van-sku>
      </div>
    </div>
  </div>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import skuData from './data'
export default {
  data() {
    this.skuData = skuData
    return {
      current: 0,
      discounts: false, // 优惠券
      type: 0,
      hide: false,
      images: [
        'https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg'
      ],
      skuData: skuData,
      showBase: true,
      showCustom: false,
      showStepper: false,
      showSoldout: false,
      closeOnClickOverlay: true,
      initialSku: {
        s1: '30349',
        s2: '1193',
        selectedNum: 3
      },
      // customSkuValidator: () => '请选择xxx!',
      shareImg: false,
      double: false,
      href: false,
      num: ''
    }
  },
  head() {
    return {
      title: '商品详情'
    }
  },
  mounted() {
    window.console.log(skuData)
    this.num = skuData.sku.stock_num
  },
  methods: {
    onPointClicked() {
      this.$toast('积分兑换')
    },
    // tab切换
    handleTab(index) {
      this.type = index
    },
    onChange(index) {
      this.current = index
    },
    jump(data) {
      if (data.selectedSkuComb !== null) {
        this.num = data.selectedSkuComb.stock_num
      } else {
        this.num = skuData.sku.stock_num
      }
      window.console.log(data)
    },
    onBuyClicked(data) {
      this.$toast('buy:' + JSON.stringify(data))
      window.console.log(data.goodsId)
    },

    onAddCartClicked(data) {
      this.$toast('add cart:' + JSON.stringify(data))
    }
  }
}
</script>
<style lang="less" scoped>
.shopDetail {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #f4f4f4;
  .sku-container {
    padding: 0 15px;
  }

  .abs {
    width: 50px;
    height: 50px;
    position: absolute;
    right: 0px;
    top: 0px;
    text-align: center;
    line-height: 50px;
  }

  .shopalert {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 99;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    .alertborder {
      padding: 15px 0;
      font-size: 13px;
      color: #666;
      border-bottom: 0.5px solid #d6d6d6;
    }
    .you {
      color: #333;
      font-size: 18px;
      text-align: center;
      padding: 15px 0;
      font-weight: bold;
    }
    .man-close {
      height: 18px;
      padding: 0 10px;
      color: #c44044;
      border-radius: 9px;
      border: 1px solid #c44044;
      font-size: 10px;
    }
    .alertborder:last-child {
      border-bottom: none;
    }
    .bug {
      padding: 0 42px;
      margin: auto;
      margin-top: 30%;
      .bugmain {
        border-radius: 5px;
        padding: 18px 10px 20px 10px;
        background: linear-gradient(
          90deg,
          rgba(215, 191, 141, 1) 0%,
          rgba(195, 166, 106, 1) 100%
        );
        .pai {
          height: 24px;
          border-radius: 12px;
          opacity: 0.6;
          color: #ae9358;
          font-size: 10px;
          line-height: 24px;
          padding: 0 15px;
          background: #fff;
        }
        .bugname {
          color: #333;
          font-size: 14px;
          font-weight: bold;
          -webkit-box-orient: vertical;
          position: absolute;
          bottom: 0;
        }
      }
    }

    .long {
      color: #fff;
      font-size: 16px;
      margin-top: 34px;
      text-align: center;
    }
    .alertmain {
      padding: 25px 15px 15px;
      background: #fff;
      position: fixed;
      bottom: 0;
      z-index: 999;
      width: 100%;
      text-align: center;
      font-size: 13px;
      .shopimg {
        width: 30px;
        height: 30px;
        margin-bottom: 5px;
      }
      .bor {
        width: 100%;
        height: 3px;
        border: 1px solid #000000;
        opacity: 0.03;
        margin-bottom: 14px;
      }
    }
  }
  .three {
    margin-bottom: 10px;
    padding: 13px 20px;
    background: #fff;
    font-size: 13px;
    color: #000;
  }
  .buy {
    color: #fff;
    text-align: center;
    font-weight: bold;
    background: #c44044;
    line-height: 48px;
  }
  .kefu {
    font-size: 10px;
    color: #666;
    border-right: 1px solid #e2e2e2;
    text-align: center;
    align-self: center;
  }
  .bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    font-size: 14px;
    color: #333;
    width: 100%;
    height: 48px;
    background: #fff;
  }
  .border {
    width: 15px;
    height: 2px;
    border-radius: 3px;
    background: #c44044;
    margin: auto;
    margin-top: 2px;
  }
  .tab {
    height: 44px;
    background: #fff;
    font-size: 14px;
    color: #999999;
  }
  .manjian {
    width: 40px;
    height: 18px;
    /* text-align: center; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    border-radius: 9px;
    color: rgb(196, 64, 68);
    border: 1px solid rgb(196, 64, 68);
    margin-right: 10px;
  }
  .img {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 230px;
    pointer-events: none;
  }
  .custom-indicator {
    position: absolute;
    right: 20px;
    bottom: 10px;
    width: 36px;
    line-height: 16px;
    text-align: center;
    height: 16px;
    color: #fff;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 8px;
  }
  .head-content {
    padding: 6px 20px 15px 20px;
    background: #fff;
    .price {
      font-size: 30px;
      font-weight: bold;
      margin-right: 10px;
      margin-left: -8px;
    }
    .zhe {
      display: inline-block;
      width: 36px;
      height: 16px;
      text-align: center;
      line-height: 16px;
      border-radius: 10px;
      background: rgba(196, 64, 68, 0.13);
      font-size: 10px;
    }
  }
  .shareImg {
    position: fixed;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    bottom: 60px;
    right: 5px;
  }
}
</style>
