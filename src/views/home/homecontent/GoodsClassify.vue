<template>
  <div class="goodsclassify">
    <!-- 轮播 -->
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in swipers" :key="index" ><img :src="item" alt=""></van-swipe-item>
    </van-swipe>
    <h3>
      这是首页分类中的：{{pramas}}
    </h3>
    <!-- MultiCall -->
    <multi-call :imgList="imgListTop"></multi-call>
    <multi-call :imgList="imgListBottom"></multi-call>

    <!-- 每日精选 -->
    <daily-best v-for="(item, index) in dailyBestList" :key="index" :dailyBestlist="dailyBestList[index]"></daily-best>
    
    <!-- <img src="../../assets/推荐.png" alt=""> -->
    <p>
      在钩子函数create（）中获取路由的来的参数，进行异步数据数据 
      使用监听属性：监听路由的变化，路由变化后，从新发送请求
      参数为：this.$route.params.id，并将数据保存到数据对象中
      因为没有后台数据接口所以只能写清楚流程
    </p>
  </div>
</template>

<script>
import MultiCall from './MultiCall'
import DailyBest from './recommmend/DailyBest'

export default {
  name: 'goodsclassify',
  components: {
    MultiCall,
    DailyBest,
  },
  data() {
    return {
      pramas: '',
      goodsList: [
        {数据: '这是获取的数据'},
      ],
      swipers: [
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/46f3aa5d613a3b257a238bf828a7e906.jpg?thumb=1&w=720&h=360',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f59b4bfa6904d5dfc7069ff8df026fc1.jpg?thumb=1&w=720&h=360',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/32863319e1e4389e590eb7fc53e3e458.jpg?thumb=1&w=720&h=360',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/460415cd86b6c77b2d6c0286654f4b14.jpg?thumb=1&w=720&h=360'
      ],
      imgListTop: [
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&w=144&h=152',
        'https://i8.mifile.cn/v1/a1/eb5024fe-dfe3-6e53-3e18-675bef5fa06e.webp',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6eb2a9a73687e007daf30fc3f85e0ad2.gif',
        'https://i8.mifile.cn/v1/a1/e8bc849a-0a3b-21a0-6810-7da3a3903dee.webp',
        'https://i8.mifile.cn/v1/a1/7dbcbf87-6a58-adb6-2f3f-bb3dae3e9c80.webp'
      ],
      imgListBottom: [
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bc1c677a6e10e42d00fb0a063662fbf9.png?thumb=1&w=144&h=152',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b14da225c4156d5ce9a78e42a3a5a8e7.jpg?thumb=1&w=144&h=152',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ff6d920e80a63e80edb21febdb266448.png?thumb=1&w=144&h=152',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7a4943684b6c577a6a0b9b141633f6bd.png?thumb=1&w=144&h=152',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f11f9df6b0b0b428f8c8fc3267131830.png?thumb=1&w=144&h=152',
      ],
      dailyBestList: [
        {
          img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d820c1ed281f26bba00f10ed15d01254.jpg?thumb=1&w=720&h=440',
          imgFooter: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/028d800af37aec439deef22a77ca8667.jpg?thumb=1&w=720&h=280',
          goodsList: [
            {
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/918eafcf051967f9d212a649fad7de28.jpg?thumb=1&w=344&h=280',
              name: 'Redmi Node 8 Pro',
              brief: '6400万全场景拍摄',
              price: '1399',
            },
            {
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/918eafcf051967f9d212a649fad7de28.jpg?thumb=1&w=344&h=280',
              name: 'Redmi Node 8 Pro',
              brief: '6400万全场景拍摄',
              price: '1399',
            },
            {
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/918eafcf051967f9d212a649fad7de28.jpg?thumb=1&w=344&h=280',
              name: 'Redmi Node 8 Pro',
              brief: '6400万全场景拍摄',
              price: '1399',
            },
            {
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/918eafcf051967f9d212a649fad7de28.jpg?thumb=1&w=344&h=280',
              name: 'Redmi Node 8 Pro',
              brief: '6400万全场景拍摄',
              price: '1399',
            },
            {
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/918eafcf051967f9d212a649fad7de28.jpg?thumb=1&w=344&h=280',
              name: 'Redmi Node 8 Pro',
              brief: '6400万全场景拍摄',
              price: '1399',
            },
            {
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/918eafcf051967f9d212a649fad7de28.jpg?thumb=1&w=344&h=280',
              name: 'Redmi Node 8 Pro',
              brief: '6400万全场景拍摄',
              price: '1399',
            },
          ]
        },
        {
         img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/32b4af97a9c952886d96895c20cb7b43.jpg?thumb=1&w=720&h=440',
          imgFooter: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f782193eab48f4348405b4b12c47ace7.jpg?thumb=1&w=720&h=280',
         goodsList: [
           {
             img: 'https://i8.mifile.cn/v1/a1/82003442-c6b7-3258-cc7a-2a851216ce8a.webp',
             name: 'Redmi Node 8 Pro',
             brief: '6400万全场景拍摄',
             price: '1399',
           },
           {
             img: 'https://i8.mifile.cn/v1/a1/82003442-c6b7-3258-cc7a-2a851216ce8a.webp',
             name: 'Redmi Node 8 Pro',
             brief: '6400万全场景拍摄',
             price: '1399',
           },
           {
             img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/896d989bcdae584906c36f4a4e5fa89b.jpg?thumb=1&w=344&h=280',
             name: 'Redmi Node 8 Pro',
             brief: '6400万全场景拍摄',
             price: '1399',
           },
           {
             img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/896d989bcdae584906c36f4a4e5fa89b.jpg?thumb=1&w=344&h=280',
             name: 'Redmi Node 8 Pro',
             brief: '6400万全场景拍摄',
             price: '1399',
           },
           {
             img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/918eafcf051967f9d212a649fad7de28.jpg?thumb=1&w=344&h=280',
             name: 'Redmi Node 8 Pro',
             brief: '6400万全场景拍摄',
             price: '1399',
           },
           {
             img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/918eafcf051967f9d212a649fad7de28.jpg?thumb=1&w=344&h=280',
             name: 'Redmi Node 8 Pro',
             brief: '6400万全场景拍摄',
             price: '1399',
           },
          ]
        }
      ]
    }
  },
  created() {
    // 在钩子函数create（）中获取路由的来的参数，进行异步数据数据 
    // 参数为：this.$route.params.id，并将参数保存到数据对象中
    this.pramas = this.$route.params.id
    this.getGoodsLast()
  },
  watch: {
    '$route'() { //监听漏油参数的变化，参数变化，从新发送请求
      // console.log(this.$route.params.id)
      this.getGoodsLast()     
    }
  },
  methods: {
    getGoodsLast() {
      this.pramas = this.$route.params.id
      // console.log('数据被重新获取')
    }  
  },
}
</script>

<style lang="scss" scoped>
.goodsclassify {
  margin: 0 auto;
  img {
    width: 100%;
  }
}
</style>