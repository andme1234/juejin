<template>
  <div class="sidebar-block">
    <ul class="link-list">
      <li class="item" v-for="(item, index) in linkList" :key="index">
        <a class="link"  target="_blank"
          ><img :src="item.imgSrc" class="icon" />
          <span class="title">{{ item.linkName }}</span></a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "linkComponent",
  props: ["linkList"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
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
.sidebar-block {
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  border-radius: 2px;
  margin-bottom: 1rem;
  font-size: 1.16rem;
  line-height: 1;
  color: #333;
  .link-list {
    padding: 0;
    background-color: #fff;

    .item {
      .link {
        display: flex;
        align-items: center;
        padding: 0.75rem;
        height: 100%;
        &:hover {
          background-color: #fafafa;
        }
        .icon {
          width: 2.25rem;
          margin-right: 0.8rem;
        }
        .title {
          position: relative;
          font-size: 0.873rem;
          line-height: 1;
          color: #333;
        }
      }
    }
  }
}
</style>
