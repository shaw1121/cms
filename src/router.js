import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Home from './components/Home.vue'
import Search from './components/Search.vue'
import ShoppingCart from './components/Cart/ShoppingCart.vue'
import Vip from './components/Vip.vue'
import NewsList from './components/News/NewsList.vue'
import NewsDetail from './components/News/NewsDetail.vue'
import PhotoGallery from './components/Photo/PhotoGallery.vue'
import PhotoDetail from './components/Photo/PhotoDetail.vue'
import GoodsList from './components/Goods/GoodsList.vue'
import ReportTable from './components/Report/ReportTable.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/vip',
      name: 'vip',
      component: Vip
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/cart',
      name: 'shoppingcart',
      component: ShoppingCart
    },
    {
      path: '/news/list',
      name: 'newsList',
      component: NewsList
    },
    {
      path: '/news/detail',
      name: 'newsDetail',
      component: NewsDetail,
      props: {
        title: '新闻详情'
      }
    },
    {
      path: '/photo/:categoryId', // /photo/23
      name: 'photoGallery',
      component: PhotoGallery
    },
    {
      path: '/photo/detail',
      name: 'photoDetail', // photo/detail?id=3
      component: PhotoDetail,
      props: {
        title: '图文详情 '
      }
    },
    {
      path: '/goods/list',
      name: 'goodsList',
      component: GoodsList
    },
    {
      path: '/report',
      name: 'reportTable',
      component: ReportTable
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
