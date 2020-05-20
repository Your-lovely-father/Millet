<template>
  <div id="app">

    <transition name="center-content" >
        <router-view/>
    </transition>

    <tab-bar/>

  </div>
</template>

<script>
import TabBar from './views/home/TabBar'

export default {
  data() {
    return {
      active: 0,
      number: 0
    }
  },
  components:{
    TabBar,
  }
}
</script>

<style lang="scss" scoped>
#app {
  min-width: 320px;
  max-width: 700px;
  margin: 0px auto;
  overflow-x: hidden;
}
.center-content-enter-active {
  transition: all 0.3s;
}
.center-content-enter {
  opacity: 0;
}
</style>
