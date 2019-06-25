<template>
  <div class="game">
    <div class="game-bg">
      <div
        style="position:absolute;bottom:43px;padding:0 36px;width: 100%;height:100px;"
      >
        <!-- <img
          src="~assets/img/game/gua2.png"
          alt=""
          style="width:100%;height:100%"
        /> -->
        <div class="scratch-card">
          <div class="card-body">
            <!-- 灰色涂层 -->
            <canvas class="canvas">sorry, 浏览器不支持canvas</canvas>
            <!-- 刮卡结果 -->
            <div class="gift flex align-center">谢谢参与</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 规则 -->
    <div style="padding:5px 10px">
      <div class="contens">
        <p class="flex">
          <img
            src="~assets/img/game/game-ionic1.png"
            alt=""
            style="width:17px;height:17px"
          />
          <span class="size">活动说明</span>
        </p>
        <p style="color:#666;margin:10px 0 20px;padding-left:23px">
          2019-03-08 16:12:00 ～ 2019-05-08 16:12:00
        </p>
        <p class="flex">
          <img
            src="~assets/img/game/game-ionic2.png"
            alt=""
            style="width:16px;height:16px"
          />
          <span class="size">活动有效时间</span>
        </p>
        <p style="color:#666;margin-top:10px;padding-left:23px">
          活动说明活动说明活动说明活动说明活动说明活动说明活动说明活动说明活动说明活动说明活动说明活动说明活动说明活动说明活动说明活动说明活动说明活动说明活动说明活动说明活动说明活动说明活动说明活动说明活动说明活动说明活动说明
        </p>
      </div>
    </div>
    <!-- 底部 -->
    <div
      style="position:fixed;bottom:0;width:100%;height:48px;line-height:48px;text-align:center;color:#fff;font-size:15px"
      class="flex"
    >
      <div style="background:#FD9400" class="flex-1">我的奖品</div>
      <div style="background:#FE0126" class="flex-1">进入商城</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      canvasWidth: '100%', // 画布宽带
      canvasHeight: 100 // 画布高度,
    }
  },
  head() {
    return {
      title: '刮刮卡'
    }
  },
  mounted() {
    this.pageLoaded()
  },
  methods: {
    pageLoaded() {
      this.canvasApp()
    },
    isSupportCanvas(e) {
      return !!e.getContext
    },

    canvasApp() {
      this.percentage = 0
      this.num = 0
      // 获取canvas并设置其宽高
      const canvas = document.querySelector('.canvas')
      const card = document.querySelector('.scratch-card')
      canvas.width = card.offsetWidth
      canvas.height = card.offsetHeight

      if (!this.isSupportCanvas(canvas)) {
        return
      }
      window.console.log(this.canvasImg)
      const _this = this
      const ctx = canvas.getContext('2d')
      // 绘制涂层
      const img = new Image()
      img.crossOrigin = '*'
      function drawCanvas() {
        // 指定图片的URL
        img.src = require('../../assets/img/game/gua2.png')
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = ''
        img.onload = function() {
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
        }
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = 'red'
        ctx.font = '24px "微软雅黑"'
        // ctx.fillText(
        //   // "请开始刮奖",
        //   canvas.width / 2 - 64,
        //   canvas.height / 2 + 4
        // );
        ctx.closePath()
        ctx.restore()
      }
      drawCanvas()
      // 监听鼠标和touch事件
      canvas.addEventListener('mousedown', moveStart, false)
      canvas.addEventListener('touchstart', moveStart, false)
      canvas.addEventListener('mousemove', move, false)
      canvas.addEventListener('touchmove', move, false)
      canvas.addEventListener('mouseup', moveEnd, false)
      canvas.addEventListener('touchend', moveEnd, false)
      // 获取鼠标或者手指当前点的位置
      function getPointPosition(e, canvas) {
        let mx
        let my
        let offsetX = 0
        let offsetY = 0
        if (canvas.offsetParent !== null) {
          // 由于canvas刚开始是绝对定位，其offsetLeft和offsetTop为0，需要不断向上寻找其父级，
          // 计算父级的offsetLeft和offsetTop，直到向上寻找到body元素，因为body的offsetParent为null
          do {
            offsetX += canvas.offsetLeft
            offsetY += canvas.offsetTop
          } while ((canvas = canvas.offsetParent))
        }
        if (e) {
          mx = e.targetTouches[0].pageX - offsetX
          my = e.targetTouches[0].pageY - offsetY
        }
        // 鼠标在页面中的坐标减去canvas在页面中的坐标就是鼠标在canvas中的坐标

        return {
          x: mx,
          y: my
        }
      }
      // 计算从鼠标移动开始到结束时点之间的距离
      function distance(point1, point2) {
        return Math.sqrt(
          Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2)
        )
      }
      // 计算从鼠标移动开始到结束时两点之间与x轴的夹角、
      function angle(point1, point2) {
        return Math.atan2(point2.x - point1.x, point2.y - point1.y)
      }
      // 设置是否擦除状态和刷子
      let isErasering = false
      let lastPoint
      const brush = new Image()
      brush.src = require('../../assets/img/game/canvas.png')

      // 鼠标按下或手指触摸开始时事件
      function moveStart(e) {
        isErasering = true
        lastPoint = getPointPosition(e, canvas)
        // console.log(lastPoint)
      }
      // 鼠标移动或手指滑动时事件
      function move(e) {
        if (!isErasering) {
          return
        }
        if (_this.percentage === 0) _this.$emit('touchStart')
        const currentPoint = getPointPosition(e, canvas)
        // console.log(currentPoint)
        const dist = distance(lastPoint, currentPoint)
        const ang = angle(lastPoint, currentPoint)
        let x
        let y
        // 计算并绘制鼠标或手指移动时的实时路径
        for (let i = 0; i < dist; i++) {
          x = lastPoint.x + Math.sin(ang) * i - 25
          y = lastPoint.y + Math.cos(ang) * i - 25

          // destination-out效果是将源图像（刷子图案）绘制到目标图像（灰色涂层）上，源图像是透明的
          ctx.globalCompositeOperation = 'destination-out'
          // 在鼠标或手指移动过的地方绘制刷子图案
          ctx.drawImage(brush, x, y)
        }
        lastPoint = currentPoint
        handleFilledPercentage(getFilledPercentage())
      }
      // 鼠标或手指松开时事件
      function moveEnd() {
        isErasering = false
      }
      // 计算已经刮过的区域占整个区域的百分比
      function getFilledPercentage() {
        let imgData
        // eslint-disable-next-line prefer-const
        imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)

        // imgData.data是个数组，存储着指定区域每个像素点的信息，数组中4个元素表示一个像素点的rgba值
        const pixels = imgData.data
        const transPixels = []
        for (let i = 0; i < pixels.length; i += 4) {
          // 严格上来说，判断像素点是否透明需要判断该像素点的a值是否等于0，
          // 为了提高计算效率，这儿设置当a值小于128，也就是半透明状态时就可以了
          if (pixels[i + 3] < 128) {
            transPixels.push(pixels[i + 3])
          }
        }
        return (
          ((transPixels.length / (pixels.length / 4)) * 100).toFixed(2) + '%'
        )
      }
      // 设置阈值，去除灰色涂层
      function handleFilledPercentage(percentage) {
        percentage = percentage || 0
        _this.percentage = percentage
        if (parseInt(percentage) > 25) {
          _this.num++
          // 去除画布方法一：直接将canvas涂层删掉
          // canvas.parentNode.removeChild(canvas);
          // 去除画布方法二：将canvas涂层设置为透明
          ctx.fillStyle = 'rgba(255, 255, 255)'
          if (_this.num === 1) _this.$emit('touchEnd')
          ctx.fillRect(0, 0, canvas.width, canvas.height)
        }
      }
    }
  }
}
</script>
<style lang="less" scoped>
.game {
  .scratch-card {
    width: 100%;
    height: 100%;
  }

  .card-body {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
  .canvas {
    /* 利用绝对定位让灰色涂层与刮卡结果重叠 */
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
  }
  .gift {
    /* 利用绝对定位让灰色涂层与刮卡结果重叠 */
    position: absolute;
    background: rgb(187, 187, 187);
    color: rgb(101, 101, 101);
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    font-size: 18px;
    justify-content: center;
    // background-color: #fcfcfc;
  }
  .game-bg {
    width: 100%;
    position: relative;
    height: 327px;
    background: url('~assets/img/game/games.png');
    background-size: 100% 100%;
  }
  .contens {
    height: 194px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 20px 0px rgba(215, 213, 213, 1);
    border-radius: 10px;
    overflow: auto;
    padding: 30px 30px 20px 14px;
    font-size: 13px;
  }
  .size {
    font-size: 14px;
    color: #333;
    font-weight: bold;
    margin-left: 8px;
  }
}
</style>
