import React from 'react';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';

var options = {
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

function Chart({
  loader,
  stockSymbol,
  stockChange,
  date,
  stockPrice,
  changesColor,
}) {
  return <div className="stockChart"></div>;
}

export default Chart;
