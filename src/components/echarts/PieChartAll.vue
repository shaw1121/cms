<template>
  <div :id="id" style="width:100%;height:300px;"></div>
</template>

<script>
import echarts from 'echarts'

export default {

    data() {
        return {
            myChart: null,
        }
    },
    mounted() {
        this.myChart = echarts.init(document.getElementById(this.id));
        this.myChart.setOption(this.readyPieChartOption());
    },
    props: ['id'],
    methods: {
        readyPieChartOption() {
            let option = {
                title : {
                    text: 'Status Distribution',
                    x:'left',
                    textStyle: {
                        fontSize: 13,
                        fonWeight: 100
                    },
                },
                series : [
                    {
                        type: 'pie',
                        radius : '55%',
                        center: ['40%', '50%'],
                        data: [
                            {name: 'idle', value: 25},
                            {name: 'Working', value: 70},
                            {name: 'unknown', value: 5}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };
            return option;
        }
    }
}
</script>

<style>

</style>