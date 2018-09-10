<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper" v-if="show">
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
  props: {
    swiperList: Array
  },
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000
      }
    }
  },
  computed: {
    show: function () {
      return this.swiperList.length // 避免空数组初始化swiper，当有数据时会显示最后一张
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
    padding-bottom 28%
    background #eee
    .swiper-img
      width: 100%
</style>
