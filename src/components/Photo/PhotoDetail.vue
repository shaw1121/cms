<template>
  <div class="detail">
      <NavBar :title="title"></NavBar>
      <div class="photo-title">
          <p>图片标题</p>
          <span>发表日期：2019-02-05</span>
          <span>1次浏览</span>
          <span>分类：民生经济</span>
      </div>

      <ul>
          <li>
            <a href="javascript:void(0)">
                <img src="" alt="">
            </a>
          </li>
      </ul>

      <div class="photo-desc">
          <p>我的评论</p>
      </div>

      <!-- 评论组件 -->

  </div>
</template>

<script>
const imgInfo = {
    title: '23',
    add_time: '',
    click: ''
};

export default {
    // name: 'PhotoDetail'

    data () {
        return {
            imgInfo,
        }
    },
    props: ['title'],
    created() {

    }
}
</script>

<style scoped>

</style>