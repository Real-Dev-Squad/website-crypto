import React from 'react';
import { Line } from 'react-chartjs-2';
import { useState, useEffect } from 'react/cjs/react.development';
import styles from './transaction-chart.module.css';
const TransactionChart = (props) => {
  const {
    transactionDates,
    creditData,
    debitData
  } = props.transactionChartData;
  const [chartData, setChartData] = useState({});
  const chart = () => {
    setChartData({
      labels: transactionDates,
      datasets: [
        {
          label: 'Credit',
          fill: false,
          data: creditData,
          borderColor: ['rgba(42,187,155,0.9)'],
          pointBorderColor: ['rgba(42,187,155,0.9)'],
          borderWidth: 4
        },
        {
          label: 'Debit',
          fill: false,
          data: debitData,
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
        width={500}
        height={300}
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
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
