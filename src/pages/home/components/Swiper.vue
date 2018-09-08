<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="去哪儿门票" style="opacity: 1;">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000
      },
      swiperList: [
        {
          id: 1,
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1808/70/5603e6a535062402.jpg_750x200_2c552f2c.jpg'
        },
        {
          id: 2,
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1807/22/382624cbe97b0502.jpg_750x200_36a074d6.jpg'
        },
        {
          id: 3,
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1807/78/0a6355bcbbf89502.jpg_750x200_fc738633.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
// 因为scoped限制了只在当前组件样式设置有效，所以使用>>>样式穿透，覆盖.wrapper下.swiper-pagination-bullet-active背景色
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
  //为了解决3G下图片加载慢下方文字内容占据图片位置问题，具体看图片宽高比 本项目是26.67%
    overflow hidden
    width: 100%
    height: 0
    padding-bottom 26.67%
    background #eee
    .swiper-img
      width: 100%
</style>
