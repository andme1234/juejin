<template>
  <div class="timeline-container">
    <div class="timeline-content">
      <div class="timeline-entry-list">
        <!-- 文章列表容器 -->
        <div class="entry-list-container"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "articalComponent",
};
</script>

<style lang="scss" scoped>
.timeline-container {
  margin-top: 117px;
  .timeline-content {
    position: relative;
    margin-top: 0.33rem;
    .timeline-entry-list {
      margin-right: 21.667rem;
      border-radius: 2px;
      width: 700px;
      height: 10000px;
      background-color: blue;
    }
  }
}
</style>
