import React from 'react';
import { Line } from 'react-chartjs-2';
import { useState, useEffect } from 'react/cjs/react.development';
import styles from './transaction-chart.module.css';
const TransactionChart = (props) => {
  console.log('gm');
  const { labels, datasets, title, scales } = props.transactionChartData;
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: labels,
      datasets: datasets
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
          title: title,
          scales: scales
        }}
      />
    </div>
  );
};

export default TransactionChart;
