import React from 'react';
import { Line } from 'react-chartjs-2';
import { useState, useEffect } from 'react/cjs/react.development';
import styles from './transaction-chart.module.css';
const TransactionChart = (props) => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: [
        '09/23/2020',
        '09/24/2020',
        '09/25/2020',
        '09/26/2020',
        '09/27/2020'
      ],
      datasets: [
        {
          label: 'Credit',
          fill: false,
          data: [10, 23, 56, 68, 21],
          borderColor: ['rgba(42,187,155,0.9)'],
          pointBorderColor: ['rgba(42,187,155,0.9)'],
          borderWidth: 4
        },
        {
          label: 'Debit',
          fill: false,
          data: [5, 13, 46, 58, 1],
          borderColor: ['rgba(255,0,0,06)'],
          pointBorderColor: ['rgba(255,0,0,0.6)'],
          borderWidth: 4
        }
      ]
    });
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div className={styles.transactionCard}>
      <Line
        data={chartData}
        options={{
          responsive: true,

          title: { text: 'RDS Transaction', display: true },
          scales: {
            yAxes: [
              {
                ticks: {
                  autoSkip: true
                },
                gridLines: {
                  display: true
                }
              }
            ],
            xAxes: [
              {
                gridLines: {
                  display: true
                }
              }
            ]
          }
        }}
      />
    </div>
  );
};

export default TransactionChart;
