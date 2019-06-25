import Vue from 'vue'
const getViewportSize = {
  install(Vue) {
    Vue.prototype.getViewportSize = {
      size: function() {
        return {
          width:
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth,
          height:
            window.innerHeight ||
            document.documentElement.clientHeight ||
            document.body.clientHeight
        }
      }
    }
  }
}
Vue.use(getViewportSize)
