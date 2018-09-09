<template>
    <div class="header">
      <router-link to="/">
        <div class="iconfont back-icon">&#xe624;</div>
      </router-link>
      城市选择
    </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.header
  position relative
  height $headerHeight
  line-height $headerHeight
  overflow hidden
  text-align center
  color #fff
  background: $bgColor
  font-size .32rem
  .back-icon
    position absolute
    width: .64rem
    top 0
    left 0
    font-size .4rem
    text-align center
    color #fff
</style>
