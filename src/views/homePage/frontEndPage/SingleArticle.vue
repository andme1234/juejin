<template>
  <div
    class="item"
    ref="item"
    @mouseover="itemover"
    @mouseleave="itemleave"

  >
    <!-- 文章头部 -->
    <div class="item-top">
      <!-- 头部列表 -->
      <ul class="nav-list">
        <!-- 作者 -->
        <li
          class="nav-author"
          @mouseover="isAuthorDetail = true"
          @mouseleave="isAuthorDetail = false"
        >
          <a href="javascript:;">{{ content.author }}</a>

        </li>
        <!-- 发布时间 -->
        <li class="nav-time">
          <a href="javascript:;">{{ intervalTime }}</a>
        </li>
        <!-- 文章标签 -->
        <li class="nav-label">
          <span v-for="i in content.label" :key="i.id">{{ i }}</span>
        </li>
      </ul>
      <!-- 广告标签 -->
      <span v-show="isAdv" class="advertisement">广告</span>
    </div>
    <!-- 文章内容 -->
    <div class="content">
      <!-- 左侧内容 -->
      <div class="content-left" ref="left">
        <!-- 文章标题 -->
        <div class="item-title" ref="title">Git基本使用</div>
        <!-- 文章详细内容 -->
        <div class="item-content" ref="content">
          前言&emsp;&emsp;在项目开始之前，我们就应该需要了解如何去使用Git以及如何使用Git去创建分支、合并分支等等。
        </div>
        <!-- 底部观看次数、点赞量、评论量(若没有文章标签即为广告，则没有观看次数、点赞量、评论量) -->
        <div v-if="content.label.length" class="item-bottom">
          <!-- 观看次数 -->
          <div class="views">
            <img src="@/assets/HomeAndSearch/views.png" alt="" />
            <span>{{ content.views }}</span>
          </div>
          <!-- 点赞量 -->
          <div class="praise" @click.stop="changePraise">
            <p v-show="!isPraise"></p>
            <img
              src="@/assets/HomeAndSearch/recommend-praise3.png"
              alt=""
              v-show="isPraise"
            />
            <span ref="praise">{{ content.praise }}</span>
          </div>
          <!-- 评论量 -->
          <div class="comments">
            <p></p>
            <span>{{ comment }}</span>
          </div>
        </div>
      </div>
      <!-- 右侧图片（若有则展示，无则不展示） -->
      <img
        v-if="content.image"
        class="content-right"
        :src="content.image"
        alt=""
      />
    </div>

  </div>
</template>

<script>

import moment from "moment";

export default {
  name: "SingleArticle",
  data() {
    return {
      isShowMask: false, //判断是否展示遮罩和屏蔽作者弹框
      isPraise: false, //判断是否点赞
      isComments: false, //判断是否有评论
      isDelete: false, //判断是否展示文章右上角删除图标
      isAdv: false, //判断是否展示文章右上角广告图标
    };
  },
  props: ["content"], //接收文章信息
  computed: {
    //若评论数量为0则展示评论字样
    comment() {
      return this.content.comments ? this.content.comments : "评论";
    },
    // 计算发布时间距当时相差多长时间
    intervalTime() {
      let dateTime1 = moment(this.content.time);
      let dateTime2 = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");
      let years = moment(dateTime2).diff(moment(dateTime1), "years");
      let months = moment(dateTime2).diff(moment(dateTime1), "months");
      let days = moment(dateTime2).diff(moment(dateTime1), "days");
      let hours = moment(dateTime2).diff(moment(dateTime1), "hours");
      if (years) {
        return years + "年前";
      } else if (months) {
        return months + "月前";
      } else if (days) {
        return days + "天前";
      } else if (hours) {
        return hours + 11 + "小时前";
      } else {
        return "刚刚";
      }
    },
  },
  methods: {
    //判断是否展示广告标签
    displayAdv() {
      if (!this.content.label.length) {
        this.isAdv = true;
      }
    },
    //鼠标悬浮在文章列表上时改变文章背景
    itemover() {
      if (this.content.label.length) {
        this.$refs.item.style.background = "#fafafa";

      }
    },
    //鼠标离开文章列表上时改变文章背景
    itemleave() {
      this.$refs.item.style.background = "#fff";

    },
    //点赞或取消点赞后改变点赞量、展示点赞之后的点赞图标、改变点赞量的字体颜色
    changePraise() {
      if (!this.isPraise) {
        this.content.praise += 1;
        this.isPraise = true;
        this.$refs.praise.style.color = "#1d7dfa";
      } else {
        this.content.praise -= 1;
        this.isPraise = false;
        this.$refs.praise.style.color = "#909090";
      }
    },
    // 判断是否有右侧图片，若无则将文章内容宽度设为100%
    isPicture() {
      if (!this.content.image) {
        this.$refs.left.style.width = "100%";
      }
    },

  },
  mounted() {
    this.displayAdv(); //是否展示广告图标
    this.isPicture(); //是否展示右侧图片
  },

};
</script>

