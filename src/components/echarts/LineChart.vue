<template>
  <div :id="id" style="width:100%;height:200px;"></div>
</template>

<script>
import echarts from 'echarts'

export default {
    data() {
        return {
            myChart: null,
            data: [],
            now: new Date(2019, 9, 3),
            oneDay: 24 * 3600 * 1000,
            value: Math.random() * 1000
        }
    },
    mounted() {
        this.myChart = echarts.init(document.getElementById(this.id));
        this.myChart.setOption(this.readyLineChartOption());
        // this.intervalRefresh()
    },
    props: ['id'],
    methods: {
        readyLineChartOption() {
            for (var i = 0; i < 1000; i++) {
                this.data.push(this.randomData());
            }
            let option = {
                title: {
                    text: 'OEE',
                    textStyle: {
                        fontSize: 13,
                        fonWeight: 100
                    },
                    // textAlign: 'center',
                    // left: '50%',
                    top: '20px'
                },
                tooltip: {
                    trigger: 'axis',
                    formatter: function (params) {
                        params = params[0];
                        let date = new Date(params.name);
                        return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
                    },
                    axisPointer: {
                        animation: false
                    }
                },
                xAxis: {
                    type: 'time',
                    splitLine: {
                        show: false
                    }
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: [0, '100%'],
                    splitLine: {
                        show: false
                    }
                },
                series: [{
                    name: '模拟数据',
                    type: 'line',
                    showSymbol: false,
                    hoverAnimation: false,
                    data: this.data
                }]
            }
            return option;
        },
        randomData() {
            this.now = new Date(this.now + this.oneDay);
            this.value = this.value + Math.random() * 21 - 10;
            return {
                name: this.now.toString(),
                value: [
                    [this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'),
                    Math.round(this.value)
                ]
            }
        },
        intervalRefresh() {
            if (this.myChart) {
                setInterval(() => {
                    for (var i = 0; i < 5; i++) {
                        this.data.shift();
                        this.data.push(this.randomData());
                    }
                    this.myChart.setOption({
                        series: [{
                            data: this.data
                        }]
                    });
                }, 1000);
            }
        },
    },
    watch: {
        id: () => this.readyPieChartOption(),
        // value: () => this.intervalRefresh()
    },
}
</script>

<style scoped>

</style>