<template>
  <div class="coupon">
    <!-- 头部 -->
    <div class="main ">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        shape="round"
        @search="search"
      >
        <div slot="action" @click="onSearch">
          <img
            src="~assets/img/mall/shopList.png"
            style="width:20px;height:16px;"
            alt=""
          />
        </div>
      </van-search>
      <div class="flex">
        <div
          v-for="(item, index) in tabType"
          :key="index"
          class="flex-1"
          style="text-align:center;height:28px;background:#fff;color:#fff;font-size:14px;color:#666"
          @click="handleTab(index)"
        >
          <div :style="{ color: type == index ? '#C44044' : '#666' }">
            <span>{{ item }}</span>
            <div v-if="index == 2" style="display:inline-block" class="add">
              <img src="~assets/img/mall/mall_add.png" alt="" />
              <img
                src="~assets/img/mall/mall_close.png"
                alt=""
                style="margin-top:2px"
              />
            </div>
          </div>
          <p v-if="type == index" class="border"></p>
        </div>
      </div>
    </div>
    <!-- 内容区域 -->
    <div style="padding:15px 5px 15px 15px;background:#F4F4F4;">
      <div class="flex" style="flex-wrap: wrap;">
        <div
          v-for="(item, index) in [0, 1, 23, 4, 5]"
          :key="index"
          style="background:#fff;border-radius:4px;margin:0 10px 10px 0"
          :style="'width:' + (width - 40) / 2 + 'px'"
        >
          <img
            src="~assets/img/mall/shopList.png"
            style="width:100%;height:176px;display:block;"
            alt=""
          />

          <p class="line_ellipsis name">
            商品名称商品名称商品名称商品商品名称..
          </p>
          <div class="price flex">
            <p class="flex-1">
              <span style="font-size:24px;color:#C44044;font-weight:bold">
                ¥150</span
              >
              <span style="font-size:13px;color:#999;maigin-left:5px"
                >¥ 200</span
              >
            </p>
            <span>销量 345</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: 0,
      tabType: ['综合', '销量', '价格'],
      width: '',
      value: ''
    }
  },
  head() {
    return {
      title: '商品列表'
    }
  },
  mounted() {
    document.getElementsByClassName('van-field__control')[0].focus()
    this.width = this.getViewportSize.size().width
  },
  methods: {
    // tab切换
    handleTab(index) {
      this.type = index
    },
    onSearch() {
      this.$router.push({ path: '/mall/classify' })
    },
    search() {
      window.console.log(this.value)
    },
    onCancel() {
      this.$toast(this.$t('cancel'))
    }
  }
}
</script>
<style lang="less" scoped>
.coupon {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #f4f4f4;
  .main {
    box-shadow: 0px 2px 8px 0px rgba(228, 228, 228, 0.66);
    .border {
      width: 15px;
      height: 2px;
      border-radius: 3px;
      background: #c44044;
      margin: auto;
      margin-top: 2px;
    }
    .add {
      position: absolute;
      width: 20px;
      margin-left: 2px;
      img {
        width: 10px;
        height: 5px;
        display: block;
        margin-top: 4px;
      }
    }
  }
  .name {
    -webkit-box-orient: vertical;
    color: #333;
    font-size: 13px;
    padding: 5px;
  }
  .price {
    color: #333;
    font-size: 12px;
    padding: 5px 5px 8px;
    align-items: baseline;
  }
}
</style>
