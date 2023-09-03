<template>
  <div class="page">
    <!-- 第一行导航栏 -->
    <!-- <div class="top1" :class="navShow ? 'navOn' : 'navOff'"></div> -->
    <!-- 第二行导航栏 -->
    <!-- <div class="top2" :class="navTop ? 'navTopOn' : 'navTopOff'"></div> -->
    <!-- 文章列表 -->
    <div class="entry-list-container">
      <!-- 头部 -->
      <div class="list-header">
        <!-- 导航栏列表 -->
        <ul class="nav-list">
          <!-- 推荐 -->
          <li class="nav-recommend" @click="hideSelect">
            <router-link active-class="active" to="/integratedPage/recommend"
              >推荐</router-link
            >
          </li>
          <!-- 最新 -->
          <li class="nav-newest" @click="hideSelect">
            <router-link active-class="active" to="/integratedPage/newest"
              >最新</router-link
            >
          </li>

        </ul>
      </div>
      <!-- 文章内容列表 -->
      <div class="entry-list-wrap">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// import "@/assets/css/app.scss"; //引入样式

export default {
  name: "HomeArticle",
  data() {
    return {
      isSelect: false, //决定是否展示下拉框
      top: "", //滚轮至顶部的距离
      navShow: true, //决定是否展示第一行导航栏
      navTop: true, //决定是否展示第二行导航栏
    };
  },
  mounted() {
    // 获取滚轮至顶部的距离
    window.addEventListener("scroll", () => {
      this.top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
    });
  },
  // 监听滚轮至顶部的距离变化
  watch: {
    top(newValue, oldValue) {
      // 滚轮滑动距离大于100则展示/隐藏导航栏
      if (newValue > 100) {
        if (newValue > oldValue) {
          this.navShow = false;
          this.navTop = false;
        } else {
          this.navShow = true;
          this.navTop = true;
        }
      }
    },
  },
  methods: {
    hideSelect() {
      this.isSelect = false;
    },
  },
};
</script>

<style scoped>
.page {
  background-color: #f4f5f5;
  padding-top: 10px;
  margin-top: -10px;
  font-size: 14px;
}
.page .top1 {
  position: fixed;
  top: 0;
  width: 100%;
  height: 62px;
  background-color: yellow;
  z-index: 100;
}
.page .top2 {
  position: fixed;
  top: 62px;
  width: 100%;
  height: 45px;
  background-color: red;
  z-index: 100;
}
.page .navTopOn {
  transition: transform 0.5s;
  transform: translate(0, 0);
}
.page .navTopOff {
  transition: transform 0.5s;
  transform: translate(0, -62px);
}
.page .navOn {
  transition: transform 0.5s;
  transform: translate(0, 0);
}
.page .navOff {
  transition: transform 0.5s;
  transform: translate(0, -62px);
}
.page .entry-list-container {
  width: 720px;
  /* margin: 0 auto; */
  background-color: #fff;
  border-radius: 5px;
}
.page .entry-list-container .list-header {
  padding: 15px 20px;
  border-bottom: 1px solid #eaeaea;
}
.page .entry-list-container .list-header .nav-list {
  padding: 0;
  margin: 0;
  height: 30px;
  line-height: 30px;
  display: flex;
  list-style: none;
}
.page .entry-list-container .list-header .nav-list li {
  padding: 0 15px;
  text-align: center;
  border-right: 1px solid #eaeaea;
}
.page .entry-list-container .list-header .nav-list li .active {
  border-bottom: 2px solid #1e80ff;
}
.page .entry-list-container .list-header .nav-list li:first-child {
  padding-left: 0;
}
.page .entry-list-container .list-header .nav-list  {
  border-right: none;
}
.page .entry-list-container .list-header .nav-list li a {
  color: #909090;
  text-decoration: none;
}
.page .entry-list-container .list-header .nav-list li .active {
  color: #1e80ff;
}
.page .entry-list-container .list-header .nav-list li a:hover {
  color: #1e80ff;
}
.page .entry-list-container .list-header .nav-list .choose {
  display: block !important;
  border: 1px solid #ebebeb;
  outline: none;
  font-size: 12px;
  color: #909090;
  height: 20px;
  text-align: center;
}
</style>
