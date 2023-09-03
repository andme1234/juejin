<template>
  <div>


    <!-- 下载 -->
    <div class="block-body">
      <a href="/app" target="_blank" class=""
        ><div class="app-link">
          <img
            src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/home.59780ae.png"
            class="qr-img"
          />
          <div class="content-box">
            <div class="headline">下载稀土掘金APP</div>
            <div class="desc">一个帮助开发者成长的社区</div>
          </div>
          <!---->
        </div></a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "advertisememtComponent",
  methods: {
    mouseIn() {
      this.isShow = true;
    },
    mouseOut() {
      this.isShow = false;
    },
    closeBtn() {
      this.boxShow = false;
    },
    iconEnter() {
      this.iconShow = true;
    },
    iconLeave() {
      this.iconShow = false;
    },
  },
  data() {
    return {
      isShow: false,
      boxShow: true,
      iconShow: false,
    };
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
  text-align: -webkit-match-parent;
}

.block-body {
  position: relative;
  margin-bottom: 1rem;
  border-radius: 2px;
  .app-link {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background-color: #fff;
    .qr-img {
      margin-right: 16px;
      width: 3.167rem;
      height: 3.167rem;
    }
    .content-box {
      .headline {
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        color: #1d2129;
      }
      .desc {
        margin-top: 0.5rem;
        font-size: 12px;
        line-height: 20px;
        color: #86909c;
      }
    }
  }
}
</style>
