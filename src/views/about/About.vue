<template>
  <div class="about">

    <header>
      <div>
        <img src="../../assets/about/header.png" alt="">
        <span class="name">登录注册</span>
      </div>
    </header>

    <div class="b1">
      <div>我的订单</div>
      <div>全部订单</div>
      <van-icon class="right" name="arrow" />
    </div>

    <ul class="b2">
      <li>
        <div><van-icon name="balance-o" /></div>
        <div>待付款</div>
      </li>
      <li>
        <div><van-icon name="logistics" /></div>
        <div>待收货</div>
      </li>
      <li>
        <div><van-icon name="setting-o" /></div>
        <div>退换修</div>
      </li>
    </ul>
    <footer>
      <div v-for="(item,index) in list" :key="index">
        <item>
          <template v-slot:left>
            <img src="../../assets/homeImage/category-img/1.png" alt="">
          </template>
          <template v-slot:center>
              {{item.content}}
          </template>
        </item>
      </div>
    </footer>
  </div>
</template>

<script>
import Item from './Item'

export default {
  name: 'about',
  data() {
    return {
      list:[
        {img: '../../assets/homeImage/category-img/1.png',content: '会员中心'},
        {img: '../../assets/homeImage/category-img/2.png',content: '我的优惠'},
        {img: '../../assets/homeImage/category-img/3.png',content: '服务中心'},
        {img: '../../assets/homeImage/category-img/4.png',content: '小米之家'},
        {img: '../../assets/homeImage/category-img/5.png',content: '我的F码'},
        {img: '../../assets/homeImage/category-img/6.png',content: '礼物码兑换'},
        {img: '../../assets/homeImage/category-img/7.png',content: '设置'},
      ]
    }
  },
  components: {
    Item
  }
}
</script>

<style lang="scss" scoped>
.about {
  max-width: 900px;
  margin: 0 auto;
  header {
    height: 83px;
    background: #f37d0f url('../../assets/about/headerbg.png') center 0 ;
    background-size: contain;
    div {
      padding: 20px 25px;
      img {
        width: 44px;
        vertical-align: middle;
      }
      span {
        margin-left: 15px;
        font-size: 12.5px;
        color: #fff;
      }
    }
  }
  .b1 {
    height: 41px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 29px;
    font-size: 14px;
    border-bottom: 1px solid rgba(0,0,0,.15);
    div:first-child {
      padding-left: 16px;
    }
    div:nth-child(2){
      position: relative;
      right: -105px;
    }
    .right {
      font-size: 20px;
      position: relative;
      left: 10px;
    }
  }
  .b2 {
    height: 88px;
    display: flex;
    justify-content: space-between;
    // padding: 0 41px;
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1;
      font-size: 10px;
      .van-icon {
        font-size: 30px;
        margin-bottom: 5px; 
      }
    }
  }
  footer {
    padding-top: 20px;
    background: #f5f5f5;
    div {
      background: #fff;
    }
    >div:nth-child(2n-1) {
      border-bottom: 1px solid #cccccc;
    }
    >div:nth-child(2n) {
      margin-bottom: 20px;
    }
  }
  margin-bottom: 49px;
}
</style>