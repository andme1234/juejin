<template>
  <div class="view-container">
    <main class="container">
      <!-- ---------左侧导航--------- -->
      <div class="viewNav" :style="{ top: navtop + 'rem' }">
        <div class="navContent">
          <div class="navList">
            <a
              href="javascript:;"
              :class="'navItem' + (active == index ? ' activeClass' : '')"
              v-for="(item, index) in itemList"
              :key="index"
              @click="changePage(index)"
              @mouseenter="tagEnter(index)"
              @mouseleave="tagLeave(index)"
              >{{ item }}
            </a>
          </div>
      </div>
      </div>

      <!-- 内容区域 -->
      <div class="timeline-container">
        <div class="timeline-content">
          <!-- 路由区域 -->
          <!-- <router-view class="timeline-entry-list"></router-view> -->
          <router-view></router-view>
          <!-- 右侧区域 -->
          <aside class="index-aside">
            <!-- 签到区域 -->
            <MyComponentSignin></MyComponentSignin>
            <!-- 广告区域 -->
            <MyComponentAdvertisement
              :class="bannerShow == true ? 'handlScrool' : ''"
            ></MyComponentAdvertisement>
            <!-- 作者榜 -->
            <MyComponentAuthor :userList="userList"></MyComponentAuthor>
            <!-- 链接部分 -->
            <MyComponentLink :linkList="linkList"></MyComponentLink>
            <!-- 底部 -->
            <MyComponentFooter
              :footerList="footerList"
              :detailsList="detailsList"
            ></MyComponentFooter>
          </aside>
        </div>
      </div>


    </main>
  </div>
</template>

