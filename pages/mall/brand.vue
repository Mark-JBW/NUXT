<template>
  <div class="brand">
    <div style="background:#f3f4f8;padding:10px 0">
      <div
        v-for="(item, index) in [0, 1, 2]"
        :key="index"
        class="flex"
        style="padding:10px 20px;background:#fff;margin-bottom:10px;align-items:center"
      >
        <img
          src=""
          style="width:75px;height:75px;border:1px solid red;margin-right:10px"
          alt=""
        />
        <div class="flex-1">你好</div>
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
      title: '名品商城'
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
