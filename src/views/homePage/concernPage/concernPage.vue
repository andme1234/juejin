<template>
  <div class="follow">
    <div class="content">
      <img src="@/assets/HomeAndSearch/article-line.svg" alt="" />
      <div class="font">暂无关注人发布的文章</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "concernPage",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.follow {
  background-color: #f4f5f5;
}
.follow .content {
  width: 700px;
  height: 157px;
  text-align: center;
  background-color: #fff;
}
.follow .content img {
  width: 56px;
  height: 60px;
  margin-top: 34px;
  margin-bottom: 17px;
}
.follow .content .font {
  color: #b2bac2;
}
</style>
