<template>
  <div>
      <NavBar title="History Data"></NavBar>
      <div>
          <!-- Asset: <input type="text" value="">
          Indicator: <input type="text" value=""> -->
        <mt-field label="Asset" placeholder="Choose Asset" v-model="username"></mt-field>
        <!-- <mt-field label="Indicator" placeholder="choose " type="email" v-model="email"></mt-field> -->

        <!-- Time Range -->
        <mt-field label="From" placeholder="Enter From Day" type="date" v-model="fromDay"></mt-field>
        <mt-field label="To" placeholder="Enter To Day" type="date" v-model="toDay"></mt-field>

        Indicator
        <Select2 :options="options" v-model="selected">
          <option disabled value="0">Select one</option>
        </Select2>

        Value Type
        <Select2 :options="type_options" v-model="type_selected">
          <option disabled value="0">Select one</option>
        </Select2>
      </div>
        
      <div>
          <StackedLineChart id="stacked-linechart"></StackedLineChart>
      </div>
      <hr>
      <div>
          <PieChartAll id="all_piechart"></PieChartAll>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            selected: 1,
            options: [
                { id: 1, text: 'OEE' },
                { id: 2, text: 'Performence' },
                { id: 3, text: 'Availability' },
                { id: 4, text: 'Quality' }
            ],
            type_selected: 4,
            type_options: [
                { id: 1, text: 'day' },
                { id: 2, text: 'hour' },
                { id: 3, text: 'minute' },
                { id: 4, text: 'percentage' }
            ],
            username: 'xiao_test',
            fromDay: '',
            toDay: ''
        }
    }
}
</script>

<style scoped>
input {
    width: 300px;
}
</style>