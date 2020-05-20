<template>
  <div class="home">
    <top-bar/>
    <div class="main">
      <transition name="home">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import TopBar from './TopBar'

export default {
  name: 'home',
  components: {
    TopBar
  },
  data() {
    return {
      params: ''
    }
  },
  created() {
    //  this.$router.push({path: `/home/goodsclassify/推荐`})
  },
  activated() {
    // console.log('acrivaed')
    // this.$router.push({path: `/home/goodsclassify/${this.params}`})
  },
  deactivated() {
    // console.log('deacrivaed')
    // this.params = this.$router.params.id
  },
}
</script>

<style lang="scss" scoped>
.home {
  margin-bottom: 49px;
  .main {
    margin-top: 75px;
  }
}
.home-enter-active {
  transition: all 0.5s;
}
.home-enter {
  opacity: 0;
}

</style>