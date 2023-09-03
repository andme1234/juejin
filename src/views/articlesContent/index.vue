<template>
  <div class="container">
    <div class="subContainer">
      <div class="asideLeft">
        <SuspendedPanel></SuspendedPanel>
      </div>

      <div class="show-article-area">
        <VueMarkdown :source="title"></VueMarkdown>
        <div class="authorInformation">
          <a
            href="/user/2955079655898093"
            target="_blank"
            rel=""
            class="avatar-link"
            ><img
              loading="eager"
              src="https://p6-passport.byteacctimg.com/img/user-avatar/aed661aae79b90d27a304ddd0b8890d6~300x300.image"
              alt=""
              class="avatar"
          /></a>
          <div class="author-info-box">
            <div class="author-name">
              <a
                href="https://juejin.cn/user/2955079655898093"
                target="_blank"
                rel=""
                class="username"
                ><span class="name" style="max-width: 128px"> 大帅老猿 </span>
                <span data-v-b06a9b4e="" blank="true" class="rank"
                  ><img
                    data-v-3de16c56=""
                    src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-6.b69935b.png"
                    alt="lv-6"
                    title="创作等级"
                /></span>
              </a>
            </div>
            <div class="meta-box">
              <time
                datetime="2021-11-03T03:29:13.000Z"
                title="Wed Nov 03 2021 11:29:13 GMT+0800 (中国标准时间)"
                class="time"
              >
                2021年11月03日 11:29
              </time>
              <span class="views-count"> ·&nbsp;&nbsp;阅读 23252 </span>
            </div>
          </div>
          <VueMarkdown :source="imagess"></VueMarkdown>
        </div>
        <div class="markdown-body">
          <span v-for="(items, index) in value" :key="index">
            <VueMarkdown :source="items" v-highlight></VueMarkdown>
          </span>
        </div>
        <div class="split"></div>
        <Comment id="comment"></Comment>
        <div class="split"></div>
        <RelevantList id="relevantList"></RelevantList>
      </div>

      <div class="asideRight">
        <div class="author">
          <a href="https://juejin.cn/user/2955079655898093" class="user-item">
            <img
              src="https://p6-passport.byteacctimg.com/img/user-avatar/aed661aae79b90d27a304ddd0b8890d6~300x300.image"
              alt=""
              class="avater"
            />
            <div class="info-box">
              <a
                href="/user/2955079655898093"
                target="_blank"
                rel=""
                class="username"
                ><span class="name" style="max-width: 128px"> 大帅老猿 </span>
                <span blank="true" class="rank"
                  ><img
                    src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-6.b69935b.png"
                    alt="lv-6"
                    title="创作等级"
                /></span>
                <!---->
                <!---->
              </a>
              <div title="公众号 @ 大帅老猿" class="position">
                公众号 @ 大帅老猿
              </div>
            </div>
          </a>
          <div class="stat-item">
            <img
              src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3552fa95ef404b7585e9d3362d085e6b~tplv-k3u1fbpfcp-zoom-1.image"
              class="icon"
            /><span class="content">2021年度人气作者No.7</span>
          </div>
          <div class="stat-item">
            <img
              src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1a1e3b98007a411b97fcb7a654b27bbd~tplv-k3u1fbpfcp-zoom-1.image"
              class="icon"
            /><span class="content">2020年度人气作者No.13</span>
          </div>
          <div class="stat-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="26"
              viewBox="0 0 25 26"
              class="zan"
            >
              <g fill="none" fill-rule="evenodd" transform="translate(0 .57)">
                <ellipse
                  cx="12.5"
                  cy="12.57"
                  fill="#E1EFFF"
                  rx="12.5"
                  ry="12.57"
                ></ellipse>
                <path
                  fill="#7BB9FF"
                  d="M8.596 11.238V19H7.033C6.463 19 6 18.465 6 17.807v-5.282c0-.685.483-1.287 1.033-1.287h1.563zm4.275-4.156A1.284 1.284 0 0 1 14.156 6c.885.016 1.412.722 1.595 1.07.334.638.343 1.687.114 2.361-.207.61-.687 1.412-.687 1.412h3.596c.38 0 .733.178.969.488.239.317.318.728.21 1.102l-1.628 5.645a1.245 1.245 0 0 1-1.192.922h-7.068v-7.889c1.624-.336 2.623-2.866 2.806-4.029z"
                ></path>
              </g>
            </svg>
            <span class="content"
              >获得点赞<span class="count">&nbsp;18,973</span></span
            >
          </div>
          <div class="stat-item">
            <svg width="25" height="25" viewBox="0 0 25 25" class="icon">
              <g fill="none" fill-rule="evenodd">
                <circle cx="12.5" cy="12.5" r="12.5" fill="#E1EFFF"></circle>
                <path
                  fill="#7BB9FF"
                  d="M4 12.5S6.917 7 12.75 7s8.75 5.5 8.75 5.5-2.917 5.5-8.75 5.5S4 12.5 4 12.5zm8.75 2.292c1.208 0 2.188-1.026 2.188-2.292 0-1.266-.98-2.292-2.188-2.292-1.208 0-2.188 1.026-2.188 2.292 0 1.266.98 2.292 2.188 2.292z"
                ></path>
              </g>
            </svg>
            <span class="content"
              >文章被阅读<span class="count">&nbsp;847,687</span></span
            >
          </div>
        </div>
        <div class="app-link">
          <img
            src="../../assets/images/article/article.9d13ff7.jpg"
            alt=""
            @click="toDownload()"
          />
          <div class="text">
            <div class="title" @click="toDownload()">下载稀土掘金APP</div>
            <div class="desc" @click="toDownload()">
              一个帮助开发者成长的社区
            </div>
          </div>
        </div>
        <div class="img">
          <img src="../../assets/images/article/default.640d9a7.png" alt="" />
        </div>
        <div class="relative-article">
          <div class="titleTrue"><span>相关文章</span></div>
          <div class="listScroll">
            <RelativeArticle></RelativeArticle>
            <RelativeArticle></RelativeArticle>
            <RelativeArticle></RelativeArticle>
            <RelativeArticle></RelativeArticle>
            <RelativeArticle></RelativeArticle>
          </div>
        </div>
        <div :class="articleCatalog">
          <div class="titleTrue">
            <span>目录</span>
          </div>
          <div class="listScroll" id="listScroll">
            <ul>
              <li
                v-for="(item, index) in docMenu"
                :key="item.id"
                :class="`level_${item.level}`"
              >
                <a
                  :href="'#' + item.id"
                  :class="{ active: active === index }"
                  @click="handlerSroll($event, item.id, index)"
                  >{{ item.text }}</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="suspension-panel">
      <button class="to-top-btn btn" @click="toTop" v-if="ifShowTopButton">
        <svg
          data-v-574aa814=""
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class=""
        >
          <path
            data-v-574aa814=""
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.75 1C2.33579 1 2 1.33579 2 1.75C2 2.16421 2.33579 2.5 2.75 2.5H13.25C13.6642 2.5 14 2.16421 14 1.75C14 1.33579 13.6642 1 13.25 1H2.75ZM7.24407 3.87287C7.64284 3.41241 8.35716 3.41241 8.75593 3.87287L13.0622 8.84535C13.6231 9.49299 13.163 10.5 12.3063 10.5H10V14C10 14.5523 9.55228 15 9 15H7C6.44772 15 6 14.5523 6 14V10.5H3.69371C2.83696 10.5 2.37691 9.49299 2.93778 8.84535L7.24407 3.87287Z"
            fill="#8A919F"
          ></path>
        </svg>
      </button>
      <button class="advice-btn btn" @click="toAdvice">
        <svg
          data-v-574aa814=""
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="icon-feedback"
        >
          <path
            data-v-574aa814=""
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.8252 4.002C1.8252 2.80032 2.79935 1.82617 4.00102 1.82617H12.001C13.2027 1.82617 14.1768 2.80032 14.1768 4.002V9.71628C14.1768 10.918 13.2027 11.8921 12.001 11.8921H9.43308L6.92709 14.1281C6.4455 14.5578 5.68234 14.216 5.68234 13.5706V11.8921H4.00102C2.79934 11.8921 1.8252 10.918 1.8252 9.71628V4.002ZM11.2414 7.86753C11.3826 7.65526 11.3249 7.36878 11.1126 7.22764C10.9004 7.08651 10.6139 7.14417 10.4728 7.35643C9.94042 8.15705 9.03153 8.68309 7.99997 8.68309C6.96841 8.68309 6.05952 8.15705 5.52719 7.35643C5.38605 7.14417 5.09957 7.08651 4.88731 7.22764C4.67504 7.36878 4.61738 7.65526 4.75852 7.86753C5.45467 8.91452 6.64645 9.60617 7.99997 9.60617C9.35349 9.60617 10.5453 8.91452 11.2414 7.86753Z"
            fill="#1E80FF"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";
