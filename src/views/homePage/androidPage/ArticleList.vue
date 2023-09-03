<template>
  <div>
    <!-- 循渲染文章数据 -->
    <SingleArticle
      v-for="item in data"
      :key="item.id"
      :content="item"
      @connect="connect"
    ></SingleArticle>
  </div>
</template>

<script>
import SingleArticle from "./SingleArticle.vue"; //导入单个文章组件
import axios from "axios";

export default {
  name: "ArticleList",
  data() {
    return {
      data: [], //存放接口数据
      labels: [], //存放屏蔽标签数组
    };
  },
  methods: {
    // 获取文章数据
    getMessage() {
      axios.get("getList").then(
        (response) => {
          // console.log("请求成功ddd", response.data);
          this.data = this.data.concat(response.data.data);
        },
        (error) => {
          console.log("请求失败", error.message);
        }
      );
    },
    //判断屏蔽标签数组与每条文章的标签是否存在交集
    intersection(arr1, arr2) {
      for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
          if (arr1[i] === arr2[j]) {
            return true; //存在交集
          }
        }
      }
      return false; //不存在交集
    },
    // 更新文章数据
    connect(screenLabels) {
      this.labels = [...this.labels, ...screenLabels].filter(function (
        item,
        index,
        arr
      ) {
        return arr.indexOf(item, 0) === index;
      }); //获得最新屏蔽标签数组
      console.log(this.labels); //获得需要屏蔽的标签数组
      let newData = new Array(); //存放不含屏蔽标签的文章数据项
      for (var i = 0, j = 0; i < this.data.length; i++) {
        if (!this.intersection(this.data[i].label, this.labels)) {
          newData[j++] = this.data[i];
        }
      }
      this.data = newData; //赋值
      console.log(this.data); //获得需要渲染的新数组，即不含需要屏蔽标签的文章数据
    },
    scroll() {
      // 整个页面的高度
      const scrollHeight = document.body.scrollHeight;
      // 当前可视区的顶部到页面顶部的高度，||是做兼容处理的
      const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      // 当前可视区的高度
      const clientHeight = document.documentElement.clientHeight;
      // 可视区底部到页面底部的高度，即滚动条与底部的距离
      const instance = scrollHeight - scrollTop - clientHeight;
      // 当滚动条与底部的距离小于100时就触发加载数据
      if (instance < 100) {
        this.getMessage();
      }
    },
  },
  created() {
    this.getMessage();
  },
  mounted() {
    window.addEventListener("scroll", this.scroll, false);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scroll, false);
  },
  components: {
    SingleArticle,
  },
};
</script>

<style scoped></style>
