<template>
  <div class="photoList">
      <NavBar title="Product list"></NavBar>
      <!-- <div class="category-list">
          <ul>
              <li v-for='(category, index) in categoryList' :key="category.id" @click="categoryClickHandler(category.id, index)">
                <a href="javascript:void(0);" :class="{active:index==currentIndex}">{{category.title }} </a>
              </li>
          </ul>
      </div> -->

      <!-- 图片展示区域 -->
      <div class="photo-list">
          <ul>
              <li v-for="photo in photoList" :key="photo.id">
                <router-link :to="{name: 'photoDetail', query: {id: photo.id}}">
                    <img v-lazy="photo.img_url" alt="">
                </router-link>
                <p>
                    <span>{{photo.title}}</span>
                    <br/>
                    <span>{{photo.summary}}</span>
                </p>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>

import axios from 'axios'
// import { Toast } from 'mint-ui'

import pic from '../../assets/imgs/plc.jpg'
import pic1 from '../../assets/imgs/plc1.jpg'
import pic2 from '../../assets/imgs/plc2.jpg'
import pic3 from '../../assets/imgs/plc3.jpg'
import pic4 from '../../assets/imgs/plc4.jpg'
import pic5 from '../../assets/imgs/plc5.jpg'
import pic6 from '../../assets/imgs/plc6.jpg'

// const photoList = [
//     {
//         id: 23,
//         title: 'teststete',
//         img_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566305780140&di=90f07c2708786aed20c7b65ab2d849e1&imgtype=0&src=http%3A%2F%2Fimg005.hc360.cn%2Fk1%2FM09%2F5A%2FCD%2FwKhQwFe-XdKETrD7AAAAAMlpCMI236.jpg',
//         summary: '难能可贵的是他始终保留着这个一生的习惯难能可贵的是他始终保留着这个一生的习惯难能可贵的是他始终保留着这个一生的习惯难能可贵的是他始终保留着这个一生的习惯'
//     },
//     {
//         id: 223,
//         title: 'TITLE',
//         img_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566305780140&di=90f07c2708786aed20c7b65ab2d849e1&imgtype=0&src=http%3A%2F%2Fimg005.hc360.cn%2Fk1%2FM09%2F5A%2FCD%2FwKhQwFe-XdKETrD7AAAAAMlpCMI236.jpg',
//         summary: '不知道的以为他已经去世了'
//     },
//         {
//         id: 123,
//         title: 'teststete',
//         img_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566305780140&di=90f07c2708786aed20c7b65ab2d849e1&imgtype=0&src=http%3A%2F%2Fimg005.hc360.cn%2Fk1%2FM09%2F5A%2FCD%2FwKhQwFe-XdKETrD7AAAAAMlpCMI236.jpg',
//         summary: '难能可贵的是他始终保留着这个一生的习惯'
//     },
//     {
//         id: 2243,
//         title: 'TITLE',
//         img_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566305780140&di=90f07c2708786aed20c7b65ab2d849e1&imgtype=0&src=http%3A%2F%2Fimg005.hc360.cn%2Fk1%2FM09%2F5A%2FCD%2FwKhQwFe-XdKETrD7AAAAAMlpCMI236.jpg',
//         summary: '不知道的以为他已经去世了'
//     },
//         {
//         id: 243,
//         title: 'teststete',
//         img_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566305780140&di=90f07c2708786aed20c7b65ab2d849e1&imgtype=0&src=http%3A%2F%2Fimg005.hc360.cn%2Fk1%2FM09%2F5A%2FCD%2FwKhQwFe-XdKETrD7AAAAAMlpCMI236.jpg',
//         summary: '难能可贵的是他始终保留着这个一生的习惯'
//     },
//     {
//         id: 2423,
//         title: 'TITLE',
//         img_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566305780140&di=90f07c2708786aed20c7b65ab2d849e1&imgtype=0&src=http%3A%2F%2Fimg005.hc360.cn%2Fk1%2FM09%2F5A%2FCD%2FwKhQwFe-XdKETrD7AAAAAMlpCMI236.jpg',
//         summary: '不知道的以为他已经去世了'
//     }
// ];

