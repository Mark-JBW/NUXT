<template>
  <div class="brand">
    <div style="background:#f3f4f8;padding:10px 5px 10px 15px">
      <div
        class="flex"
        style="justify-content: space-around;flex-wrap: wrap; justify-content: left;"
      >
        <div
          v-for="(item, index) in [0, 1, 2, 4]"
          :key="index"
          :style="'width:' + (width - 50) / 3 + 'px'"
          class="flex"
          style="background:#fff;text-align:center;margin-bottom:10px;align-items:center;margin-right:10px;height:108px"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      width: ''
    }
  },
  mounted() {
    this.width = this.getViewportSize.size().width
  },
  head() {
    return {
      title: '全部品牌'
    }
  }
}
</script>
<style lang="less" scoped>
.brand {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #f3f4f8;
}
</style>
