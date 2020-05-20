<template>
  <div class="navbar">
    <div class="left" @click="goHome">
      <van-icon name="arrow-left" />
    </div>
    <div class="center">
      <slot>设置文字</slot>
    </div>
    <div class="right">
      <van-icon name="search" />
    </div>
  </div>

</template>

<script>
export default {
  name:'navbar',
  methods: {
    goHome() {
      this.$router.push({path: '/'})
    }
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  width: 100%;
  background: #f2f2f2;
  display: flex;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  .left, .right {
    font-size: 25px;
    color: #bbb;
    width: 50px;
  }
  .center {
    flex: 1;
    color: #666666;
    text-align: center;
    line-height: 50px;
  }
  .left, .right {
    text-align: center;
    line-height: 55px;
  }
}
</style>