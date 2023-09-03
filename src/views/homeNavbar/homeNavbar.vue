<template>
  <div class="homeNavbar">
    <div
      :class="{
        navbar: navbarClass,
        showOn: showOnClass,
        shhowOff: showOffClass,
      }"
    >
      <div class="tter">
        <ul>
          <!-- 导航栏左侧 -->
          <li @click="imgUrlRouter">
            <img
              src="@/assets/images/homeNavbar/juejin_home.png"
              alt=""
              class="juejinIcon"
            />
            <img
              src="@/assets/images/homeNavbar/juejinNext.png"
              alt=""
              class="mobile"
            />
          </li>
          <li
            :class="active == index ? 'activeClass' : ''"
            v-for="(lists, index) in listName"
            :key="index"
            @click="listRouter(index)"
          >
            {{ lists }}
          </li>
          <li @click="pageHomeClick">
            首页<img
              :class="{ rotateImg }"
              src="@/assets/images/homeNavbar/phone/selfDown.png"
              alt=""
            />
            <div class="phoneSelect" v-show="phoneSelectShow">
              <span v-for="(items, index) in phoneListName" :key="index + 1"
                ><div>{{ items }}</div></span
              >
            </div>
          </li>
        </ul>
        <ul>
          <!-- 导航栏右侧 -->
          <li :class="{ phoneInput, focusInput }">
            <input
              @focus="focusOn"
              @blur="blurOn"
              type="text"
              :placeholder="
                placeholderText ? '探索稀土掘金' : '搜索文章/小册/标签/用户'
              "
            />
          </li>
          <li :class="{ phoneInput, focusImg }">
            <img
              v-if="searchColor"
              src="@/assets/images/homeNavbar/searchWhite.png"
              alt=""
            />
            <img
              v-else
              src="@/assets/images/homeNavbar/searchBlue.png"
              alt=""
            />
          </li>
          <li :class="{ phoneCreate, createShowDown }">
            <button>创作者中心</button>
            <button @click="dropDown" ref="mbMenu">
              <img
                v-if="imgShow"
                src="@/assets/images/homeNavbar/triangleDown.png"
                alt=""
              />
              <img
                v-else
                src="@/assets/images/homeNavbar/triangleUp.png"
                alt=""
              />

            </button>
          </li>
          <li class="selfFour">
            <img src="@/assets/images/homeNavbar/vip.png" alt="" />会员
          </li>
          <li class="phoneLast" v-show="lastShow">
            <img src="@/assets/images/homeNavbar/message.png" alt="" />
          </li>
          <li
            class="phoneLast"
            v-show="lastShow"
            @click="selfPersonal"
            ref="selfPersonal"
          >
            <img src="@/assets/images/homeNavbar/headPortrait.jpg" alt="" />

          </li>
        </ul>
      </div>
    </div>

    <keep-alive><router-view></router-view></keep-alive>
  </div>
</template>

