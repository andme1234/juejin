<template>
  <div class="comment-container">
    <Comment></Comment>
    <Hot></Hot>
  </div>
</template>

<script>
import Comment from "./comment.vue";
import Hot from "./hot.vue";
export default {
  components: {
    Comment,
    Hot,
  },
};
</script>

<style scoped lang="scss">
.comment-container {
  margin-top: 1.67rem;
  border-radius: 4px;
  background-color: #fff;
  // background-color: pink;
  padding-left: 42px;
  padding-right: 2.67rem;
  box-sizing: border-box;
  // max-width: 1140px;
  padding-bottom: 2rem;
  width: 698px;
  margin-left: -24px;
}
</style>
