import React from 'react';
import Head from 'next/head';
import TransactionChart from '@components/transaction-chart';
import Breadcrumbs from '@components/breadcrumbs';
import ProfileSidebar from '@components/profile-sidebar';
import Wallets from '@components/wallets';
import ChartActions from '@components/chart-actions';
import transactionChartData from '../../mock/transaction-graph-data.json';
import personData from '../../mock/person.json';
import currencyData from '../../mock/coins.json';
import styles from './dashboard.module.css';

const links = ['home', 'dashboard'];

export default function Bank() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.dashboard}>
        <div className={styles.dashboard_main}>
          <Breadcrumbs links={links} />
          <Wallets currencyData={currencyData} />
          <div className={styles.chart}>
            <h2 data-testid="trasaction-title">RDS Transaction</h2>
            <ChartActions />
            <div className={styles.home_transaction}>
              <TransactionChart transactionChartData={transactionChartData} />
            </div>
          </div>
        </div>
        <ProfileSidebar personData={personData} />
      </div>
    </div>
  );
}
