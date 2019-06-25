/* eslint-disable vue/require-prop-types */ /* eslint-disable
no-unused-expressions */
<template>
  <div>
    <van-tabbar v-model="actives" class="active_tab">
      <van-tabbar-item
        v-for="(item, index) in tabbars"
        :key="index"
        :info="index == 2 ? '15' : ''"
        @click="tab(index, item.name)"
      >
        <span :class="type == index ? actives : ''">{{ item.title }}</span>
        <template slot="icon" slot-scope="props">
          <img :src="props.active ? item.active : item.normal" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['currIndex', 'active'],
  data() {
    return {
      type: this.currIndex,
      actives: this.active,
      tabbars: [
        {
          // name: 'home',
          title: '首页',
          normal: require('../assets/img/index1.png'),
          active: require('../assets/img/index11.png')
        },
        {
          // name: 'category',
          title: '分类',
          normal: require('../assets/img/index2.png'),
          active: require('../assets/img/index22.png')
        },
        {
          // name: 'cart',
          title: '购物车',
          normal: require('../assets/img/index3.png'),
          active: require('../assets/img/index33.png')
        },
        {
          // name: 'mine',
          title: '个人中心',
          normal: require('../assets/img/index4.png'),
          active: require('../assets/img/index44.png')
        }
      ]
    }
  },
  methods: {
    tab(index, val) {
      this.type = index
      if (index === 0) this.$router.push({ path: '/' })
      if (index === 1) this.$router.push({ path: '/mall/classify' })
      if (index === 2) this.$router.push({ path: '/trade/shopCard' })
      if (index === 3) this.$router.push({ path: '/me/userInfo' })
      // window.console.log(index)
      // this.$router.push(val)
    }
  }
}
</script>
<style lang="less" scoped>
.active_tab img {
  width: 25px;
  height: 25px;
}

.van-tabbar-item--active {
  color: #c44044;
}
</style>
