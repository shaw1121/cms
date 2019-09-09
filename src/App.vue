<template>
  <div id="app">
    <mt-header fixed title="资产管理系统">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <router-view/>

    <mt-tabbar fixed v-model="selected">
      <mt-tab-item id="home">
        <!-- <img slot="icon" src="../assets/100x100.png"> -->
        <i class="fa fa-tachometer" aria-hidden="true"></i>
        首页
      </mt-tab-item>
      <mt-tab-item id="vip">
        <!-- <img slot="icon" src="../assets/100x100.png"> -->

        会员
      </mt-tab-item>
      <mt-tab-item id="shoppingcart">
        <!-- <img slot="icon" src="../assets/100x100.png"> -->
        购物车
      </mt-tab-item>
      <mt-tab-item id="search">
        <!-- <img slot="icon" src="../assets/100x100.png"> -->
        查找
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      selected:''
    }
  },
  watch: {
    selected: function(oldV, newV) {
      this.$router.push({name: this.selected});
    }
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
