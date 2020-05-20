<template>
  <div class="topbar">
    <!-- 上部分 -->
    <div class="up">
        <!-- 左 -->
        <div class="left"><img src="../../assets/logo.png" alt=""></div>
        <!-- 中间 -->
        <div class="center">
          <div class="csearch">
            <van-icon name="search" color="#9a9a9a"/>
          </div>
          <input type="search" placeholder="搜索商品名称">  
        </div>
        <!-- 右 -->
        <div class="right"><van-icon name="contact" color="#9a9a9a"/></div>
    </div>

    <!-- 下部分 -->
    <div class="down">
      <!-- 默认显示 -->
      <!-- v-if="unfold" -->
      <div class="default" >
          <ul  index="0">
            <!-- 在父组件中进行捕获时间在分发到每一个li上进行处理 -->
            <!-- 此时则需要穿的特殊的对象$event,$event是原生事件对象 -->
            <li @click="isClick($event)" v-for="(item, index) in topClassList" :class="{active:isActive == index}" :key="index" :index="index">{{item}}</li>
          </ul>
      </div>     

      <!-- 下拉展开 -->
      <transition name="fade">
        <div class="unfold" v-if="!unfold">
          <div class="top" :class="{unfoldActive: isActive == 0}">全部</div>
          <div class="bottom">
            <ul >
              <li @click="isClick($event)" :class="{unfoldActive: isActive == index}" v-for="(item, index) in topClassList" :key="index" :index="index">{{item}}</li>
            </ul>
          </div>
        </div>
      </transition>

      <transition name="turn">
        <div :class="{more: true, turn: !unfold}" @click="unfoldClick">
          <van-icon name="arrow-down" color="#9a9a9a"/>
        </div>
      </transition>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: 0,
      unfold: true,
      topClassList: ['推荐','手机','智能','电视','笔记本','家电','生活周边']
    }
  },
  methods: {
    isClick(e) {
      // 可以使用添加类名的方法但是考虑到点击触发事件所以不用添加类的方法
      // e.target.attributes.class.value = 'active'
      // console.log(e.target.innerText)
      this.unfold = true
      // 判断当前选项是否已被点击，如果已被点击不进行路由跳转
      if(this.isActive != parseInt(e.target.attributes.index.value)) {
        this.$router.push({path: `/home/goodsclassify/${e.target.innerText}` })
      }
      this.isActive = parseInt(e.target.attributes.index.value)
    },
    unfoldClick(e) {
      this.unfold = !this.unfold
    }
  },
}
</script>

<style lang="scss" scoped>
.topbar {
  z-index: 999;
  .van-icon, img {
    vertical-align: middle;
  }
  height: 75px;
  display: flex;
  position: fixed;
  margin: 0 auto;
  left: 0px;
  right: 0px;
  top: 0px;
  flex-direction: column;
  box-shadow: 0 -1px 2px black;
  background: #f2f2f2;
  .up,.down {
      flex: 1;
  }
  .up {
    display: flex;
    align-items: center;
    .left,.right {
      width: 52px;
      text-align: center;
      line-height: 45px;
      img {
        width: 25px;
      }
    }
    // .left {
      
    // }
    .right {
      font-size: 24px;
      box-sizing: border-box;
      i {
        padding-bottom: 5px;
      }
    }
    .center {
      flex: 1;
      height: 33px;
      position: relative;
      .csearch {
        width: 31px;
        height: 31px;
        position: absolute;
        font-size: 16px;
        text-align: center;         
        line-height: 31px;          
      }
      input {
        height: 33px;
        width: 100%;
        color: #828282;
        font-weight:100;
        padding-left: 31px;
        border: 1px solid #e5e5e5;
      }
    }
  }
  .down {
    position: relative;
    .default {
      overflow: scroll;
      box-sizing: border-box; 
      margin-right: 50px;
      position: relative;
      // display: none;
      // 隐藏原生CSS的滚动条
      &::-webkit-scrollbar{ // chrome和safari
        width:0px
      }
      -ms-overflow-style: none;// ie10+
      overflow: -moz-scrollbars-none; //firefox
      ul{
          height: 30px;
          width: 400px;
          display: flex;
          justify-content: space-around;
          line-height: 30px;
          font-size: 13.5px;
          li {
            color: #747474;
          }
          .active {
            border-bottom: 2px solid #ed5b00;
          }
      }    
    }
    .more {
          position: absolute;
          top: 3px;
          right: 17px;
          transition: all 0.5s;
    }
    // 箭头旋转180°
    .turn {
      transform: rotateZ(180deg)
    }
    .unfold {
      height: 120px;
      // 在这设置一个绝对定位，否则在移动端会有bug
      position: absolute;
      top: 0px;
      background: #f2f2f2;
      padding: 0px 13px;
      .bottom {
        padding-top: 17px;
        ul {
          display: flex;
          flex-wrap: wrap;
          li {
            width: 19vw;
            height: 27px;
            margin: 0 10px 12px 0;
            border-radius: 5px;
            font-size: 13px; 
            border: 1px solid #ccc;
            text-align: center;
            line-height: 27px;
            background: #fff;
          }
        }
        .unfoldActive {
            color: #ff6700;
            border-color: #ff6700;
            background: #fde0d5; 
          }
      }
    }
  }
}
// 过渡
.fade-enter-active, fade-leave-active {
  transition: all 0.5s;
}
.fade-enter, fade-leave-to {
  opacity: 0;
}
</style>