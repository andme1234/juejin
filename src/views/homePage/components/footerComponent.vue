<template>
  <div class="index-aside-footer">
    <ul class="more-list">
      <li class="item" v-for="(item, index) in footerList" :key="index">
        <a  target="_blank" rel="nofollow">{{
          item.footerName
        }}</a>
      </li>
    </ul>
    <ul class="more-list">
      <li class="item">
        <a
          target="_blank"
          rel="nofollow"
          >
          京ICP备18012699号-3
        </a>
      </li>
      <li class="item">
        <span>
          举报邮箱：
          <a>feedback@xitu.io</a></span
        >
      </li>

      <li class="item" v-for="(item, index) in detailsList" :key="index">
        <span>{{ item }}</span>
      </li>
    </ul>
    <ul class="more-list">
      <li class="itemXiTu"><a>©2023 稀土掘金</a></li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "footerCompoent",
  props: ["footerList", "detailsList"],

  data() {
    return {
      isShowWeChat: false,
    };
  },
  methods: {
    enterWeChat() {
      this.isShowWeChat = true;
    },
    leaveWeChat() {
      this.isShowWeChat = false;
    },
  },
};
</script>

<style scoped lang="scss">
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
.index-aside-footer {
  background-color: transparent;
  box-shadow: none;

    .item {
      float: left;
      &:after {
        content: "";
        margin-right: 8px;
      }


    }
  }
  .more-list {
    font-size: 0.75rem;
    line-height: 1.6;
    color: #9aa3ab;
    .itemXiTu {
      &:after {
        display: table;
        content: "";
        clear: both;
      }
    }
    .item {
      float: left;

      a {
        &:hover {
          color: #007fff;
        }
      }
      &:after {
        content: "";
        margin-right: 8px;
      }
    }
  }

</style>
