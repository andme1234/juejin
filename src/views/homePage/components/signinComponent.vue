<template>
  <div class="signin-tip">
    <div class="first-line">
      <div class="icon-text">

        <span class="title">{{ timeNow }}</span>
      </div>
      <button class="signin-btn">
        <span class="btn-text">去签到</span>
      </button>
    </div>
    <div class="second-line">点亮你在社区的每一天</div>
  </div>
</template>

<script>
export default {
  name: "signinComponent",
  data() {
    return {
      timeNow: "",
    };
  },
  mounted() {
    const dateNow = new Date();
    const date = dateNow.getHours();
    if (date >= 6 && date < 12) {
      this.timeNow = "上午好！";
    } else if (date >= 12 && date < 2) {
      this.timeNow = "中午好！";
    } else if (date >= 2 && date < 18) {
      this.timeNow = "下午好！";
    } else if (date >= 18 && date < 24) {
      this.timeNow = "晚上好！";
    } else {
      this.timeNow = "凌晨好！";
    }
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
button {
  cursor: pointer;
}
.signin-tip {
  width: 240px;
  height: 96px;
  margin-bottom: 16px;
  background-color: #fff;
  padding: 16px;
  box-sizing: border-box;
  .first-line {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    .icon-text {
      display: flex;

      .title {
        margin-top: 2px;
        color: #1d2129;
        font-size: 20px;
        font-weight: bold;
      }
    }
    .signin-btn {
      border: 1px solid #1e80ff;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50px;
      height: 32px;
      width: 72px;
      .btn-text {
        color: #1e80ff;
        font-size: 14px;
        font-weight: 400;
        white-space: nowrap;
      }
      &:hover {
        background-color: #e8f3ff;
      }
    }
  }
  .second-line {
    margin-bottom: 2px;
    color: #4e5969;
    font-size: 14px;
    font-weight: 400;
    display: flex;
    align-items: center;
    opacity: 1;
  }
}
</style>
