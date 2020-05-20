<template>
  <div class="shopingcart">
    <nav-bar>购物车</nav-bar>

    <div class="loginMore">
      <span class="left">登陆后享受更多优惠</span>
      <span class="right">
        <span>去登陆</span> 
        <van-icon name="arrow" />
      </span>
    </div>

    <div class="isEmpty">
      <van-icon name="shopping-cart-o" />
      <span class="left">
        <span>购物车还是空的</span>
      </span>
      <em class="right" @click="goHome">去逛逛</em>
    </div>

    <!-- 猜你喜欢 -->
    <img src="../../assets/shoppingcart/more.jpg" alt="">

    <!-- 推荐 -->
    <Recommend class="recommnet"/>
  </div>
</template>

<script>
import NavBar from '../../components/content/Navbar'
import Recommend from './Recommend'
export default {
    name: 'shopingcart',
    components: {
      NavBar,
      Recommend
    },
    methods: {
      goHome() {
        this.$router.push({path: '/home/goodsclassify/推荐'})
      }
    },
}
</script>

<style lang="scss" scoped>
.shopingcart {
  // height: 2150px;
  margin-top: 50px;
  margin-bottom: 49px; 
  .loginMore {
    height: 50px;
    line-height: 50px;
    display: flex;
    justify-content: space-between;
    padding: 0 16px;
    .left {
      font-size: 16.6px;
    }
    .right {
      font-size: 12.5px;
    }
  }
  .isEmpty {
    height: 62px;
    text-align: center;
    line-height: 62px;
    background: #ebebeb;
    .van-icon {
        font-size: 40px;
        color: rgba(0,0,0,0.25);
        vertical-align: middle;
      }
    .left {
      font-size: 12.5px;
      color: rgba(0,0,0,0.25);
      padding-right: 8px;
    }
    .right {
      display: inline-block;
      border: 1px solid rgba(0,0,0,.15);
      box-sizing: border-box;
      height: 26px;
      line-height: 26px;
      font-size: 12.5px;
      padding: 0 10px;
      color: rgba(0,0,0,.87);
      font-style: normal;
    }
  }
  img {
    height: 62.5px;
  }
  .recommnet {
    height: 1952px;
  }
}
</style>