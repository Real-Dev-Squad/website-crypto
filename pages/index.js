import Head from 'next/head';

import { useState } from 'react';
import transactionData from '../mock/transaction.json';
import personData from '../mock/person.json';
import TransactionList from '../components/transaction-details';
import PersonDetail from '../components/user-info';
import Filter from '../components/filter';
import { Footer } from '../components/footer';
import styles from '../styles/Home.module.css';
import TransactionChart from '../components/transaction-chart/index.js';

//TODO : take out the filter logic
export default function Home() {
  const [transaction, setTransaction] = useState(transactionData);
  // const [modal, showModal] = useState(false);
  const handleCreditSort = () => {
    let newCreditList = transactionData.filter(
      (item) => item.type === 'Credit'
    );
    setTransaction(newCreditList);
  };

  const handleDebitSort = () => {
    let newCreditList = transactionData.filter((item) => item.type === 'Debit');
    setTransaction(newCreditList);
  };

  const showOriginal = () => {
    setTransaction(transactionData);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>RDS-MicroTransaction</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* TODO - Fix one header component to be used across all the pages  */}
      <div className={styles.header}>
        <div className={styles.branding}>
          <img
            className={styles.logo}
            src="https://staging-members-rds.herokuapp.com/images/Real-Dev-Squad@1x.png"
            alt="RealDevSquad Logo"
          />
          <div className={styles.rdsName}>Real Dev Squad</div>
        </div>

        <div className={styles.coins}>
          <div className={`${styles.coin} ${styles.gold}`}></div>
          <div className={`${styles.coin} ${styles.silver}`}></div>
          <div className={`${styles.coin} ${styles.bronze}`}></div>
        </div>
      </div>
      {/* Header End */}

      <div className={styles.sidebar}>
        <PersonDetail personDetails={personData} />
        <div className={`${styles.button} ${styles.greenButton}`}>Send</div>
        <div className={`${styles.button} ${styles.redButton}`}>Receive</div>
      </div>
      <div className={`${styles.card} ${styles.content}`}>
        <div className={`${styles.heading}`}>
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/810/810375.svg"
            className="icon"
            alt="Transaction Icon"
          />
          Transactions
        </div>
        <Filter
          handleCreditSort={handleCreditSort}
          handleDebitSort={handleDebitSort}
          showOriginal={showOriginal}
        />
        <TransactionList transactions={transaction} />
      </div>
      <div className={`${styles.card}`}>
        <TransactionChart />
      </div>
      <Footer />
    </div>
  );
}
