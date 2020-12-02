import Head from 'next/head';
import Navbar from '../components/navbar';
import transactionData from '../mock/transaction.json';
import personData from '../mock/person.json';
import transactionChartData from '../mock/transaction-graph-data.json';
import TransactionList from '../components/transaction-details';
import coinsData from '../mock/coins.json';
import CoinsStatus from '../components/coins-status';
import { Footer } from '../components/footer';
import styles from '../styles/Home.module.css';
import TransactionChart from '../components/transaction-chart';
import NavBar from '@components/NavBar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className={styles.homeContainer}>
        <Head>
          <title>Bank Dashboard</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar personData={personData} />
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
        </div>
        <div className={styles.homeFooter}>
          {' '}
          <Footer />
        </div>
      </div>
    </div>
  );
}
