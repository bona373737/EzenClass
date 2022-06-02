import dayjs from 'dayjs';
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);


const LineChartView = ({data,api}) => {
    const chartData = data?.map((v,i)=>{
        return(
            v[api]
        )
    })
    // console.log(chartData);
    const labels = data?.map((v,i)=>{
        const d = dayjs(v['date']).format('MM/DD')
        return d;
    })

    return( 
      <>
        <Line
        data={{
            labels: labels,
            datasets: [
                {
                    label: api,
                    data: chartData,
                    fill: true,
                    backgroundColor: "rgba(75,192,192,0.2)",
                    borderColor: "rgba(75,192,192,1)"
                },
            ]
        }}
        />
    </>
    )
};

export default LineChartView;

