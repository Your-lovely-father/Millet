<template>
  <van-tabbar
      v-model="active"
      active-color="#f56c02"
      inactive-color="#797979"
    >
      <van-tabbar-item  to="/home/goodsclassify/推荐" icon="wap-home-o">
        首页
      </van-tabbar-item>

      <van-tabbar-item to="/classify" icon="orders-o">
        分类
      </van-tabbar-item>
      
      <van-tabbar-item  to="/shopingcart" icon="shopping-cart-o" >
        购物车
      </van-tabbar-item>

      <van-tabbar-item  to="/about" icon="contact">
        我的
      </van-tabbar-item>

    </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    }
  },
  watch: {
    "this.$route"() {
      console.log(this.$route)
    }
  },  
}
</script>

<style lang="scss" scoped>
.van-tabbar {
  position: fixed;
  bottom: 0px;
  box-shadow: 0 1px 3px black; 
  height: 49px;
  a {
    width: 25%;
    display: flex;
    justify-content: center;
  }
  }
</style>