import React from 'react';
import Head from 'next/head';
import ExchageRaterow from '@components/exchange-rate-row';
import exchageRates from 'mock/exchange-rates';
import styles from './currency-exchange.module.css';
export default function Bank() {
  const { exchange_rates } = styles;
  return (
    <div>
      <Head>
        <title>Currency Exchange</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={exchange_rates}>
        {exchageRates.map((row) => (
          <ExchageRaterow {...row} key={row.id} />
        ))}
      </div>
    </div>
  );
}
