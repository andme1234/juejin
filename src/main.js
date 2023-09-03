import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import "@/assets/style/index.css";
import "github-markdown-css/github-markdown.css";
import hljs from "highlight.js";
import "normalize.css/normalize.css";

// Vue.use(axios);
Vue.config.productionTip = false;

//配置请求的根路径
Vue.prototype.$http = axios;
// axios.defaults.baseURL = "http://127.0.0.1:4523/mock/1413582/";
axios.defaults.baseURL = "https://mock.apifox.cn/m1/1413582-0-default/";

Vue.directive("highlight", function (el) {
  const blocks = el.querySelectorAll("pre code");
  blocks.forEach((block) => {
    hljs.highlightBlock(block);
  });
});
// 也可以把这自定义指令封装 通过Vue.use()，来注入

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
