import Head from 'next/head';
import Link from 'next/link';
import transactionData from '../mock/transaction.json';
import personData from '../mock/person.json';
import transactionChartData from '../mock/transaction-graph-data.json';
import TransactionList from '../components/transaction-details';
import coinsData from '../mock/coins.json';
import CoinsStatus from '../components/coins-status';
import { Footer } from '../components/footer';
import styles from '../styles/Home.module.css';
import TransactionChart from '../components/transaction-chart';
import OperationModal from '@components/operationModal';
import { useState } from 'react';

export default function Home() {
  const [transactionType, setTransactionType] = useState('');
  return (
    <div className={styles.homeContainer}>
      <Head>
        <title>Bank Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.homeHeader}>
        <div className={styles.navBar}>
          <ul>
            <li>
              <img
                className={styles.logo}
                src="https://staging-members-rds.herokuapp.com/images/Real-Dev-Squad@1x.png"
                alt="RealDevSquad Logo"
              />
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/cart">Cart</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.homeLogin}>
        <p></p>
        <img
          src={personData.photo}
          className={styles.profilePic}
          alt="Profile Image"
          height="80"
          width="80"
        />
      </div>
      <div className={styles.homeUser}>
        <CoinsStatus coins={coinsData} />
        <div className={`${styles.button} ${styles.greenButton}`}>Send</div>
        <div className={`${styles.button} ${styles.redButton}`}>Receive</div>
      </div>
      <div className={styles.homeTransaction}>
        <div className={styles.transactionGraph}>
          <TransactionChart transactionChartData={transactionChartData} />
        </div>
        <div className={styles.transactionMenu}>
          <div className={`${styles.card} ${styles.content}`}>
            <div className={`${styles.heading}`}>
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/810/810375.svg"
                className="icon"
                alt="Transaction Icon"
              />
            </div>
            <TransactionList transactions={transactionData} />
          </div>
        </div>
        <div>
          <OperationModal
            transactionType={transactionType}
            personData={personData}
          />
        </div>
      </div>
      <div className={styles.homeFooter}>
        {' '}
        <Footer />
      </div>
    </div>
  );
}
