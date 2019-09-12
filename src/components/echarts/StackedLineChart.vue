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
        this.myChart.setOption(this.readyStackLineChartOption());
    },
    props: ['id'],
    methods: {
        readyStackLineChartOption() {
            let option = {
                title: {
                    text: 'OEE Records',
                    textStyle: {
                        fontSize: 13,
                        fonWeight: 100
                    },
                    // textAlign: 'center',
                    // left: '50%',
                    top: '20px'
                },
                tooltip: {
                    trigger: 'axis'
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon.','Tue.','Wed.','Thu.','Fri.']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name:'var1',
                        type:'line',
                        stack: '总量',
                        data:[120, 132, 101, 134, 90]
                    },
                    {
                        name:'var2',
                        type:'line',
                        stack: '总量',
                        data:[220, 182, 191, 234, 290]
                    },
                    {
                        name:'var3',
                        type:'line',
                        stack: '总量',
                        data:[150, 232, 201, 154, 190]
                    },
                    {
                        name:'var4',
                        type:'line',
                        stack: '总量',
                        data:[320, 332, 301, 334, 330]
                    }
                ]
            };
            return option
        }

    },
    beforeDestroy() {
        if (!this.myChart) {
            return
        }
        this.myChart.dispose();
        this.myChart = null;
    },
    watch: {
        id: () => this.readyStackLineChartOption()
    },
}
</script>

<style>

</style>