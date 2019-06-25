<template>
  <div>
    <!-- <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" @load="onLoad"> -->
    <!-- 加载的内容-->
    <!-- </van-list>
    </van-pull-refresh> -->
    <div style="padding:20px 0 20px 20px;">
      <div
        v-for="(item, index) in [0, 1, 2]"
        :key="index"
        style="padding:10px 20px 5px 0;border-bottom:1px solid #D8D8D8;"
        class="flex"
      >
        <img
          src=""
          style="width:100px;height:75px;border:1px solid red;margin-right:11px"
          alt=""
        />
        <div class="flex-1">
          <p class="right-top " style="-webkit-box-orient: vertical;">
            欧莱雅植物护发素深层护理欧莱雅植 物护发素深层护理
            欧莱雅植物护发素深层护理欧莱雅植 物护发素深层护理
            欧莱雅植物护发素深层护理欧莱雅植 物护发素深层护理
          </p>
          <p class="right-bottom ">
            ￥400.00
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      deviceList: [], // 用于存放加载的数据
      totalPage: 0,
      pageNumber: 0,
      loading: false, // 控制上拉加载的加载动画
      finished: false, // 控制在页面往下移动到底部时是否调用接口获取数据
      isLoading: false // 控制下拉刷新的加载动画
    }
  },
  head() {
    return {
      title: '我的收藏'
    }
  },
  methods: {
    init() {
      const data = {
        pageNumber: this.pageNumber + 1
      }
      const self = this
      this.$.Post('/project/deviceShow', data, re => {
        self.deviceList = re.info.list
        self.totalPage = re.info.totalPage
        self.isLoading = false // 关闭下拉刷新效果
      })
    },
    // 下拉刷新
    onRefresh() {
      const self = this
      setTimeout(() => {
        self.totalPage = 0
        self.pageNumber = 0
        self.init() // 加载数据
      }, 500)
    },
    // 页面初始化之后会触发一次，在页面往下加载的过程中会多次调用【上拉加载】
    onLoad() {
      const self = this
      setTimeout(() => {
        const data = {
          pageNumber: self.pageNumber + 1
        }
        self.$.Get('/project/deviceShow', data, re => {
          self.totalPage = re.info.totalPage
          self.deviceList = self.deviceList.concat(re.info.list)
          self.loading = false
          self.pageNumber++
          if (self.pageNumber >= self.totalPage) {
            self.finished = true
          }
        })
      }, 500)
    }
  }
}
</script>
<style lang="less" scoped>
.right-top {
  font-size: 14px;
  color: #333333;
  font-weight: 400;
  display: -webkit-box;

  -webkit-line-clamp: 2;
  overflow: hidden;
}
.right-bottom {
  font-size: 14px;
  color: #c44044;
  font-weight: 500;
  margin-top: 15px;
}
</style>