<script>
import expandListTop from "./expandListTop";
import expandListContent from "./expandListContent";
export default {
  name: "homeNavbar",
  data() {
    return {
      listName: ["首页", "沸点", "课程", "直播", "活动","竞赛", "商城", "APP", "插件"],
      phoneListName: ["首页", "沸点", "课程", "直播", "活动", "商城"],
      urlRouter: [
        "homePage",
        "boilingPoint",
        "educationalClass",
        "liveBroadcast",
        "activityArea",
        "competitionAttend"
      ],
      newWindow: [
        "https://detail.youzan.com/show/goods/newest?kdt_id=104340304",
        "https://juejin.cn/app?utm_source=jj_nav",
        "https://juejin.cn/extension?utm_source=jj_nav",
      ],
      active: 0,
      screenWidth: document.body.clientWidth,
      dropDownBox: false,
      imgShow: true,
      personalOpen: false,
      expandListTop,
      expandListContent,
      navbarScroll: true,
      navbarClass: true,
      showOnClass: false,
      showOffClass: false,
      phoneInput: true,
      focusInput: false,
      placeholderText: true,
      focusImg: false,
      searchColor: true,
      phoneCreate: true,
      createShowDown: false,
      lastShow: true,
      rotateImg: false,
      phoneSelectShow: false,
    };
  },
  methods: {
    listRouter(index) {
      if (index < 6) {
        this.$router.push("/" + this.urlRouter[index]);
        this.active = index;
      } else {
        window.open(this.newWindow[index - 6], "_blank");
        // console.log(index);
      }
    },
    imgUrlRouter() {
      this.$router.push("/homePage");
      this.active = 0;
    },
    dropDown() {
      this.dropDownBox = !this.dropDownBox;
      this.imgShow = !this.imgShow;
    },
    selfPersonal() {
      this.personalOpen = !this.personalOpen;
    },
    handleScrollx() {
      // console.log("滚动高度", window.pageYOffset);
      // console.log('距离顶部高度',this.$refs.pronbit.getBoundingClientRect().top)
      if (window.pageYOffset <= 100) {
        this.showOnClass = false;
        this.showOffClass = true;
      } else {
        this.showOffClass = false;
        this.showOnClass = true;
      }
    },
    focusOn() {
      this.focusInput = true;
      this.phoneInput = false;
      this.placeholderText = false;
      this.focusImg = true;
      this.searchColor = false;
      this.createShowDown = true;
      if (this.screenWidth < 834) {
        this.lastShow = false;
      }
    },
    blurOn() {
      this.focusInput = false;
      this.phoneInput = true;
      this.placeholderText = true;
      this.focusImg = false;
      this.searchColor = true;
      this.createShowDown = false;
      if (this.screenWidth < 834) {
        this.lastShow = true;
      }
    },
    pageHomeClick() {
      this.phoneSelectShow = !this.phoneSelectShow;
      this.rotateImg = !this.rotateImg;
    },
  },
  mounted() {
    // 点击空白区域下拉列表隐藏
    document.addEventListener("click", (e) => {
      if (!this.$refs.mbMenu.contains(e.target)) {
        this.dropDownBox = false;
        this.imgShow = true;
      }
    }),
      document.addEventListener("click", (e) => {
        if (!this.$refs.selfPersonal.contains(e.target)) {
          this.personalOpen = false;
        }
      });
    // 监听页面滚出距离
    window.addEventListener("scroll", this.handleScrollx);
    //监听窗口宽度
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      })();
    };
  },
  beforeDestroy() {
    // 移除监听数据
    document.removeEventListener("scroll", this.handleScrollx);
  },
  watch: {
    screenWidth(val) {
      // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
      if (!this.timer) {
        // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
        this.screenWidth = val;
        this.timer = true;
        let that = this;
        setTimeout(function () {
          // 打印screenWidth变化的值
          // console.log(that.screenWidth)
          that.timer = false;
        }, 400);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.homeNavbar {
  font-size: 14px;
  // max-width: 1440px;
  padding-top: 61px;
  .navbar {
    z-index: 1000;
    position: fixed;
    top: 0;
    height: 3.75rem;
    width: 100%;
    background-color: #ffffff;
    border-bottom: 1px solid #f1f1f1;
    // max-width: 1440px;
    transition: all 0.3s;
    .tter {
      position: relative;
      height: 100%;
      max-width: 1440px;
      margin: 0 auto;
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        &:nth-child(1) {
          line-height: 3.75rem;
          font-size: 0.875rem;
          color: #515767;
          float: left;
          li {
            float: left;
            margin-right: 1.5rem;
            height: 3.625rem;
            .juejinIcon {
              width: 107px;
              height: 22.5px;
              vertical-align: -11%;
            }
            .mobile {
              display: none;
            }
            &:hover {
              cursor: pointer;
            }
            &:first-child {
              margin-left: 1.5rem;
            }
            &:hover:nth-child(-n + 7) {
              border-bottom: 2px solid #1e80ff;
            }
            &:hover:first-child {
              border-bottom: none;
            }
            &:last-child {
              display: none;
            }
          }
        }
        &:nth-child(2) {
          float: right;
          height: 100%;
          li {
            float: left;
            position: relative;
            &:nth-child(1) {
              top: 0.75rem;
              left: 151px;
              width: 20.375rem;
              input {
                width: 11rem;
                height: 2rem;
                // left: -161px;
                border: 1px solid #c2c8d1;
                border-radius: 5px;
                font-size: 0.75rem;
                color: #c0c4cb;
                text-indent: 0.625rem;
                transition: all 0.2s;
                &:hover {
                  border-color: #8a919f;
                }
                &:focus {
                  outline: none;
                  border-color: #1e80ff;
                }
                &::placeholder {
                  color: #c0c4cb;
                  font-size: 13px;
                  text-indent: 0.625rem;
                }
                &::-webkit-input-placeholder {
                  /* WebKit browsers */
                  color: #c0c4cb;
                }
                &:-moz-placeholder {
                  /* Mozilla Firefox 4 to 18 */
                  color: #c0c4cb;
                }
                &::-moz-placeholder {
                  /* Mozilla Firefox 19  */
                  color: #c0c4cb;
                }
                &:-ms-input-placeholder {
                  /* Internet Explorer 10  */
                  color: #c0c4cb;
                }
              }
            }
            &:nth-child(2) {
              display: inline-block;
              width: 2.75rem;
              height: 1.875rem;
              left: -40px;
              top: 0.9375rem;
              background-color: #f2f3f5; //#f2f3f5
              transition: all 0.2s;
              img {
                position: absolute;
                width: 15px;
                height: 15px;
                top: 50%;
                margin-top: -0.5rem;
                margin-left: 1rem;
                cursor: pointer;
              }
            }
            &:nth-child(3) {
              // position: absolute;
              top: 0.75rem;
              // margin-right: 1.1875rem;
              right: 15.5px;
              width: 119px;
              height: 160px;
              // background-color: pink;
              overflow: hidden;
              button {
                background: #1e80ff;
                border: 1px solid #1e80ff;
                font-size: 0.875rem;
                color: #ffffff;
                cursor: pointer;
                transition: all 0.2s;
                &:first-child {
                  border-radius: 3px 0 0 3px;
                  padding: 0.5625rem 0.6875rem 0.5625rem 0.7188rem;
                }
                &:nth-child(2) {
                  position: relative;
                  height: 36px;
                  width: 21px;
                  top: 0px;
                  border-radius: 0 3px 3px 0;
                  transition: all 0.3;
                  border-left: 0.5px solid #358dff;
                  left: -1px;
                  img {
                    width: 19px;
                    height: 22px;
                    position: relative;
                    top: 6px;
                    margin: -0.875rem -0.4375rem 0 -5.5px;
                  }
                  .dropDownBox {
                    position: absolute;
                    height: 7.25rem;
                    width: 7rem;
                    border-radius: 4px;
                    background-color: #ffffff;
                    box-shadow: 0 2px 26px #e8eaeb;
                    color: #515767;
                    top: 2.625rem;
                    right: -1px;
                    overflow: hidden;
                    div {
                      height: 1.9375rem;
                      width: 85%;
                      margin: 0.375rem auto;
                      border-radius: 3px;
                      line-height: 1.9375rem;
                      img {
                        width: 16px;
                        height: 16px;
                        vertical-align: middle;
                        margin-right: 0.625rem;
                      }
                      &:hover {
                        background-color: #f9f9f9;
                      }
                    }
                  }
                }
                &:hover {
                  background-color: #1171ee;
                }
              }
            }
            &:nth-child(4) {
              top: 1.1563rem;
              font-size: 0.875rem;
              color: #86909c;
              margin-right: 1.6563rem;

              img {
                width: 20.5px;
                height: 23px;
                vertical-align: -40%;
                margin-right: 0.375rem;
              }
            }
            &:nth-child(5) {
              top: 1.0625rem;
              margin-right: 1.6875rem;
              img {
                width: 18.5px;
                height: 21.5px;
              }
            }
            &:nth-child(6) {
              top: 0.6563rem;
              margin-right: 1.5rem;
              position: relative;
              img {
                width: 36px;
                height: 36px;
                border-radius: 50%;
              }

            }
            &:nth-child(n-3) {
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
.activeClass {
  color: #1e80ff;
}
.imagesCall {
  border-radius: 0;
  width: 0.9375rem;
  height: 0.9375rem;
  margin: 0 0.5rem 0 0.75rem;
  vertical-align: -10%;
}
.dropDownCall {
  width: 100%;
  height: 1.9063rem;
  line-height: 1.9063rem;
}
.showOn {
  top: -3.875rem !important;
}
.showOff {
  top: 0px !important;
}
.focusInput {
  left: 151px !important;
  input {
    width: 321px !important;
    // left: -291px !important;
  }
}
.focusImg {
  background-color: #eaf2ff !important;
  left: 105px !important;
}
.createShowDown {
  button {
    position: relative !important;
    transform: translateX(120px);
  }
}
.rotateImg {
  rotate: (-180deg);
}
@media (max-width: 1269px) {
  .homeNavbar {
    div {
      ul {
        &:nth-child(1) {
          li {
            display: none;
            &:nth-child(1) {
              display: block;
            }
            &:last-child {
              position: relative;
              display: block !important;
              font-size: 16px;
              color: #1e80ff;
              margin-left: -2px;
              img {
                width: 0.5313rem;
                height: 0.4688rem;
                vertical-align: middle;
                margin-left: 0.3125rem;
                margin-top: -0.125rem;
              }
              .phoneSelect {
                position: absolute;
                width: 156px;
                height: 305px;
                border: 1px solid #ebebeb;
                border-radius: 3px;
                box-shadow: 0 2px 26px #e8eaeb;
                background-color: #ffffff;
                top: 56px;
                left: -57px;
                span {
                  float: left;
                  width: 100%;
                  height: 48px;
                  text-align: center;
                  line-height: 48px;
                  font-size: 14px;
                  color: #515767;
                  &:first-child {
                    margin-top: 8px;
                  }
                  div {
                    display: inline-block;
                    &:hover {
                      color: #252933;
                      border-bottom: 2px solid #1e80ff;
                    }
                  }
                  &:last-child {
                    div {
                      border-bottom: 0;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
@media (max-width: 960px) {
  .homeNavbar {
    box-sizing: border-box;
    .navbar {
      ul {
        box-sizing: border-box;
        &:nth-child(2) {
          .selfFour {
            display: none;
          }
        }
      }
    }
  }
}
@media (max-width: 834px) {
  .homeNavbar {
    .navbar {
      ul {
        &:nth-child(2) {
          li {
            &:nth-child(3) {
              display: none;
            }
          }
        }
      }
    }
  }
  .focusInput {
    left: 45.5px !important;
    input {
      width: 300px !important;
    }
  }
  .focusImg {
    left: -22px !important;
  }
}
@media (max-width: 714px) {
  .homeNavbar {
    .navbar {
      height: 52px;
      ul {
        &:nth-child(1) {
          &:first-child {
            .juejinIcon {
              display: none;
            }
            .mobile {
              display: block;
              position: relative;
              width: 1.875rem;
              height: 1.5rem;
              top: 0.9063rem;
              left: -0.5rem;
            }
          }
          li {
            &:last-child {
              margin-left: -1.3125rem !important;
              margin-top: -0.25rem;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 640px) {
  ul {
    &:nth-child(2) {
      position: fixed;
      right: 0;
      .phoneInput {
        margin-right: -30px;
        // background-color: pink;
        input {
          width: 136px !important;
        }
        &:nth-child(2) {
          left: -51px !important;
        }
      }
      .phoneLast {
        margin-right: 24px !important;
      }
    }
  }
  .focusInput {
    left: 110px !important;
    // background-color: pink;
    input {
      height: 100%;
      width: 210px !important;
    }
  }
  .focusImg {
    left: -48px !important;
  }
}
@media (max-width: 453px) {
  .phoneInput {
    display: none !important;
  }
}
@media (max-width: 290px) {
  .phoneLast {
    display: none !important;
  }
}
</style>
