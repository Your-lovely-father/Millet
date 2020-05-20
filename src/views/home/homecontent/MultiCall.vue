<template>
  <div class="multicall">
    <div class="item" v-for="(item, index) in imgList" :key="index">
      <img :src="item" alt="">
      </div>
  </div>
</template>

<script>
export default {
  name: 'multicall',
  props:['imgList'],
  data() {
    return {
      
    }
  },
}
</script>

<style lang="scss" scoped>
.multicall {
  display: flex;
  justify-content: space-around;
  .item {
    width: 19%;
    background: pink;
    img {
      width: 100%;
      vertical-align: middle;
    }
  }
}
</style>