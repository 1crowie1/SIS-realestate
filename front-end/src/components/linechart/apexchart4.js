import React from "react";
import ReactApexChart from "react-apexcharts";

function Graph4() {
    const series = [
      {
        name: "Average Price",
        data: [1200,
            1500,
            1600,
            1450,
            1500,
            1600,
            1500,
            1440,
            1440 ],
      },
      
    ];
    const options = {
      dataLabels: {
        enabled: false,
        
      },
      legend:{
        show: false,
      },
      grid: {
        show: false,
      },
      stroke: {
        curve: "smooth",
      },
      yaxis:{
        show: false,
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
      },

      xaxis: {
        show: false,
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
        categories: [
          "1/22/20",
          "2/1/20",
          "2/15/20",
          "3/1/20",
          "3/15/20",
          "4/1/20",
          "4/15/20",
          "5/1/20",
          "5/7/20",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy",
        },
      },
    };
  
    return (
      <div
        style={{
          textAlign: "center",
          
        }}
      >
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={150}
          
        />
      </div>
    );
  }
  
  export default Graph4;