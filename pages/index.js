import Head from 'next/head';

import { useState } from 'react';
import transactionData from '../mock/transaction.json';
import personData from '../mock/person.json';
import CoinsData from '../mock/coins.json';
import TransactionList from '../components/transaction-details';
import PersonDetail from '../components/user-info';
import CoinsStatus from '../components/coins-status';
import Filter from '../components/filter';
import Button from '../components//Button';
import Modal from '../components/Modal';
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
      <div id="modal" />
      <div className={styles.wrapper}>
        <div className={styles.userinfo}>
          <PersonDetail personDetails={personData} />
        </div>
        <div className={styles.coinstatus}>
          <CoinsStatus coins={CoinsData} />
        </div>
        <div className={styles.transactions}>
          <Filter
            handleCreditSort={handleCreditSort}
            handleDebitSort={handleDebitSort}
            showOriginal={showOriginal}
          />
          <TransactionList transactions={transaction} />
        </div>
        <div className={styles.transactionButton}>
          {modal ? <Modal showModal={modal} /> : null}
          <Button clickHandler={() => showModal(true)} color="green">
            Send
          </Button>
          <Button clickHandler={() => showModal(true)} color="pink">
            Receive
          </Button>
        </div>
      </div>
    </div>
  );
}
