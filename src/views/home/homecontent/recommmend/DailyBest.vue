<template>
  <div class="dailybest">
    <header>
      <img :src="dailyBestlist.img" alt="">
    </header>
    <div class="main">
      <div class="item" v-for="(item, index) in dailyBestlist['goodsList']" :key="index">
        <img :src="item.img" alt="">
        <div class="name">{{ item.name }}</div>
        <div class="brief"> {{ item.brief }} </div>
        <div class="price"> ￥{{ item.price }}起 </div>
        <button>立即购买</button>
      </div>
    </div>
    <footer>
      <div class="more">
        更多小米电视产品
        <van-icon name="arrow" />
        </div>
      <img :src="dailyBestlist.imgFooter" alt="">
    </footer>
  </div>
</template>

<script>
export default {
  name: 'dailybest',
  props: ['dailyBestlist'],
  created() {
    console.log(this.dailyBestlist)
  },
}
</script>

<style lang="scss" scoped>
.dailybest {
  img {
        width: 100%;
      }
  .main {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .item {
      width: 48%;
      text-align: center;
      padding: 10px 0;
      .name {
        font-size: 15px;
        color: rgba(0,0,0,.87);
        overflow: hidden;
      }
      .brief {
        color: rgba(0,0,0,.54);
        font-size: 12px;
      }
      .price {
        color: #ea625b;
        font-size: 14.5px;
      }
      button {
        // outline: none;
        border: none;
        width: 104px;
        height: 35px;;
        background: #ea625b;
        border-radius: 2px;
        text-align: center;
        color: #fff;
        font-size: 14.5px;
        font-weight: 70;
      }
    }
  }
  footer {
    background: #f5f5f5;
    .more {
    height: 52px;
    line-height: 52px;
    text-align: center;
    font-size: 14.5px;
    color: rgba(0,0,0,.6);
    margin-bottom: 10px;
    background: #FFF;
    border-top: 1px solid #cccccc;
  }
  }
  
}
</style>