/* eslint-disable no-undef */
<template>
  <div>
    <div class="container">
      <!-- 搜索 -->
      <div class="search">
        <div
          v-if="searchType"
          class="flex align-center justify-content search1"
          @click="searchType = false"
        >
          <img
            src="~assets/img/mall/serach-right.png"
            style="width:13px;height:13px;margin-right:5px"
            alt=""
          />
          <span>搜索</span>
        </div>
        <div v-else>
          <div class="flex align-center">
            <div class="flex flex-1 search1" style="padding:0 8px;">
              <div style="width:80px;text-align:left">
                <div @click="hide = !hide">
                  <img
                    src="~assets/img/mall/serach-right.png"
                    style="width:13px;height:13px;margin-right:3px;vertical-align: middle;"
                    alt=""
                  />
                  <span style="color:#333">商品</span>
                  <img
                    src="~assets/img/mall/search-ionic.png"
                    style="width:8px;height:8px;vertical-align: -webkit-baseline-middle;"
                    alt=""
                  />
                </div>
                <div v-if="hide" class="search-hide">
                  <div style="padding:0 10px">
                    <nuxt-link
                      style="color:#333"
                      :to="{ name: 'mall-shopList', query: { id: 1 } }"
                    >
                      <p
                        style="padding:13px 0 2px;border-bottom:0.5px solid #D8D8D8"
                      >
                        商品
                      </p>
                    </nuxt-link>
                    <nuxt-link
                      style="color:#333"
                      :to="{ name: 'mall-shopList', query: { id: 2 } }"
                    >
                      <p style="padding:6px 0">品牌</p>
                    </nuxt-link>
                  </div>
                </div>
              </div>
              <nuxt-link style="color:#333" :to="{ name: 'mall-shopList' }">
                <div class="flex-1" style="text-align:left;">
                  <span style="color:#999;font-size:13px"
                    >请输入要搜索的内容</span
                  >
                </div>
              </nuxt-link>
            </div>
            <nuxt-link style="color:#C44044" :to="{ name: 'mall-shopList' }">
              <span style="margin-left:10px;color:#C44044;font-size:16px"
                >搜索</span
              >
            </nuxt-link>
          </div>
        </div>
      </div>
      <div ref="main" style="margin-top:50px">
        <!-- 轮播一 -->
        <div
          ref="type1"
          style="margin-bottom:10px;background:#fff;padding:10px"
        >
          <van-swipe :autoplay="3000" @change="onChange">
            <van-swipe-item v-for="(image, index) in images" :key="index">
              <img class="img" :src="image" />
            </van-swipe-item>
            <div slot="indicator" class="custom-indicator">
              {{ current + 1 }}/4
            </div>
          </van-swipe>
        </div>
        <!-- 轮播二 -->
        <div
          ref="type2"
          style="background:#fff;padding:10px;margin-bottom:10px;"
        >
          <van-swipe :autoplay="3000" @change="onChange">
            <van-swipe-item v-for="(image, index) in images" :key="index">
              <img class="img" :src="image" />
            </van-swipe-item>
            <div slot="indicator" class="custom-indicator">
              {{ current + 1 }}/4
            </div>
          </van-swipe>
          <div style="margin-top:10px">
            <div
              class="flex"
              style="justify-content: space-around;flex-wrap: wrap; justify-content: left;"
            >
              <div
                v-for="(value, i) in [0, 1, 2]"
                :key="i"
                :style="'width:' + (width - 20) / 2 + 'px'"
                style="text-align: left;height:165px;flex-wrap: wrap;border:1px solid red;margin-bottom:5px"
              >
                {{ i }}
              </div>
            </div>
          </div>
        </div>
        <!-- 轮播3 -->
        <div ref="type3" style="background:#fff;padding:10px">
          <van-swipe :autoplay="3000" @change="onChange">
            <van-swipe-item v-for="(image, index) in images" :key="index">
              <img class="img" :src="image" />
            </van-swipe-item>
            <div slot="indicator" class="custom-indicator">
              {{ current + 1 }}/4
            </div>
          </van-swipe>
          <div style="margin-top:10px">
            <div
              class="flex"
              style="justify-content: space-around;flex-wrap: wrap; justify-content: left;"
            >
              <div
                v-for="(value, i) in [0, 1, 2]"
                :key="i"
                :style="'width:' + (width - 20) / 2 + 'px'"
                style="text-align: left;height:165px;flex-wrap: wrap;border:1px solid red;margin-bottom:5px"
              >
                {{ i }}
              </div>
            </div>
          </div>
        </div>
        <!-- 4 -->
        <div ref="type4" style="padding:10px 5px 10px 10px;background:#F3F4F8">
          <div
            style="padding:0 10px;align-items: center;justify-content: center;"
            class="flex"
          >
            <div style="width:33%;height:1px;background:#CECECE"></div>
            <span
              style="color:#353535;font-size:14px;font-weight:bold;margin:0 15px"
              >品牌展示</span
            >
            <div style="width:33%;height:1px;background:#CECECE"></div>
          </div>
          <div>
            <div
              class="flex"
              style="justify-content: space-around;flex-wrap: wrap; justify-content: left;"
            >
              <div
                v-for="(item, index) in [0, 1, 2, 3, 4, 5, 6, 7]"
                :key="index"
                :style="'width:' + (width - 35) / 4 + 'px'"
                style="text-align:center;height:85px;background:#fff;margin-right:5px;margin-bottom:5px"
              >
                <div v-if="index == 7">
                  <img
                    src="~assets/img/index/all.png"
                    alt=""
                    style="width:100%;height:100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 新人领取弹窗 -->
        <div v-if="false" class="shopalert">
          <div style="padding:0 37px">
            <div class="new">
              <div style="margin-left:4px">
                <p style="font-size:26px;padding-top:26px;font-weight:bold">
                  恭喜你
                </p>
                <p style="font-size:18px;font-weight:bold">获得一张新人券</p>
                <p
                  style="position:absolute;top:201px;font-size:40px;width:100%;"
                >
                  <span style="font-weight:bold">20</span>
                  <span style="font-size:13px;margin-left:-10px">元</span>
                </p>
                <p
                  style="font-size:10px;color:#fff;position:absolute;top:262px;width:100%"
                >
                  有效期：2019.04.01～2019.08.01
                </p>
              </div>
            </div>
            <div style="text-align:center">
              <img
                src="~assets/img/index/index-close.png"
                style="width:30px;height:30px;margin-top:43px;"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <tabbar :active="0" :curr-index="0"></tabbar>
  </div>
