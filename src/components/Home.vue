<template>
  <div id="home">
    <mt-swipe :auto="4000" style="height: 250px;" class="swiper">
        <mt-swipe-item v-for='(item, index) in imgs' :key='index'>
            <img :src="item.url" alt="pic"/>
        </mt-swipe-item>
    </mt-swipe>

    <div class="list">
        <ul>
            <li v-for='grid in grids' :key="grid.id">
                <router-link :to="grid.router">
                    <img :src='grid.src' alt="">
                </router-link>

                <p>{{grid.title}}</p>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import src1 from '../assets/imgs/logo.png'
import realtime from '../assets/imgs/realtime.png'
import modeling from '../assets/imgs/modeling.png'
import history from '../assets/imgs/history.jpg'
import product from '../assets/imgs/product.png'
import assetsIcon from '../assets/imgs/assets.png'

const grids = [

    {
        id: 1,
        src: modeling,
        title: 'Modeling',
        router: {
            name: 'iotModeling'
        }
    },
    {
        id: 6,
        src: realtime,
        title: 'Real-Time data',
        router: {
            name: 'reportTable'
        }
    },
    {
        id: 7,
        src: history,
        title: 'History Data',
        router: {
            name: 'historyData'
        }
    },
    {
        id: 5,
        src: assetsIcon,
        title: 'Assets',
        router: {
            name: 'assetsList'
        }
    },
    // {
    //     id: 7,
    //     src: src1,
    //     title: 'News',
    //     router: {
    //         name: 'newsList'
    //     }
    // },
    {
        id: 2,
        src: product,
        title: 'Product Display',
        router: {
            name: 'photoGallery',
            params: { categoryId: 23 } // 默认
        }
    },
    // {
    //     id: 3,
    //     src: src1,
    //     title: 'Product Display',
    //     router: {
    //         name: 'goodsList'
    //     }
    // }
]

export default {
    name: 'home',
    data () {
        return {
            imgs: [],
            grids
        }
    },
    created () {
        // 真实项目中，请求后端数据
        this.imgs = [
            {
                // 此处必须要用require，或 import 导入资源，否则 webpack 打包解析不了
                // 任何静态资源都会被webpack 当作模块
                // https://github.com/vuejs-templates/webpack/issues/545
                url: require('../assets/imgs/iot.jpg')

            },
            {
                url: require('../assets/imgs/mdsp.jpg')
            },
            {
                url: require('../assets/imgs/industry.jpg')
            }
        ]
    }
}
</script>

<style scoped>
.swiper img {
    width: 100%;
    height: 250px;
}

.list {
    width: 100%;
    margin-top: 15px;
}

.list ul {
    display: flex;
    flex-wrap: wrap;
}

ul {
    list-style: none;
}

.list ul li {
    width: 33%;
    text-align: center;
    height: 100px;
    font-size: 14px;
}

.list ul li a {
    display: inline-block;
    width: 50px;
    height: 50px;
    margin: 0 auto;
}

.list ul li img {
    width: 50px;
}
</style>