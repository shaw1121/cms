<template>
  <div class="news">
      <NavBar title="新闻列表"></NavBar>
      <div class="newsList">
        <ul>
          <li v-for='(news) in newsList' :key="news.id">
            <!-- // /news/detail?id=1 -->
            <router-link :to="{name: 'newsDetail', query: {id: news.id}}">
              <div class="news_img">
                <img :src="news.img_url" alt="">
              </div>

              <div class="content">
                <p class="title">{{news.title}}</p>
                <div class="news-des">
                  <p class="summary">{{news.summary}}</p>
                  <p>
                    <span class="praise">
                      点赞数：{{news.click}}
                    </span>
                    <span class="time">
                      发表时间：{{news.add_time | convertTime('YYYY-MM-DD')}}
                    </span>
                  </p>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>

const newsList = [
  {
    id: '1',
    summary: '上海市委宣传部副部长徐炯20日在沪宣布,中国近现代新闻出版博物馆正式落户上海杨浦。... (王笈)上海市委宣传部副部长徐炯20日在沪宣布,中国近现代新闻出版博物馆正式亮相。',
    click: '2323',
    add_time: '2019-02-03T02:30:23Z',
    img_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566305780140&di=90f07c2708786aed20c7b65ab2d849e1&imgtype=0&src=http%3A%2F%2Fimg005.hc360.cn%2Fk1%2FM09%2F5A%2FCD%2FwKhQwFe-XdKETrD7AAAAAMlpCMI236.jpg',
    title: '假新闻大师,既能看出 92% 的假新闻,也能写高质量假新闻'
  },
  {
    id: '2',
    summary: '20日，在香港警方例行记者会上，一名来自内地的女记者被港媒记者围堵，原因是他们认为该记者在记者会上拍摄了其他在场记者。',
    click: '2323',
    add_time: '2019-08-21',
    img_url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1036218379,1213399244&fm=26&gp=0.jpg',
    title: '被港媒围堵内地女记者:这就是你们嘴里的新闻自由吗'
  },
  {
    id: '3',
    summary: '20日，在香港警方例行记者会上，一名来自内地的女记者被港媒记者围堵，原因是他们认为该记者在记者会上拍摄了其他在场记者。',
    click: '2323',
    add_time: '2019-08-21',
    img_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566969997&di=7e28069e837f36cf3cc6252fced0ff79&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201404%2F24%2F20140424153000_njnLA.jpeg',
    title: '被港媒围堵内地女记者:这就是你们嘴里的新闻自由吗'
  },
  {
    id: '4',
    summary: '20日，在香港警方例行记者会上，一名来自内地的女记者被港媒记者围堵，原因是他们认为该记者在记者会上拍摄了其他在场记者。',
    click: '2323',
    add_time: '2019-08-21',
    img_url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1036218379,1213399244&fm=26&gp=0.jpg',
    title: '被港媒围堵内地女记者:这就是你们嘴里的新闻自由吗'
  }
]

export default {
  data () {
    return {
      newsList
    }
  }
}
</script>

<style>
.news {
  padding-bottom: 100px;
}

.newsList {
  width: 100%;
  font-size: 12px;
  /* border-bottom: 1px solid #CCCCCC; */
  margin-top: 20px;
  margin-left: 25px;
}

.newsList ul li {
  position: relative;
  margin-top: 35px;
}

.newsList ul li a {
  display: flex;
  width: 100%;
  height: 150px;
  color: #808080;
  text-decoration: none;
}

.news_img {
  width: 30%;
  /* text-align: center; */
  display: flex;
  align-items: center;
  justify-content: center;
}

.news_img img {
  height: 150px;
  width: 150px;
}


.content {
  margin-left: 25px;
  word-wrap: break-word;
  word-break: break-all;
  text-align: justify;
  width: 200px;
}

.content .title {
  font-size: 15px;
  display: inline-block;
  color: #131f3c;
  letter-spacing: 0;
  padding-bottom: 7px;
  margin-top: 10px;
}

.news-des span {
  color: #ff6700;
}

.time {
  margin-left: 30px;

}

.summary {
  padding: 5px 0;
}

</style>