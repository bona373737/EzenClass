import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const BarChartView = React.memo(({chartData})=>{
    const options = {
        indexAxis : 'x',
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom' 
          },
          title: {
            display: true,
            text: '관람객 수 순위',
          },
        },
      };

    const data = {
        //x축에 나타날 항목들
        labels: chartData.movieNm,
        datasets:[{
            labels:'관람객 수',
            backgroundColor: '#0066ff44',
            borderColor: '#0066ff',
            borderWidth: 1,
            //그래프 각 항목별 y축 수치값
            data: chartData.audiCnt,
        }]
    };

    return(
        <Bar
            data={data}
            options={options}
        />
    );
})

BarChartView.defaultProps={
    chartData: {
        movieNm: [], audiCnt: []
    }
}

export default BarChartView;