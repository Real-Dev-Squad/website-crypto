import Head from 'next/head';

import { useState } from 'react';
import transactionData from '../mock/transaction.json';
import personData from '../mock/person.json';
import CoinsData from '../mock/coins.json';
import TransactionList from '../components/transaction-details';
import PersonDetail from '../components/user-info';
import CoinsStatus from '../components/coins-status';
import Filter from '../components/filter';
import Button from '../components/Button';
import Modal from '../components/Modal';
import Header from '../components/header';
import styles from '../styles/Home.module.css';

//TODO : take out the filter logic
export default function Home() {
  const [transaction, setTransaction] = useState(transactionData);
  const [modal, showModal] = useState(false);
  const handleCreditSort = () => {
    let newCreditList = transactionData.filter(
      (item) => item.type === 'credit'
    );
    setTransaction(newCreditList);
  };

  const handleDebitSort = () => {
    let newCreditList = transactionData.filter((item) => item.type === 'debit');
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
      <Header />
      <div className={styles.sidebar}>
        <PersonDetail personDetails={personData} />
        <div class={`${styles.button} ${styles.greenButton}`}>Send</div>
        <div class={`${styles.button} ${styles.redButton}`}>Receive</div>
      </div >
      <div className={`${styles.card} ${styles.content}`}>
        <div className={`${styles.heading}`}>
          <img src="https://www.flaticon.com/svg/static/icons/svg/810/810375.svg" className={`${styles.icon}`} alt="icon" />
          Transactions
        </div>
        <TransactionList transactions={transaction} />
      </div>
    </div >
  );
}
