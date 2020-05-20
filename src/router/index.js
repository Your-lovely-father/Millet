import Vue from 'vue'
import Router from 'vue-router'

// 使用路由懒加载，提升首页的加载速度
const Home = () => import('../views/home/Home')
const GoodsClassify = () => import('../views/home/homecontent/GoodsClassify')


const Classify = () => import('../views/classify/Classify') 
const ShopingCart = () => import('../views/shopingcart/ShopingCart')
const About = () => import('../views/about/About')


Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home/goodsclassify/推荐'
    },
    {
      path: '/home',
      redirect: '/home/goodsclassify/推荐',
      name: 'home', 
      component: Home,
      children: [
        {
          path: '/home/goodsclassify/:id',
          component: GoodsClassify
        },
      ]
    },
    {path: '/classify',name: 'classify',component: Classify},
    {path: '/shopingcart',name: 'shopingcart',component: ShopingCart},
    {path: '/about',name: 'about',component: About},
  ]
})