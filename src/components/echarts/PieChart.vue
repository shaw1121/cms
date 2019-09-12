<template>
  <div :id="id" style="width:130px;height:100px;"></div>
</template>

<script>
import echarts from 'echarts'

export default {
    data() {
        return {
            myChart: null
        }
    },
    mounted() {
        this.myChart = echarts.init(document.getElementById(this.id));
        this.myChart.setOption(this.readyPieChartOption());
    },
    props: ['id', 'pieData'],
    methods: {
        readyPieChartOption() {
            let option = {
                // title: {
                //     text: 'OEE'
                // },
                tooltip : {
                    formatter: "{a} <br/>{b} : {c}%"
                },
                series: [{
                    name: '业务指标',
                    type: 'gauge',
                    startAngle:180,
                    endAngle:0,
                    radius:50,
                    axisLine: {
                        show:true,
                        // 属性lineStyle控制线条样式
                        lineStyle: {
                            width: 15,
                            color:[[0.3,'#ff797a'],[0.5,'#999'],[1, '#a3db41']]
                        }
                    },
                    splitLine:{
                        show:false,
                    },
                    axisTick:{
                        show:false,
                    },
                    axisLabel:{
                        show:false,
                    },
                    pointer:{
                        show: false,
                        length:'60px',
                        width:'3px',
                    },
                    detail: {
                        offsetCenter:[0,'0%'],
                        fontSize:14,
                        formatter:'{value}'
                    },
                    data: [
                        {value: this.pieData.value, name: this.pieData.name}
                    ]
                }]
            };
            return option;
        }
    },

    watch: {
        id: () => this.readyPieChartOption()
    },

    beforeDestroy() {
        if (!this.myChart) {
            return
        }
        this.myChart.dispose();
        this.myChart = null;
    }
}
</script>

<style>

</style>