<style scoped>
.item {
  padding: 15px 20px 0px 20px;
  cursor: pointer;
}
.item .item-top {
  position: relative;
}
.item .item-top .nav-list {
  padding: 0;
  margin: 0;
  display: flex;
  list-style: none;
}
.item .item-top .nav-list li {
  padding: 0 8px;
  border-right: 1px solid #eaeaea;
}
.item .item-top .nav-list li:first-child {
  padding-left: 0;
}
.item .item-top .nav-list li:last-child {
  border-right: none;
}
.item .item-top .nav-list li a {
  text-decoration: none;
  color: #909090;
}
.item .item-top .nav-list .nav-author a {
  color: #4e5969d0;
}
.item .item-top .nav-list .nav-author {
  position: relative;
}
.item .item-top .nav-list .nav-author:hover .author-menu {
  display: block;
  position: absolute;
  top: 17px;
  left: -130px;
  z-index: 100;
}
.item .item-top .nav-list .nav-author a:hover {
  color: blue;
}
.item .item-top .nav-list .nav-label span {
  color: #909090;
  padding: 0 8px;
  border-right: 1px solid #eaeaea;
}
.item .item-top .nav-list .nav-label span:hover {
  color: blue;
}
.item .item-top .nav-list .nav-label span:first-child {
  padding-left: 0;
}
.item .item-top .nav-list .nav-label span:last-child {
  border-right: none;
}
.item .item-top .delete-content {
  position: relative;
}
.item .item-top .delete-content:hover .menu {
  display: block;
}
.item .item-top .delete-content .delete-icon {
  position: absolute;
  width: 23px;
  height: 23px;
  top: -22px;
  right: 0;
}
.item .item-top .advertisement {
  position: absolute;
  top: 0;
  right: 0;
  width: 42px;
  height: 20px;
  text-align: center;
  color: #cfdff2;
  border: 1px solid #cfdff2;
}
.item .content {
  display: flex;
  padding-bottom: 15px;
  border-bottom: 1px solid #f1f2f5;
}
.item .content .content-left {
  width: 77%;
  margin-right: 28px;
}
.item .content .content-left .item-title {
  font-size: 16px;
  font-weight: 700;
  color: #1d2129;
  margin: 16px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.item .content .content-left .item-content {
  color: #86909c;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 16px 0;
}
.item .content .content-left .item-bottom {
  display: flex;
}
.item .content .content-left .item-bottom .views img {
  width: 17px;
  height: 17px;
  vertical-align: bottom;
  margin-right: 5px;
}
.item .content .content-left .item-bottom div p {
  display: inline-block;
  width: 17px;
  height: 17px;
  vertical-align: bottom;
  margin: 0;
  margin-right: 5px;
}
.item .content .content-left .item-bottom .praise p {
  background-image: url("~@/assets/HomeAndSearch/praise.png");
}
.item .content .content-left .item-bottom .praise:hover p {
  background-image: url("~@/assets/HomeAndSearch/praise-click.png");
}
.item .content .content-left .item-bottom .praise img {
  vertical-align: bottom;
  margin-right: 5px;
}
.item .content .content-left .item-bottom .praise:hover span {
  color: blue;
}
.item .content .content-left .item-bottom .comments p {
  background-image: url("~@/assets/HomeAndSearch/comments.png");
}
.item .content .content-left .item-bottom .comments:hover p {
  background-image: url("~@/assets/HomeAndSearch/comments-click.png");
}
.item .content .content-left .item-bottom .comments:hover span {
  color: blue;
}
.item .content .content-left .item-bottom div span {
  margin-right: 20px;
  color: #909090;
}
.item .content .content-right {
  width: 120px;
  height: 80px;
  margin-top: 20px;
}
.item .mask {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #999999;
  opacity: 0;
  transition: all 0.5s;
  visibility: hidden;
  z-index: 101;
}
.item .mask-show {
  opacity: 0.8;
  visibility: visible;
}
.item .text {
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 311px;
  height: 181px;
  opacity: 1;
  text-align: center;
  background-color: #fff;
  border-radius: 5px;
  font-size: 16px;
  opacity: 0;
  /* transition: all 0.3s; */
  visibility: hidden;
  z-index: 102;
}
.item .text-show {
  visibility: visible;
  opacity: 1;
  transform: translate(-50%, -50%);
}
.item .text .text1 {
  padding-top: 35px;
  margin-bottom: 12px;
}
.item .text .text1 span {
  color: #ff7426;
}
.item .text .button {
  margin-top: 38px;
  padding-bottom: 25px;
}
.item .text .button button {
  cursor: pointer;
  width: 118px;
  height: 40px;
}
.item .text .button .cancel {
  border: 1px solid #1e80ff;
  border-radius: 3px;
  color: #1e80ff;
  margin-right: 24px;
  background-color: rgba(224, 220, 220, 0);
}
.item .text .button .cancel:hover {
  color: #1069df;
}
.item .text .button .confirm {
  color: #fff;
  background-color: #1e80ff;
  border: none;
  border-radius: 3px;
}
.item .text .button .confirm:hover {
  background-color: #1069df;
}
</style>
