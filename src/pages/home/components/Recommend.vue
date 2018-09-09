<template>
    <div>
      <div class="title">热销推荐</div>
      <ul>
        <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
          <img class="item-img" :src="item.url"/>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommond',
  data: function () {
    return {
      recommendList: [
        {
          id: 1,
          url: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
          title: '北京欢乐谷',
          desc: '北京市东四环旁边北京市东四环旁边北京市东四环旁边北京市东四环旁边'
        },
        {
          id: 2,
          url: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
          title: '北京欢乐谷',
          desc: '北京市东四环旁边北京市东四环旁边北京市东四环旁边北京市东四环旁边'
        },
        {
          id: 3,
          url: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
          title: '北京欢乐谷',
          desc: '北京市东四环旁边北京市东四环旁边北京市东四环旁边北京市东四环旁边'
        },
        {
          id: 4,
          url: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
          title: '北京欢乐谷',
          desc: '北京市东四环旁边北京市东四环旁边北京市东四环旁边北京市东四环旁边'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
.title
  margin-top .2rem
  line-height .8rem
  background #eee
  text-indent .2rem
.item
  display flex
  height 1.9rem
  overflow hidden
  .item-img
    height 1.7rem
    width 1.7rem
    margin .1rem
  .item-info
    flex 1
    padding .1rem
    min-width 0
    .item-title
      line-height .54rem
      font-size .35rem
      ellipsis()
    .item-desc
      line-height .54rem
      font-size .30rem
      color #ccc
      ellipsis()
    .item-button
      background-color darkorange
      border-radius .05rem
      font-size .2rem
      padding .1rem
</style>
