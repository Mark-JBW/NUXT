<template>
  <div>
    <!-- 主要分类 -->
    <div class="content flex" :style="'height:' + (height - 50) + 'px'">
      <div
        class="left-scroll"
        style="width:97px;height:100%;background:#F4F4F4;overflow: auto;"
      >
        <div
          v-for="(item, index) in [0, 1, 2, 3, 4, 1, 2, 5, 1, 5]"
          :key="index"
          :style="{
            background: mainActiveIndex == index ? '#fff' : '#F4F4F4',
            color: mainActiveIndex == index ? '#C44044' : '#333'
          }"
          style="padding:15px 0;background:#F4F4F4;font-size:14px;"
          @click="onNavClick(index)"
        >
          <div
            style="text-align:center;"
            :style="{
              borderLeft:
                mainActiveIndex == index ? '5px solid #C44044' : 'none'
            }"
          >
            一级分类
          </div>
        </div>
      </div>
      <div
        class="right-scroll"
        style="background:#fff;height:100%;overflow:auto"
        :style="'width:' + (width - 97) + 'px'"
      >
        <div>
          <p style="padding:15px 0;text-align:center;color:#333">
            {{ mainActiveIndex }}
          </p>
          <div
            class="flex"
            style="justify-content: space-around;text-align: center;flex-wrap: wrap;"
          >
            <div
              v-for="(item, index) in [0, 1, 2, 3, 4]"
              :key="index"
              :style="'width:' + (width - 97) / 3 + 'px'"
            >
              <img
                src=""
                style="width:60px;height:60px;border:1px solid red;display:inline-block"
                alt=""
              />
              <p style="font-size:11px;color:#666;margin-bottom:20px">
                一级分类
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <tabbar :active="1" :curr-index="1"></tabbar>
  </div>
</template>
<script>
import tabbar from '~/components/tabbar.vue'
export default {
  components: {
    tabbar
  },
  data() {
    return {
      mainActiveIndex: 0,
      activeId: 1,
      height: '',
      width: ''
    }
  },
  head() {
    return {
      title: '分类'
    }
  },
  mounted() {
    this.height = this.getViewportSize.size().height
    this.width = this.getViewportSize.size().width
    // eslint-disable-next-line no-console
    console.log(this.height)
  },
  methods: {
    // 左右切换
    onNavClick(index) {
      this.mainActiveIndex = index
    },
    onItemClick(data) {
      this.activeId = data.id
    }
  }
}
</script>
<style lang="less" scoped></style>
