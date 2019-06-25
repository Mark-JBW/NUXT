<template>
  <div class="shopCard">
    <div v-if="false" style="text-align:center;margin-top:60%">
      <img
        src="~assets/img/trade/cardNo.png"
        style="width:171px;height:68px;"
        alt=""
      />
    </div>
    <div>
      <div style="padding-bottom:50px">
        <!-- 全选 -->
        <div class="flex" style="padding:10px 20px 10px 10px">
          <div class="flex-1 flex align-center" @click="checkAll()">
            <img
              :src="
                require('../../assets/img/trade/redact' +
                  (checkStatus ? 2 : 1) +
                  '.png')
              "
              alt=""
              style="width:16px;height:16px;margin-right:5px"
            />
            <span style="color:#333">全选</span>
          </div>
          <div
            class="flex-1"
            style="text-align:right;color:#C44044"
            @click="change = !change"
          >
            {{ change ? '编辑' : '完成' }}
          </div>
        </div>
        <!-- 商品列表 -->
        <div style="padding:5px 0 40px 0;background:#F3F4F8 ">
          <div
            v-for="(item, index) in list"
            :key="index"
            class="flex align-center"
            style="padding:10px 20px 10px 10px;background:#fff;margin-bottom:10px"
            @click="handleRadio(item, index)"
          >
            <img
              :src="
                require('../../assets/img/trade/redact' +
                  (item.check ? 2 : 1) +
                  '.png')
              "
              alt=""
              style="width:16px;height:16px;margin-right:10px"
            />
            <div class="flex-1" @click.stop="jumpDetail()">
              <div class=" flex">
                <img
                  src=""
                  style="width:89px;height:89px;border:1px solid red;margin-right:10px"
                  alt=""
                />
                <div class="flex-1" style="position:relative">
                  <div>
                    <div class="flex">
                      <p
                        class="flex-1 line_ellipsis"
                        style=" -webkit-box-orient: vertical;color:#333"
                      >
                        欧莱雅植物护发素 深层护理
                      </p>
                      <div class="flex" style="align-items: flex-end">
                        <span v-if="change" style="color:#666;"
                          >X {{ item.num }}</span
                        >
                        <div
                          v-else
                          class="flex"
                          style="height:32px;line-height:32px;background:#D8D8D8;border-radius:5px;border:1px solid #D8D8D8;text-align:center"
                        >
                          <p
                            style="width:28px"
                            @click.stop="closeNum(item, index)"
                          >
                            -
                          </p>
                          <input
                            v-model="item.num"
                            type="number"
                            style="width:40px"
                          />
                          <p
                            style="width:28px"
                            @click.stop="addNum(item, index)"
                          >
                            +
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p
                    class="flex align-center"
                    style="position:absolute;bottom:0;width:100%"
                  >
                    <span class="flex-1">
                      <span style="color:#666;">红色 ML</span>
                    </span>
                    <span style="color:#C44044;">￥{{ item.price }}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex fied">
        <div class="flex-1" style="background:#fff;padding-left:21px">
          <span style="color:#333;">总计：</span>
          <span style="color:#C44044;">￥{{ totalPrice }}</span>
        </div>
        <div class="suan">
          {{ 1 == 1 ? '结算' : '删除' }}
        </div>
      </div>
    </div>
    <tabbar :active="2" :curr-index="2"></tabbar>
  </div>
</template>
<script>
import tabbar from '~/components/tabbar.vue'
import { Toast } from 'vant'
export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    tabbar
  },
  head() {
    return {
      title: '购物车'
    }
  },
  data() {
    return {
      change: true,
      totalPrice: 0,
      checkStatus: true, // 全选
      list: [
        { num: 1, price: 100 },
        { num: 2, price: 50 },
        { num: 1, price: 100 },
        { num: 1, price: 100 },
        { num: 1, price: 100 }
      ]
    }
  },

  mounted() {
    this.listAll()
    this.Price()
  },
  methods: {
    // 跳到商品详情
    jumpDetail() {
      this.$router.push({ path: '/mall/shopDetail' })
    },
    // 编辑添加购物车
    addNum(item, index) {
      item.num++
      this.Price()
    },
    listAll() {
      this.list = this.list.map((item, index) => {
        item.check = true
        return item
      })
    },
    // 計算总价格
    Price() {
      this.totalPrice = 0
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].check === true) {
          this.totalPrice += this.list[i].num * this.list[i].price
        }
      }
      this.totalPrice = this.totalPrice.toFixed(2)
    },
    // 编辑减少购物车
    closeNum(item, index) {
      if (item.num <= 1) {
        Toast('购物车数量不能小于1')
        return false
      }
      item.num--
      this.Price()
    },
    // 单选
    isSelectAll() {
      // 如果productList中每一条数据的isSelect都为true，返回true，否则返回false;
      return this.list.every(function(val) {
        return val.check
      })
    },

    // 单选
    handleRadio(item, index) {
      item.check = !item.check
      if (this.isSelectAll() === true) {
        this.checkStatus = true
      } else {
        this.checkStatus = false
      }
      this.Price()
      this.$forceUpdate()
    },
    // 全选
    checkAll() {
      this.checkStatus = !this.checkStatus
      this.list = this.list.map((item, index) => {
        item.check = this.checkStatus
        return item
      })
      this.Price()
      this.$forceUpdate()
    }
  }
}
</script>
<style lang="less" scoped>
.shopCard {
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: 14px;
  background: #f3f4f8;
  input {
    outline: none;
    border: none;
    text-align: center;
  }
  .fied {
    position: fixed;
    bottom: 50px;
    height: 40px;
    line-height: 40px;
    width: 100%;
  }
  .suan {
    height: 100%;
    width: 100px;
    text-align: center;
    color: #fff;
    background: #c44044;
  }
}
</style>
