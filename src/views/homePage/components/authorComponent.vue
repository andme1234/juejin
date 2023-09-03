<template>
  <div class="sidebar-block">
    <div class="recommend-author-block">
      <header class="user-block-header">作者榜</header>
      <div class="user-list">
        <div class="item" v-for="(item, index) in userList" :key="index">
          <a :href="item.aHref" target="_blank" class="link"
            ><img :src="item.avaterSrc" alt="" class="avatar" />
            <div class="user-info">
              <a :href="item.aHerf" target="_blank" class="username"
                ><span class="name" style="max-width: 128px">
                  {{ item.userName }}
                </span>
              </a>
              <div class="position">{{ item.lableName }}</div>
            </div></a
          >
        </div>

        <div class="more">
          <span>查看更多</span>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "authorComponent",
  props: ["userList"],
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
  margin-bottom: 1rem;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  border-radius: 2px;
  margin-bottom: 1rem;
  font-size: 1.16rem;
  line-height: 1;
  color: #333;
  .recommend-author-block {
    background-color: #fff;
    .user-block-header {
      padding: 1rem 1.3rem;
      border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.1);
      font-size: 0.85rem;
    }
    .user-list {

      .more {
          color: #007fff;
          padding: 1rem 0;
          text-align: center;
          border-top: 1px solid hsla(0, 0%, 59.2%, 0.1);
          font-size: 0.88rem;

        }
      .item {

        .link {
          padding: 1rem 1.3rem;
          display: flex;
          align-items: center;
          cursor: pointer;
          &:hover {
            background-color: #fafafa;
          }
          .avatar {
            flex: 0 0 auto;
            width: 2.85rem;
            height: 2.85rem;
            border-radius: 50%;
            margin-right: 0.5rem;
            position: relative;
            object-fit: cover;
            background-position: 50%;
            background-repeat: no-repeat;
          }
          .user-info {
            .username {
              font-size: 0.56rem;
              font-weight: 400;
              color: #333;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              margin-bottom: 3px;
              display: flex;
              align-items: center;
              .name {
                display: inline-block;
                vertical-align: top;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
              .rank {
                img {
                  width: 35px;
                  height: 16px;
                }
              }
            }
            .position {
              color: #909090;
              font-size: 0.5rem;
              margin-bottom: 3px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
      }
    }
  }
}
</style>
