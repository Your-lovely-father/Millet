<template>
   <div class="recommend">
     <div v-for="(item, index) in goodsList" :key="index" class="goods-item">
       <img :src="item.img" :alt="item.title">
       <div class="bottom">
         <div class="title">{{ item.title }}</div>
         <div class="price">￥{{ item.price }} </div>
       </div>
     </div>
   </div>
</template>

<script>
export default {
  name: 'recommend',
  data() {
    return {
      // 图片地址不能是本地地址，会加载不上
      goodsList:[
        {title: 'Redmi 8A 3GB+32GB',price: '699',img:  'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4554aeb18a57bca9534cb8cfa3f659ba.jpg?thumb=1&w=360&h=360'},
        {title: 'Redmi 8A 3GB+32GB',price: '4299',img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2328531e1538c6e99d42906222c83743.jpg?thumb=1&w=360&h=360'},
        {title: 'Redmi 8A 3GB+32GB',price: '899',img:  'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9af226f187e109d2dcbedef9ef47e439.jpg?thumb=1&w=360&h=360'},
        {title: 'Redmi 8A 3GB+32GB',price: '1899',img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f352016790da21aacbd466efa50a70e1.jpg?thumb=1&w=360&h=360'},
        {title: 'Redmi 8A 3GB+32GB',price: '699',img:  'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4554aeb18a57bca9534cb8cfa3f659ba.jpg?thumb=1&w=360&h=360'},
        {title: 'Redmi 8A 3GB+32GB',price: '4299',img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2328531e1538c6e99d42906222c83743.jpg?thumb=1&w=360&h=360'},
        {title: 'Redmi 8A 3GB+32GB',price: '899',img:  'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9af226f187e109d2dcbedef9ef47e439.jpg?thumb=1&w=360&h=360'},
        {title: 'Redmi 8A 3GB+32GB',price: '1899',img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f352016790da21aacbd466efa50a70e1.jpg?thumb=1&w=360&h=360'},
        {title: 'Redmi 8A 3GB+32GB',price: '699',img:  'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4554aeb18a57bca9534cb8cfa3f659ba.jpg?thumb=1&w=360&h=360'},
        {title: 'Redmi 8A 3GB+32GB',price: '4299',img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2328531e1538c6e99d42906222c83743.jpg?thumb=1&w=360&h=360'},
        {title: 'Redmi 8A 3GB+32GB',price: '899',img:  'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9af226f187e109d2dcbedef9ef47e439.jpg?thumb=1&w=360&h=360'},
        {title: 'Redmi 8A 3GB+32GB',price: '1899',img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f352016790da21aacbd466efa50a70e1.jpg?thumb=1&w=360&h=360'},
        {title: 'Redmi 8A 3GB+32GB',price: '699',img:  'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4554aeb18a57bca9534cb8cfa3f659ba.jpg?thumb=1&w=360&h=360'},
        {title: 'Redmi 8A 3GB+32GB',price: '4299',img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2328531e1538c6e99d42906222c83743.jpg?thumb=1&w=360&h=360'},
        {title: 'Redmi 8A 3GB+32GB',price: '899',img:  'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9af226f187e109d2dcbedef9ef47e439.jpg?thumb=1&w=360&h=360'},
        {title: 'Redmi 8A 3GB+32GB',price: '1899',img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f352016790da21aacbd466efa50a70e1.jpg?thumb=1&w=360&h=360'},
      ]
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
.recommend {
  display: flex;
  // flex布局默认是不折行的请设置为折行
  flex-wrap: wrap;
  justify-content: space-between;
  .goods-item {
    width: 49.5vw;
    height: 244px;
    img {
      width: 100%;
    }
    .bottom {
      box-sizing: border-box;
      padding: 9px 12px;
      .title {
        font-size: 14.5px;
        color: #3c3c3c;
      }
      .price {
        color: #ff6777;
        font-size: 16.6px;
      }
    }
  }
}
</style>