</template>

<script>
import tabbar from '~/components/tabbar.vue'

// eslint-disable-next-line no-unused-vars
import axios from 'axios'
export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    tabbar
  },
  data() {
    return {
      searchType: true,
      radio: '1',
      width: '',
      hide: false,
      current: 0,
      images: [
        'https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg'
      ]
    }
  },
  asyncData({ req, res }) {
    // 请检查您是否在服务器端
    // 使用 req 和 res
    if (process.server) {
      return {
        host: req.headers.host
      }
    }
  },

  head() {
    return {
      title: '名品商城'
      // 修改收货地址动态改版
    }
  },
  mounted() {
    this.$refs.main.appendChild(this.$refs.type4)
    window.console.log(this.$refs.type1)
    this.asyncData()
    // 获取屏幕的宽度
    this.width = this.getViewportSize.size().width
  },

  methods: {
    onChange(index) {
      this.current = index
    },
    // 方式一(await)
    async asyncData(context) {
      // eslint-disable-next-line no-unused-vars
      const data = await axios.get('https://api.myjson.com/bins/1dkbio')
      window.console.log(data)
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  margin: 0 auto;
  padding-bottom: 50px;
  min-height: 100vh;
  background: #f3f4f8;
  position: absolute;
  width: 100%;
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
  .img {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 230px;
    pointer-events: none;
  }
  .search {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    padding: 8px;
    color: #b2b2b2;
    font-size: 13px;
    justify-content: center;
    align-items: center;
    background: #f3f4f8;
    .search-hide {
      margin-left: -10px;
      z-index: 22;
      position: absolute;
      text-align: center;
      color: #333;
      font-size: 14px;
      width: 80px;
      height: 90px;
      background: url('~assets/img/mall/serch-la.png');
      background-size: 100% 100%;
    }
    .search1 {
      background: #fff;
      border-radius: 5px;
      height: 28px;
      line-height: 28px;
      text-align: center;
      width: 100%;
    }
  }
  .shopalert {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 99;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
  }
  .new {
    margin-top: 30%;
    position: relative;
    color: #846628;
    text-align: center;
    height: 413px;
    background: url('~assets/img/index/index.png');
    background-size: 100% 100%;
  }
}
</style>
