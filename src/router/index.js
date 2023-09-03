import Vue from "vue";
import VueRouter from "vue-router";
const homeNavbar = () => import("@/views/homeNavbar/homeNavbar.vue");
const homePage = () => import("@/views/homePage/homePage.vue");
const boilingPoint = () => import("@/views/boilingPoint/boilingPoint.vue");
const educationalClass = () =>import("@/views/educationalClass/educationalClass.vue");
const competitionAttend = () =>import("@/views/competitionAttend/competitionAttend.vue");
const liveBroadcast = () => import("@/views/liveBroadcast/liveBroadcast.vue");
const activityArea = () => import("@/views/activityArea/activityArea.vue");
const articleContent = () => import("@/views/articlesContent/index.vue");

//首页小路由导航
const androidPage = () =>
  import("@/views/homePage/androidPage/HomeArticle.vue");
const AndroidList = () =>
  import("@/views/homePage/androidPage/ArticleList.vue");
const artificialInteligencePage = () =>
  import("@/views/homePage/artificialInteligencePage/HomeArticle.vue");
const ArtificialList = () =>
  import("@/views/homePage/artificialInteligencePage/ArticleList.vue");
const backEndPage = () =>
  import("@/views/homePage/backEndPage/HomeArticle.vue");
const BackList = () => import("@/views/homePage/backEndPage/ArticleList.vue");
const concernPage = () =>
  import("@/views/homePage/concernPage/concernPage.vue");
const developmentToolsPage = () =>
  import("@/views/homePage/developmentToolsPage/HomeArticle.vue");
const DevelopmentList = () =>
  import("@/views/homePage/developmentToolsPage/ArticleList.vue");
const frontEndPage = () =>
  import("@/views/homePage/frontEndPage/HomeArticle.vue");
const FrontList = () => import("@/views/homePage/frontEndPage/ArticleList.vue");
// const integratedPage = () =>
//   import("@/views/homePage/integratedPage/integratedPage.vue");
const iosPage = () => import("@/views/homePage/iosPage/HomeArticle.vue");
const IosList = () => import("@/views/homePage/iosPage/ArticleList.vue");
const labelManagementPage = () =>
  import("@/views/homePage/labelManagementPage/labelManagementPage.vue");
const lifeInCodePage = () =>
  import("@/views/homePage/lifeInCodePage/HomeArticle.vue");
const LifeList = () =>
  import("@/views/homePage/lifeInCodePage/ArticleList.vue");
const readingPage = () =>
  import("@/views/homePage/readingPage/HomeArticle.vue");
const ReadingList = () =>
  import("@/views/homePage/lifeInCodePage/ArticleList.vue");
