import React from 'react';
import { Line } from 'react-chartjs-2';
const options = {
  maintainAspectRatio: false,
  responsive: true,
  tooltips: { enabled: false },
  hover: { mode: null },
  layout: {
    padding: {
      bottom: 15,
    },
  },
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      },
    ],
    yAxes: [
      {
        display: false,
      },
    ],
  },
  elements: {
    point: {
      radius: 0,
    },
    line: {
      borderCapStyle: 'round',
      borderJoinStyle: 'round',
      tension: 1,
    },
  },
};
function chart({ dataArray }) {
  const data1 = (canvas) => {
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 600, 10);
    gradient.addColorStop(0, '#7c83ff');
    gradient.addColorStop(1, '#7cf4ff');
    let gradientFill = ctx.createLinearGradient(0, 0, 0, 100);
    gradientFill.addColorStop(0.1, 'rgba(124, 131, 255,.3)');

    gradientFill.addColorStop(0.8, 'rgba(255, 255, 255, 0)');
    ctx.shadowColor = 'rgba(124, 131, 255,.3)';
    ctx.shadowBlur = 5;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 4;
    return {
      labels: 'Employees Data',
      datasets: [
        {
          lineTension: 0.3,
          label: '',
          pointBorderWidth: 0,
          pointHoverRadius: 0,
          borderColor: gradient,
          backgroundColor: gradientFill,
          pointBackgroundColor: gradient,
          fill: true,
          borderWidth: 2,
          data: dataArray,
        },
      ],
    };
  };
  return (
    <div>
      <Line options={options} data={data1} />
    </div>
  );
}

export default chart;
