<template>
  <div class="detail">
      <!-- <NavBar :title="title"></NavBar> -->
      <NavBar title="Product details"></NavBar>
      <div class="photo-title">
          <p>{{details.title}}</p>
          <span>Publish Day：2019-09-11</span>
          <span>Browse: 23</span>
          <!-- <span>分类：民生经济</span> -->
      </div>

        <div class="detail-content">
            {{details.content}}
        </div>

      <ul>
          <li>
            <a href="javascript:void(0)">
                <img src="" alt="">
            </a>
          </li>
      </ul>

      <div class="photo-desc">
          <p>My Comments here</p>
      </div>

      <!-- 评论组件 -->

  </div>
</template>

<script>

const details = {
    title: 'SIMATIC IOT2040',
    content: 'The Siemens SIMATIC IOT2040 Gateway is an IOT solution developed for industrial production. It is an open platform used to capture, process and transfer data in the production environment. The SIMATIC IOT2040 Gateway supports engineers, developers and manufacturers. It can be used as a gateway between the cloud and the IT level of your company and your production. The gateway can operate around the clock and is the link between cloud and production-based data analysis. The Siemens SIMATIC IOT2040 Gateway combines the tasks of connecting to your ERP system and communicating with the automation components. It also reduces errors and increases the production process. The gateway interface can be used in both directions to transmit data from the cloud for production control. This complete data communication optimizes production by closing the control loop.'
}

const imgInfo = {
    title: '23',
    add_time: '',
    click: ''
};

export default {
    // name: 'PhotoDetail'

    data() {
        return {
            imgInfo,
            details
        }
    },
    props: ['title'],
    created() {

    }
}
</script>

<style scoped>

.detail-content {
    padding: 3px 3px;
    padding-bottom: 80px;
    text-align: justify;
    text-indent: 2em;
}

span {
    margin-right: 20px;
    color: #999999;
}

.photo-title p {
    color: rgb(21, 45, 68);
    font-size: 24px;
    font-weight: 600;
}
</style>