const ArticleList = () => import("@/views/HomeArticle/ArticleList.vue");
const HomeArticle = () => import("@/views/HomeArticle/HomeArticle.vue");
const ReportArticle = () => import("@/views/ReportArticle/ReportArticle.vue");
// const RelevantList = () => import("@/views/RelevantRecom/RelevantList.vue");
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/homeNavbar",
  },
  {
    path: "/homeNavbar",
    redirect: "/homePage",
    component: homeNavbar,
    children: [
      {
        path: "/homePage",
        component: homePage,
        redirect: "/integratedPage/recommend",
        meta: {
          title: "稀土掘金",
        },
        children: [
          {
            path: "/integratedPage",
            component: HomeArticle,
            redirect: "/integratedPage/recommend",
            children: [
              {
                path: "recommend",
                component: ArticleList,
                meta: {
                  title: "推荐-文章-掘金",
                },
              },
              {
                path: "newest",
                component: ArticleList,
              },
              {
                path: "hots",
                component: ArticleList,
              },
            ],
          },
          {
            path: "/concernPage",
            component: concernPage,
            meta: {
              title: "关注-文章-掘金",
            },
          },
          {
            path: "/backEndPage",
            component: backEndPage,
            redirect: "/backEndPage/recommend",
            meta: {
              title: "后端-掘金",
            },
            children: [
              {
                path: "recommend",
                component: BackList,
              },
              {
                path: "newest",
                component: BackList,
              },
              {
                path: "hots",
                component: BackList,
              },
            ],
          },
          {
            path: "/frontEndPage",
            component: frontEndPage,
            redirect: "/frontEndPage/recommend",
            meta: {
              title: "前端-掘金",
            },
            children: [
              {
                path: "recommend",
                component: FrontList,
              },
              {
                path: "newest",
                component: FrontList,
              },
              {
                path: "hots",
                component: FrontList,
              },
            ],
          },
          {
            path: "/androidPage",
            component: androidPage,
            redirect: "/androidPage/recommend",
            meta: {
              title: "Android-掘金",
            },
            children: [
              {
                path: "recommend",
                component: AndroidList,
              },
              {
                path: "newest",
                component: AndroidList,
              },
              {
                path: "hots",
                component: AndroidList,
              },
            ],
          },
          {
            path: "/iosPage",
            component: iosPage,
            redirect: "/iosPage/recommend",
            meta: {
              title: "iOS-掘金",
            },
            children: [
              {
                path: "recommend",
                component: IosList,
              },
              {
                path: "newest",
                component: IosList,
              },
              {
                path: "hots",
                component: IosList,
              },
            ],
          },
          {
            path: "/artificialInteligencePage",
            component: artificialInteligencePage,
            redirect: "/artificialInteligencePage/recommend",
            meta: {
              title: "人工智能-掘金",
            },
            children: [
              {
                path: "recommend",
                component: ArtificialList,
              },
              {
                path: "newest",
                component: ArtificialList,
              },
              {
                path: "hots",
                component: ArtificialList,
              },
            ],
          },
          {
            path: "/developmentToolsPage",
            component: developmentToolsPage,
            redirect: "/developmentToolsPage/recommend",
            meta: {
              title: "开发工具-掘金",
            },
            children: [
              {
                path: "recommend",
                component: DevelopmentList,
              },
              {
                path: "newest",
                component: DevelopmentList,
              },
              {
                path: "hots",
                component: DevelopmentList,
              },
            ],
          },
          {
            path: "/lifeInCodePage",
            component: lifeInCodePage,
            redirect: "/lifeInCodePage/recommend",
            meta: {
              title: "代码人生-掘金",
            },
            children: [
              {
                path: "recommend",
                component: LifeList,
              },
              {
                path: "newest",
                component: LifeList,
              },
              {
                path: "hots",
                component: LifeList,
              },
            ],
          },
          {
            path: "/readingPage",
            component: readingPage,
            redirect: "/readingPage/recommend",
            meta: {
              title: "阅读-掘金",
            },
            children: [
              {
                path: "recommend",
                component: ReadingList,
              },
              {
                path: "newest",
                component: ReadingList,
              },
              {
                path: "hots",
                component: ReadingList,
              },
            ],
          },
          {
            path: "/labelManagementPage",
            component: labelManagementPage,
          },
        ],
      },
      {
        path: "/boilingPoint",
        component: boilingPoint,
        meta: {
          title: "沸点-掘金",
        },
      },
      {
        path: "/educationalClass",
        component: educationalClass,
        meta: {
          title: "掘金课程",
        },
      },
      {
        path: "/liveBroadcast",
        component: liveBroadcast,
        meta: {
          title: "直播-掘金",
        },
      },
      {
        path: "/activityArea",
        component: activityArea,
        meta: {
          title: "开发者活动",
        },
      },
      {
        path: "/competitionAttend",
        component: competitionAttend,
        meta: {
          title: "竞赛",
        },
      },
      {
        path: "/report", //举报页
        name: "report",
        component: ReportArticle,
      },
      {
        path: "/post/:id",
        component: articleContent,
        meta: {
          title: "Git基本使用-掘金",
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  //路由跳转滚动问题
  //scrollBehavior 方法接收 to 和 from 路由对象。第三个参数 savedPosition 当且仅当 popstate 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用。
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  // window.scrollTo(0, 0);
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

//解决 Vue 重复点击相同路由
const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch((err) => err);
};
export default router;
