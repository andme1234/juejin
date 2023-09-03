<template>
  <div>
    <div class="comment-form">
      <!-- 评论区头部开始 -->
      <div class="header">
        <span class="header-title">评论</span>
      </div>
      <!-- 评论区头部结束 -->

      <!-- 评论区发表评论文本框开始 -->
      <div class="content">
        <!-- 左侧图片开始 -->
        <div class="avatar-box">
          <img
            src="https://p26-passport.byteacctimg.com/img/mosaic-legacy/3791/5070639578~300x300.image"
          />
        </div>
        <!-- 左侧图片结束 -->

        <!-- 右边输入文本框开始 -->
        <div class="form-box">
          <div class="auth-card">
            <!--文本框开始-->
            <div class="input-box">
              <div class="rich-input empty">
                <textarea
                  v-model="textareaValue"
                  @focus="handleFoucus"
                  @blur="handleBlur"
                  placeholder="输入评论（Enter换行，Ctrl + Enter发送）"
                  rows="3"
                  :class="{ active: showDetail }"
                />
              </div>
              <!--文本框结束-->
            </div>
          </div>
          <!-- :class="{ borderChange: showDetail }" -->
          <div class="action-box" v-if="showDetail">
            <!-- 表情 -->
            <div class="emoji-container emoji-btn">
              <div
                class="emoji-box"
                @mouseover="yr"
                @mouseleave="yc"
                :style="emojiActive"
              >
                <span>表情</span>
              </div>
            </div>
            <!--图片-->
            <div
              class="image-btn"
              @mouseover="yr"
              @mouseleave="yc"
              :style="emojiActive"
            >
              <span>图片</span>
            </div>
            <!-- 发表评论 -->
            <div class="submit">
              <span>Ctrl + Enter</span>
              <button
                class="submit-btn"
                :disabled="btnState == false"
                :class="{ btnBg: btnState }"
              >
                发表评论
              </button>
            </div>
          </div>
        </div>
        <!-- 右边输入文本框结束 -->
      </div>
      <!-- 评论区发表评论文本框结束 -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDetail: false,
      textareaValue: "",
      canClick: false,
      emojiActive: "",
    };
  },
  watch: {
    textareaValue(val) {
      this.canClick = val ? true : false;
    },
  },
  methods: {
    handleFoucus() {
      this.showDetail = true;
    },
    handleBlur() {
      if (this.textareaValue) return;
      this.showDetail = false;
    },
    yr() {
      this.emojiActive = "color:blue";
    },
    yc() {
      this.emojiActive = "";
    },
  },
};
</script>

<style lang="scss" scoped>
$color: #fff;
.comment-form {
  display: flex;
  position: relative;
  // padding-top: 10px;
  border-radius: 2px;
  flex-direction: column;
  position: relative;
  // margin: 0 auto;
  margin-left: -10px;
  width: 100%;
  border-radius: 4px;
  // background-color: pink;
  //头部样式
  .header {
    margin-bottom: 2rem;

    &-title {
      font-size: 18px;
      line-height: 30px;
      font-weight: 600;
      color: #252933;
    }
  }

  // 右边输入文本框
  .content {
    width: 100%;
    display: flex;
    align-items: flex-start;
  }
}
.avatar-box {
  flex: 0 0 auto;

  img {
    margin-right: 16px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
.form-box {
  flex: 1 1 auto;
  position: relative;

  .auth-card {
    position: relative;
  }
}

.action-box {
  display: flex;
  align-items: center;
  margin-top: 8px;
  // 表情
  .emoji-btn {
    float: left;
    width: 46px;
  }
  .emoji-btn {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    span {
      color: #515767;
      font-size: 13px;
    }
  }
  .emoji-container {
    position: relative;
    z-index: 1;
    .emoji-box {
      display: flex;
      align-items: center;
      position: relative;
      cursor: pointer;
    }
  }
  // 图片
  .image-btn {
    float: left;
    width: 48px;
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    margin-left: 24px;

    span {
      color: #515767;
      font-size: 14px;
      line-height: 22px;
      transition: color 0.3s;
    }
  }
  // 提交申请
  .submit {
    width: 187.44px;
    float: right;
    flex: 0 0 auto;
    margin-left: auto;

    span {
      font-size: 14px;
      line-height: 22px;
      letter-spacing: 0.2px;
      color: #86909c;
      margin-right: 16px;
    }
    .submit-btn:disabled {
      background: #abcdff;
    }
    .hidden {
      display: none;
    }
    .submit-btn {
      flex: 0 0 auto;
      margin-left: auto;
      width: 92px;
      text-align: center;
      font-size: 14px;
      line-height: 36px;
      background: #abcdff;
      border-radius: 4px;
      color: #fff;
      padding: 0;
      border: 0;
      cursor: pointer;
    }
  }
}
.rich-input {
  width: 100%;
  position: relative;
  box-sizing: border-box;
  font-size: 14px;
  resize: both;
  textarea {
    width: 100%;
    background: #f2f3f5;
    border: 1px solid #f2f3f5;
    border-radius: 3px;
    padding: 8px 12px;
    outline: none;
    appearance: none;
    user-select: auto;
    resize: none;
  }
  .active {
    background: #fff;
    border-color: #1e80ff;
  }
}
.icon {
  fill: #515767;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 4px;
  transition: fill 0.3s;
}
.btnBg {
  background: #1e80ff;
}
.active {
  background: #fff;
  border-color: #1e80ff;
}
</style>
