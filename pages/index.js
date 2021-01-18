import Head from 'next/head';
import transactionData from '../mock/transaction.json';
import personData from '../mock/person.json';
import transactionChartData from '../mock/transaction-graph-data.json';
import TransactionList from '../components/transaction-details';
import coinsData from '../mock/coins.json';
import CoinsStatus from '../components/coins-status';
import { Footer } from '../components/footer';
import styles from '../styles/Home.module.css';
import TransactionChart from '../components/transaction-chart';
import TransactionOperationModal from '@components/transaction-operation-modal';
import NavBar from '@components/NavBar';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Head>
        <title>Bank Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar personData={personData} />
      <main className={styles.mainBody}>
        <div className={styles.homeUser}>
          <CoinsStatus coins={coinsData} />
          <TransactionOperationModal personData={personData} />
        </div>

        <div className={styles.homeTransaction}>
          <div className={styles.transactionGraph}>
            <div className={`${styles.card} ${styles.content}`}>
              <TransactionChart transactionChartData={transactionChartData} />
            </div>
          </div>
        </div>

        <div className={styles.transactionMenu}>
          <div className={`${styles.card} ${styles.content}`}>
            <div className={`${styles.heading}`}>
            <p> Latest Transactions</p>
            </div>
            <TransactionList transactions={transactionData} />
          </div>
        </div>
      </main>
      <div className={styles.homeFooter}>
        {' '}
        <Footer />
      </div>
    </div>
  );
}