const photoList = [
    {
        id: 20,
        title: 'SIMATIC IOT2040',
        img_url: pic,
        summary: 'is an IOT solution developed for industrial production. It is an open platform used to capture, process and transfer data in the production environment.'
    },
    {
        id: 26,
        title: 'SIMATIC IPC647E & IPC847E',
        img_url: pic6,
        summary: 'is high-performance, rugged and expandable industrial PCs in a 19" rack format. They offer customers high protection for their investment and reliable operation in especially rugged industrial environments'
    },
    {
        id: 21,
        title: 'teststete',
        img_url: pic1,
        summary: '难能可贵的是他始终保留着这个一生的习惯难能可贵的是他始终保留着这个一生的习惯难能可贵的是他始终保留着这个一生的习惯难能可贵的是他始终保留着这个一生的习惯'
    },
    {
        id: 22,
        title: 'teststete',
        img_url: pic2,
        summary: '难能可贵的是他始终保留着这个一生的习惯难能可贵的是他始终保留着这个一生的习惯难能可贵的是他始终保留着这个一生的习惯难能可贵的是他始终保留着这个一生的习惯'
    },
    {
        id: 23,
        title: 'teststete',
        img_url: pic3,
        summary: '难能可贵的是他始终保留着这个一生的习惯难能可贵的是他始终保留着这个一生的习惯难能可贵的是他始终保留着这个一生的习惯难能可贵的是他始终保留着这个一生的习惯'
    },
    {
        id: 24,
        title: 'teststete',
        img_url: pic4,
        summary: '难能可贵的是他始终保留着这个一生的习惯难能可贵的是他始终保留着这个一生的习惯难能可贵的是他始终保留着这个一生的习惯难能可贵的是他始终保留着这个一生的习惯'
    },
        {
        id: 25,
        title: 'teststete',
        img_url: pic5,
        summary: '难能可贵的是他始终保留着这个一生的习惯难能可贵的是他始终保留着这个一生的习惯难能可贵的是他始终保留着这个一生的习惯难能可贵的是他始终保留着这个一生的习惯'
    }

];

const categoryList = [
    {
        title: '家居生活',
        id: 23
    },
    {
        title: '摄影设计',
        id: 2
    },
    {
        title: '空间设计',
        id: 233
    },
    {
        title: '户型装饰',
        id: 5
    },
    {
        title: '明星写真',
        id:6
    },
    {
        title: '绿茵赛场',
        id: 7
    }
]

export default {
    data() {
        return {
            photoList,
            categoryList,
            currentIndex: 0
        }
    },
    created () {
        // 
        axios.get('getImgCategory')
        .then(res => {
            // this.categoryList = res.data.message
        })
        .catch(err => {
            console.log('getImgCategory failed', err);
        })
    },
    methods: {
        categoryClickHandler(id, index) {
            this.currentIndex = index;

            this.$router.push({name: 'photoGallery', params: { categoryId: id}});
        },

        getPhotoByCategoryId(id) {
            axios.get('/getphotos/' + id) // 后端接口暂未实现
            .then(res => {
                console.log(res);
                // this.photoList = res.data;
                
                // 处理没有图片时的情况
                if (this.photoList.length === 0) {
                    this.$toast({
                        message: '没有图片',
                        duration: 2000,
                        iconClass: 'fa fa-meh-o'
                    })
                }
            })
            .catch(err => {
                console.log('获取数据失败');
                    this.$toast({
                        message: '获取数据失败',
                        duration: 2000,
                        iconClass: 'fa fa-meh-o'
                    })
            })
        }
    },
    beforeRouteUpdate (to, from, next) {
        console.log('to', to);
        next();

        this.getPhotoByCategoryId(to.params.categoryId);

    },
}
</script>

<style>
.category-list {
    width: 100%;
    height: 40px;
    overflow: hidden;
}

.category-list ul {
    width: 100%;
    height: 50px;
    overflow-y: hidden;
    overflow-x: scroll;
    white-space: nowrap;
}

.category-list ul li {
    display: inline-block;
    width: 25%;
    height: 100%;
    font-size: 18px;
    line-height: 40px;
    text-align: center;
}

.category-list ul li a {
    text-decoration: none;
    font-size: 16px;
}

.category-list ul li a.active {
    color: #FC0280;
}

.photo-list ul li {
    width: 100%;
    position: relative;
}

.photo-list ul li a {
    display: block;
    width: 100%;
}

.photo-list ul li a img {
    width: 100%;
}

.photo-list ul li p {
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, .2);
    padding: 5px 0;
    /* height: 100px; */
}

.photo-list ul li p span {
    color: #E6E6E6;
    font-size: 16px;
}

.photoList {
    padding-bottom: 100px;
}

/* 懒加载的实现 */
image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>