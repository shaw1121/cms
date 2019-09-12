<template>
  <div class="">
      <NavBar title="Real-time data"></NavBar>
      <div class="data-type">
        <!-- <mt-button class="real-time" type="primary">Real-time data</mt-button>
        <mt-button class="history-data" type="primary">History data</mt-button> -->

        <!-- <h3>Real-time data of assets</h3> -->
      </div>

      <!-- <div> -->
        <p>Workshop</p>
        <Select2 :options="options" v-model="selected">
          <option disabled value="0">Select one</option>
        </Select2>
      <!-- </div> -->

      <div style="width: 100%;">
        <p>Line</p>
        <br>
        <Select2 :options="lineOptions" v-model="lineSelected">
          <option disabled value="0">Select one</option>
        </Select2>
      </div>

        <div style="width: 100%;">
          <p>Equipment</p>
          <Select2 :options="equipmentOptions" v-model="equipmentSelected">
            <option disabled value="0">Select one</option>
          </Select2>
        </div>

      <!-- </div> -->

      <diV class="pie-list">
        <ul>
          <li>
            <PieChart id="pie_chart1" :pie-data="oeeData"></PieChart>
          </li>
          <li><PieChart id="pie_chart2" :pie-data="qualityData"></PieChart></li>
          <li><PieChart id="pie_chart3" :pie-data="avaData"></PieChart></li>
          <li><PieChart id="pie_chart4" :pie-data="performData"></PieChart></li>
        </ul>
      </diV>

      <div class="realtime_status">
        Last updated at 2019/09/10 12:23
      </div>

      <div class="line-chart">
        <LineChart id="line_oee"></LineChart>
      </div>
    <!-- </div> -->

  </div>
</template>

<script>
// import $ from 'jquery'

export default {
  data() {
    return {
      selected: 5,
      equipmentSelected: 5,
      lineSelected: 5,
      options: [
        { id: 2, text: 'WSA' },
        { id: 3, text: 'WSB' },
        { id: 4, text: 'WSC' },
        { id: 5, text: 'WSD' }
      ],
      lineOptions: [
        { id: 2, text: 'S7-200' },
        { id: 3, text: 'S7-1200' },
        { id: 4, text: 'SMT2' },
        { id: 5, text: 'SMT3' }
      ],
      equipmentOptions: [
        { id: 2, text: 'I2530' },
        { id: 3, text: 'HN953463' },
        { id: 4, text: 'HN953465' },
        { id: 5, text: 'HN953466' }
      ],
      oeeData: {
        value: 23,
        name: 'OEE'
      },
      qualityData: {
        value: 54,
        name: 'QUA'
      },
      avaData: {
        value: 86,
        name: 'AVA'
      },
      performData: {
        value: 53,
        name: 'PER'
      }
    }
  }
}
</script>

<style scoped>

.data-type {
  margin-top: 5px;
}

.history-data {
  margin-left: 20px;
}

p {
  float: left;
}

.pie-list {
  width: 100%;
  margin-top: 10px;
}

ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
}

ul li {
    width: 50%;
    text-align: center;
}

.line-chart {
  margin-bottom: 50px
}

select {
  width: 100%
}

h3 {
  /* float: left; */
}

.realtime_status {
  margin-right: 5px;
  float: right;
}
</style>

