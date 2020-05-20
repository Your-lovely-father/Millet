<template>
  <div class="classify">
    
    <nav-bar>分类</nav-bar>

    <div class="left">
      <ul>
        <li v-for="item in items" :key="item">{{item}}</li>
      </ul>
    </div>

    <div class="right">
      <div class="item" v-for="(item, index) in items" :key="index">
        <header>
          <img src="../../assets/classify/头.jpg" alt="">
        </header>
        <div class="title">--- {{item}} ---</div>
        <ul>
          <li><img class="images" src="../../assets/classify/手机.webp" alt=""><div class="word">小米9 Pro 5G</div></li>
          <li><img class="images" src="../../assets/classify/手机.webp" alt=""><div class="word">小米9 Pro 5G</div></li>
          <li><img class="images" src="../../assets/classify/手机.webp" alt=""><div class="word">小米9 Pro 5G</div></li>
          <li><img class="images" src="../../assets/classify/手机.webp" alt=""><div class="word">小米9 Pro 5G</div></li>
          <li><img class="images" src="../../assets/classify/手机.webp" alt=""><div class="word">小米9 Pro 5G</div></li>
          <li><img class="images" src="../../assets/classify/手机.webp" alt=""><div class="word">小米9 Pro 5G</div></li>
          <li><img class="images" src="../../assets/classify/手机.webp" alt=""><div class="word">小米9 Pro 5G</div></li>
          <li><img class="images" src="../../assets/classify/手机.webp" alt=""><div class="word">小米9 Pro 5G</div></li>
          <li><img class="images" src="../../assets/classify/手机.webp" alt=""><div class="word">小米9 Pro 5G</div></li>
          <li><img class="images" src="../../assets/classify/手机.webp" alt=""><div class="word">小米9 Pro 5G</div></li>
          <li><img class="images" src="../../assets/classify/手机.webp" alt=""><div class="word">小米9 Pro 5G</div></li>
          <li><img class="images" src="../../assets/classify/手机.webp" alt=""><div class="word">小米9 Pro 5G</div></li>
          <li><img class="images" src="../../assets/classify/手机.webp" alt=""><div class="word">小米9 Pro 5G</div></li>
          <li><img class="images" src="../../assets/classify/手机.webp" alt=""><div class="word">小米9 Pro 5G</div></li>
          <li><img class="images" src="../../assets/classify/手机.webp" alt=""><div class="word">小米9 Pro 5G</div></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../../components/content/Navbar'
export default {
    name: 'clssify',
    data() {
      return {
        items:['手机','众筹','电视','大家电','电脑','小爱智能','路由器','生活电器','厨房电器','智能穿戴','智能家居','车载出行','个性健康',
        '数码配件','日用百货','服务','米粉卡','零售店']
      }
    },
    components: {
      NavBar
    },
}
</script>

<style lang="scss" scoped>
.classify {
  .left {
    width: 20%;
    display: flex;
    margin-top: 50px;
    margin-bottom: 49px; 
    position: fixed;
    top: 0px;
    bottom: 0px; 
    left: 0px;
    overflow-y: scroll; 
    border-right: 1px solid #ccc;
    // 隐藏原生CSS的滚动条
    &::-webkit-scrollbar{ // chrome和safari
      width:0px
    }
    -ms-overflow-style: none;// ie10+
    overflow: -moz-scrollbars-none; //firefox
    ul {
      li {
        font-size: 14.5px;
        color: #3c3c3c;
        width: 20vw;
        height: 46px;
        text-align: center;
        line-height: 46px;
      }
    }
  }
  .right {
    width: 75%;
    margin-top: 50px;
    margin-bottom: 49px; 
    position: fixed;
    top: 0px;
    right: 10px;
    bottom: 0px; 
    overflow-y: scroll; 
    // background: pink;
    .item {
      header {
        img {
          width: 100%;
        }
      }
      .title {
        height: 66.7px;
        padding-top: 6px;
        text-align: center;
        line-height: 66.7px;
        color: #3c3c3c;
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 3px;
        li {
          width: 33%;
          height: 80px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          .images {
            width: 14vw;
          }
          .word {
            font-size: 12px;
            color: rgba($color: #000000, $alpha: 0.5)
          }
        }
      }
    }
  }
}
</style>