import SuspendedPanel from "../../components/suspendedPanel/suspendedPanel.vue";
import RelativeArticle from "../relativeArticle/relativeArticle";
import Comment from "../../components/Comment/src/index.vue";
import RelevantList from "../RelevantRecom/RelevantList.vue";
export default {
  data() {
    return {
      // title,value的值是要解析的markdown数据
      title: "",
      imagess: "",
      // 文章内容
      value: [],
      //分离出来所有带#的Markdown格式标题
      // titleList: [],
      docMenu: [],
      active: 0,
      ifShowTopButton: true,
      articleCatalog: "article-catalog",
    };
  },
  components: {
    VueMarkdown,
    SuspendedPanel,
    RelativeArticle,
    Comment,
    RelevantList,
  },
  methods: {
    toTop() {
      document.documentElement.scrollTop = 0;
    },
    async getArticlesInfo() {
      const { data: res } = await this.$http.get("getDetails");
      this.title = res.data.title;
      this.value = res.data.res.split(",");
      this.imagess = res.data.images;
      this.initArt();
    },
    toAdvice() {
      window.open("https://juejin.cn/pin/club/6824710202692993037?sort=newest");
    },
    initArt() {
      let markMenu = [];
      let acticleTitle = null;
      setTimeout(() => {
        const articleDom = document.querySelector(".markdown-body");
        const articleDomChild = articleDom.children;
        for (let i of articleDomChild) {
          for (let j of i.children) {
            acticleTitle = j;
            if (acticleTitle) {
              for (let ele of acticleTitle.children) {
                const i = ["H1", "H2", "H3", "H4", "H5", "H6"].indexOf(
                  ele.tagName
                );
                if (i > -1 && ele.textContent) {
                  ele.setAttribute("id", "markMenu_" + markMenu.length);
                  ele.setAttribute("name", "markMenu_" + markMenu.length);
                  markMenu.push({
                    level: i,
                    text: ele.textContent,
                    id: "markMenu_" + markMenu.length,
                    name: "markMenu_" + markMenu.length,
                  });
                }
              }
            }
          }
        }
        this.docMenu = markMenu;
      });
    },
    handlerSroll(e, id) {
      //由于存在头部的关系,会挡住标题,所以还需计算滚动头部的高度
      const element = document.querySelector(`.navbar`);
      const targetDom = document.querySelector(`#${id}`);
      // console.log(id);
      //测试到火狐浏览器存在锚点定位的问题,使用scrollIntoView的方法
      if (navigator.userAgent.indexOf("Firefox") > 0) {
        e.preventDefault();
        targetDom.scrollIntoView({
          //滚动到指定节点
          block: "start",
          behavior: "auto",
        });
        setTimeout(() => {
          window.scrollBy(0, -element.offsetHeight);
        }, 100);
        return;
      }
      window.scrollBy(0, element.offsetHeight);
    },
    onScroll() {
      const element = document.querySelector(`.navbar`);
      // 获取所有锚点元素
      const titleNavList = document.querySelectorAll(
        ".markdown-body span h1,.markdown-body span h2,.markdown-body span h3,.markdown-body span h4"
      );
      // 计算所有锚点元素的 offsetTop + 头部的高度
      const offsetTopList = [];
      titleNavList.forEach((item) => {
        offsetTopList.push(item.offsetTop - element.offsetHeight);
      });
      // 获取当前文档流的 scrollTop
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      // 定义当前所在的目录下标
      let navIndex = 0;
      // 比较当前文章滚动的距离scrollTop与各锚点标题的offsetTop ,当scrollTop超过当前元素的scrollTop,则定位到当前标题
      for (let n = 0; n < offsetTopList.length; n++) {
        if (scrollTop >= offsetTopList[n]) {
          navIndex = n;
        }
      }
      //当前高亮的目录索引,默认为0
      this.active = navIndex;
      // console.log(this.active);
      if (window.pageYOffset >= 0) {
        this.articleCatalog = "article-catalog fixed";
      }
    },
    toDownload() {
      // this.$router.push("app")
      window.open("https://juejin.cn/app");
    },
  },
  // 无需操作DOM, 在created阶段直接调取接口
  created() {
    this.getArticlesInfo();
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  destroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>

<style lang="scss" scoped>
.relative-article {
  .listScroll {
    width: 98%;
    margin-left: 1%;
    margin-top: 16px;
    margin-bottom: 16px;
    cursor: pointer;
  }
}
a {
  text-decoration: none;
  cursor: pointer;
  color: #909090;
}
.container {
  width: 1440px;
  margin: 0 auto;
  background-color: #f4f5f5;
  padding-top: 6px;
  .subContainer {
    margin-left: 46px;
    .show-article-area {
      width: 650px;
      margin-top: 15px;
      background-color: #fff;
      margin-left: 150px;
      padding: 0.875rem 1.5rem;
      .authorInformation {
        height: 3.125rem;
        margin-bottom: 1.125rem;
        display: flex;
        align-items: center;
        .author-info-box {
          min-width: 0;
          flex-grow: 1;
          flex: 1;
          min-height: 43px;
          .meta-box {
            font-size: 0.867rem;
            color: #8a919f;
            margin-top: 2px;
            line-height: 22px;
          }
          .author-name {
            height: 2rem;
            .username {
              width: 100%;
              font-weight: 500;
              color: #515767;
              line-height: 2rem;
              display: flex;
              align-items: center;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              .name {
                display: inline-block;
                vertical-align: top;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
              .rank {
                display: inline-flex;
                align-items: center;
                margin-left: 0.33rem;
                vertical-align: middle;
                img {
                  width: 35px;
                  height: 16px;
                }
              }
            }
          }
        }
        .avatar-link {
          .avatar {
            flex: 0 0 auto;
            margin-right: 1rem;
            width: 2.533rem;
            height: 2.533rem;
            border-radius: 50%;
            position: relative;
            -o-object-fit: cover;
            object-fit: cover;
            background-position: 50%;
            background-repeat: no-repeat;
            display: inline-block;
            background-size: cover;
            background-color: #eee;
          }
        }
      }
      .split {
        width: 814px;
        height: 20px;
        background-color: #f4f5f5;
        margin-left: -24px;
      }
    }
  }
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
}
.subContainer {
  display: flex;
}
.asideRight {
  width: 300px;
  margin-top: 15px;
  margin-left: 15px;
  //padding: 20px;
  background-color: #f4f5f5;
  .author {
    height: 220.9792px;
    background-color: #fff;
    padding: 1.367rem;
    position: relative;
    .user-item {
      border-bottom: 1px solid #e4e6eb;
      padding-bottom: 1rem;
      display: flex;
      align-items: center;

      .avater {
        flex: 0 0 auto;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
      }
      .info-box {
        flex: 1 1 auto;
        min-width: 0;
        margin-left: 1.333rem;
        .username {
          display: flex;
          align-items: center;
          font-size: 1rem;
          font-weight: 500;
          line-height: 2rem;
          color: #252933;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;

          .rank {
            margin-left: 0.33rem;
            vertical-align: middle;
            img {
              width: 35px;
              height: 16px;
            }
          }
        }
        .position {
          margin-top: 4px;
          font-size: 0.88rem;
          color: #515767;
          font-weight: 400;
          line-height: 22px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
    .stat-item {
      margin-top: 0.816rem;
      display: flex;
      align-items: center;
      .zan {
        margin-right: 1rem;
      }
      .icon {
        margin-right: 1rem;
        flex: 0 0 auto;
        width: 1.48rem;
      }
      .content {
        font-size: 0.9rem;
        color: #252933;
        font-weight: 400;
      }
    }
  }
  .app-link {
    background-color: #fff;
    margin-top: 15px;
    height: 90px;
  }
  .img img {
    margin-top: 15px;
    width: 300px;
    height: 248.7104px;
  }
  .relative-article {
    width: 300px;
    height: 480px;
    margin-top: 15px;
    background-color: #fff;
  }
  .article-catalog {
    position: sticky;
    top: 20px;
    width: 300px;
    height: 525px;
    margin-top: 15px;
    background-color: #ffffff;
    overflow: hidden;
    .titleTrue {
      width: 90%;
      height: 56px;
      margin-left: 5%;
      // margin-bottom: 8px;
      // background-color: green;
      border-bottom: 1px solid #e4e6eb;
      span {
        font-size: 15px;
        color: #1d2129;
        line-height: 56px;
      }
    }
    .listScroll {
      overflow-y: scroll;
      height: 468px;
      width: 98%;
      margin-left: 1%;
      ul {
        list-style: none;
        font-size: 14px;
        @for $i from 1 to 6 {
          .level_#{$i} {
            padding-left: $i * 10px;
          }
        }
        li {
          position: relative;
          height: 39px;
          width: 245px;
          line-height: 39px;
          // margin-top: -16px;
          // margin-bottom: 22px;
          border-radius: 3px;
          left: -27px;
          // background-color: green;
          cursor: pointer;
          &:hover {
            background-color: #f7f8fa;
          }
          a {
            display: inline-block;
            width: 100%;
            height: 100%;
            text-decoration: none;
            color: #000000;
            &.active {
              color: #1672fa !important;
            }
          }
        }
      }
      &::-webkit-scrollbar {
        width: 6px;
        margin-left: 10px;
      }
      /* 滚动条滑块 */
      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: #e4e6eb;
        -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.5);
        // box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
      }
    }
  }
}
.app-link {
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  img {
    width: 50px;
    height: 50px;
  }
  .text {
    .desc {
      line-height: 22px;
      margin-top: 10px;
      color: #8a919f;
    }
  }
}
.titleTrue {
  width: 90%;
  height: 56px;
  margin-left: 5%;
  margin-bottom: 8px;
  // background-color: green;
  border-bottom: 1px solid #e4e6eb;
  span {
    font-size: 15px;
    color: #1d2129;
    line-height: 56px;
  }
}
.fixed {
  position: fixed;
}
</style>
