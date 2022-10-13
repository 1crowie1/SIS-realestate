import React from 'react';
import { Line } from 'react-chartjs-2';
import './linechart.css'

function linechart() {

    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "First dataset",
            data: [2, 5, 5, 4, 3, 6],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
          
        ]
      };

    return <Line data={data} />
}    







export default linechart;