<script>
import MyComponentSignin from "./components/signinComponent.vue";
import MyComponentAdvertisement from "./components/advertisementComponent.vue";
import MyComponentAuthor from "./components/authorComponent.vue";
import MyComponentLink from "./components/linkComponent.vue";
import MyComponentFooter from "./components/footerComponent.vue";
import { TagMap } from "../../config/tagmap";
export default {
  name: "homePage",
  data() {
    return {
      itemList: [
        "综合",
        "关注",
        "后端",
        "前端",
        "Android",
        "iOS",
        "人工智能",
        "开发工具",
        "代码人生",
        "阅读",
        "标签管理",
      ],
      menuRouter: [
        "integratedPage",
        "concernPage",
        "backEndPage",
        "frontEndPage",
        "androidPage",
        "iosPage",
        "artificialInteligencePage",
        "developmentToolsPage",
        "lifeInCodePage",
        "readingPage",
        "labelManagementPage",
      ],
      userList: [
        {
          avaterSrc:
            "	https://p3-passport.byteacctimg.com/img/user-avatar/06d48f05b22d366e72d9e10134610cd7~140x140.awebp",
          userName: "京东云开发者",
          lableName: "技术运营@京东科技信...",
        },
        {
          avaterSrc:
            "	https://p26-passport.byteacctimg.com/img/user-avatar/090d6608420cd5864d7564939c8f72ab~140x140.awebp",
          userName: "ssh_晨曦时梦见兮",
          lableName: " 前端从进阶到入院 @ 字...",
        },
        {
          avaterSrc:
            "	https://p3-passport.byteacctimg.com/img/user-avatar/527994262adc861f9291cad601e7ef8b~140x140.awebp",
          userName: "恋猫de小郭",
          lableName: "Flutter & Dart GDE @ ...",
        },
        {
          avaterSrc:
            "	https://p9-passport.byteacctimg.com/img/user-avatar/87b610c1c4dd84e63fe9dbfca29c54f3~140x140.awebp",
          userName: "CVHub",
          lableName: "算法研究员 @ 北京字节...",
        },
      ],
      linkList: [
        {
          imgSrc:
            "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/6c61ae65d1c41ae8221a670fa32d05aa.svg",
          linkName: "稀土掘金漫游指南",
        },
        {
          imgSrc:
            "	https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin-extension-icon.4b79fb4.png",
          linkName: "安装掘金浏览器插件",
        },
        {
          imgSrc:
            "	https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin-miner.b78347c.png",
          linkName: "前往掘金翻译计划",
        },
        {
          imgSrc:
            " https://ts4.cn.mm.bing.net/th?id=ODLS.20057af3-e13b-494b-9681-8301ef3eb3a4&w=32&h=32&qlt=91&pcl=fffffa&o=6&pid=1.2 ",
          linkName: "官方微博",
        },
        {
          imgSrc:
            " https://ts4.cn.mm.bing.net/th?id=ODLS.1d9cd1d2-b992-4135-a3e5-29220458a8c0&w=32&h=32&qlt=91&pcl=fffffa&o=6&pid=1.2 ",
          linkName: "微信公众号",
        },
      ],
      footerList: [
        {
          footerName: "用户协议",
        },
        {
          footerName: "营业执照",
        },
        {
          footerName: "隐私政策",
        },
        {
          footerName: "关于我们",
        },
        {
          footerName: "站点地图",
        },
        {
          footerName: "使用指南",
        },
        {
          footerName: "友情链接",
        },
        {
          footerName: "更多文章",
        },
      ],
      detailsList: [
        "座机电话：010-83434395",
      ],

      active: 0,
      navtop: 3.8,
      tagMap: TagMap,
      activeColor: "#007fff",
      isShow: false,
      boxShow: true,
      iconShow: false,
      secondClose: false,
      secondInco: false,
      isShowWeChat: false,
      bannerShow: false,
      ifShowTopButton: true,
    };
  },
  components: {
    MyComponentSignin,
    MyComponentAdvertisement,
    MyComponentAuthor,
    MyComponentLink,
    MyComponentFooter,
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    toTop() {
      document.documentElement.scrollTop = 0;
    },
    changePage(index) {
      this.active = index;
      this.$router.push("/" + this.menuRouter[index]);
    },
    mouseIn() {
      this.isShow = true;
    },
    mouseOut() {
      this.isShow = false;
    },
    closeBtn() {
      this.boxShow = false;
    },
    iconEnter() {
      this.iconShow = true;
    },
    iconLeave() {
      this.iconShow = false;
    },
    secondIn() {
      this.secondClose = true;
    },
    secondOut() {
      this.secondClose = false;
    },
    secondEnter() {
      this.secondInco = true;
    },
    secondLeave() {
      this.secondInco = false;
    },
    enterWeChat() {
      this.isShowWeChat = true;
    },
    leaveWeChat() {
      this.isShowWeChat = false;
    },
    tagEnter(index) {
      if (index > 1 && index < 10) {
        let newItem = this.tagMap[index - 2];
        newItem.show = !this.tagMap[index - 2].show;
        this.$set(this.tagMap, index - 2, newItem);
      }
    },
    tagLeave(index) {
      if (index > 1 && index < 10) {
        let newItem = this.tagMap[index - 2];
        newItem.show = !this.tagMap[index - 2].show;
        this.$set(this.tagMap, index - 2, newItem);
      }
    },
    tagBoxEnter(index) {
      let newObj = this.tagMap[index];
      newObj.show = !this.tagMap[index].show;
      this.$set(this.tagMap, index, newObj);
    },
    tagBoxLeave(index) {
      let newObj = this.tagMap[index];
      newObj.show = !this.tagMap[index].show;
      this.$set(this.tagMap, index, newObj);
    },
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 100) {
        this.navtop = 0;
      } else {
        this.navtop = 3.8;
      }
      if (scrollTop > 1100) {
        this.bannerShow = true;
      } else {
        this.bannerShow = false;
        // console.log(scrollTop);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.suspension-panel {
  position: fixed;
  right: 25px;
  bottom: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .btn {
    margin: 1rem 0 0;
    padding: 0;
    width: 3.33rem;
    height: 3.33rem;
    line-height: 1;
    color: #909090;
    background-color: #fff;
    border: 1px solid #f1f1f1;
    border-radius: 50%;
    box-shadow: 0 2px 8px rgb(50 50 50 / 4%);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
}
a {
  text-decoration: none;
  cursor: pointer;
  color: #909090;
}
button {
  cursor: pointer;
}
ul {
  padding: 0;
  margin: 0;
}
li {
  display: list-item;
  list-style: none;
}
.view-container {
  background-color: #f4f5f5;
  min-height: 1224px;
}
.container {
  display: flex;
  flex-direction: row;
  position: relative;
  margin: 0 auto;
  margin-top: 1.66rem;
  width: 100%;
  max-width: 1200px;

  .viewNav {
    background-color: #ffffff;
    position: sticky;
    left: 0;
    top: 80px;
    width: 180px;
    height: fit-content;
    border-radius: 4px;
    overflow-x: hidden;
    z-index: 100;
    .navContent{
      display: flex;
      flex-direction: column;
      width: 164px;
      padding: 8px;
      box-sizing: border-box;
      height: fit-content;
      .navList {
        position: relative;
        max-width: 960px;
        height: fit-content;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        line-height: 1;
        overflow: auto;
        .navItem {
          height: 45.68px;
          align-items: center;
          display: flex;
          flex-shrink: 0;
          font-size: 16px;
          color: #71777c;
          padding: 0 0.75rem;
          &:hover {
            color: #007fff;
          }
        }
      }
    }
  }
  .activeClass {
    color: #007fff !important;
  }

  .timeline-container {
    width: 100%;
    position: relative;
    margin-left: 20px;
    .timeline-content {
      //主页下拉加载布局无效
      // .timeline-entry-list {
      //   margin-right: 21.667rem;
      //   border-radius: 2px;
      //   width: 700px;
      //   // height: 10000px;
      //   background-color: #fff;
      // }
      .index-aside {
        width: 15rem;
        height: 300px;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
      }
    }
  }
}
.handlScrool {
  position: fixed;
  top: 8rem;
}
</style>
