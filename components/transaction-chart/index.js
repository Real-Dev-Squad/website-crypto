import { Line } from 'react-chartjs-2';
import { useState, useEffect } from 'react';
import styles from './transaction-chart.module.css';

function getDataset(transactionData) {
  let dataLabels = [];
  let creditData = [];
  let debitData = [];
  for (let eachTransaction of transactionData) {
    dataLabels.push(eachTransaction.timeStamp);
    if (eachTransaction.data[0].type === 'credit') {
      creditData.push(eachTransaction.data[0].amount) || creditData.push(0);
    }
    if (eachTransaction.data[1].type === 'debit') {
      debitData.push(eachTransaction.data[1].amount) || debitData.push(0);
    }
  }
  return {
    labels: dataLabels,
    datasets: [
      {
        label: 'Credit',
        fill: false,
        data: creditData,
        borderColor: ['rgba(42,187,155,0.9)'],
        pointBorderColor: ['rgba(42,187,155,0.9)'],
        borderWidth: 4,
      },
      {
        label: 'Debit',
        fill: false,
        data: debitData,
        borderColor: ['rgba(255,0,0,06)'],
        pointBorderColor: ['rgba(255,0,0,0.6)'],
        borderWidth: 4,
      },
    ],
  };
}

const TransactionChart = (props) => {
  const [chartData, setChartData] = useState({});
  const chart = () => {
    setChartData(getDataset(props.transactionChartData));
  };

  useEffect(() => {
    chart();
  }, [chart]);

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
                  autoSkip: true,
                },
                gridLines: {
                  display: true,
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  display: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default TransactionChart;
