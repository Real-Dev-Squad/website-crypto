import React from 'react';
import Head from 'next/head';
import personData from 'mock/person.json';
import NavBar from '@components/NavBar';
import ExchageRaterow from '@components/exchange-rate-row';
import exchageRates from 'mock/exchange-rates';
import styles from './currency-exchange.module.css';
import GlobalStyles from '@components/Dark-Theme/globalStyles';
import { ThemeProvider } from 'styled-components';
import { useDarkModeContext } from 'stores/dark-mode-context';
export default function Bank() {
  const { exchange_rates } = styles;
  const [
    theme,
    themeData,
    themeToggler,
    mountedComponent,
  ] = useDarkModeContext();

  if (!mountedComponent) return <div />;
  return (
    <ThemeProvider theme={themeData}>
      <>
        <GlobalStyles />
        <div>
          <Head>
            <title>Currency Exchange</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <NavBar personData={personData} />
          <div className={exchange_rates}>
            {exchageRates.map((row) => (
              <ExchageRaterow {...row} key={row.id} />
            ))}
          </div>
        </div>
      </>
    </ThemeProvider>
  );
}
