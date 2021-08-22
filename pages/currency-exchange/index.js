import React, { useState } from 'react';
import Head from 'next/head';
import personData from 'mock/person.json';
import NavBar from '@components/NavBar';
import exchangeRates from 'mock/exchange-rates.json';
import styles from './currency-exchange.module.css';
import ConfirmExchangeModal from '@components/ConfirmExchangeModal/ConfirmExchageModal';

const availableAmount = 60;

export default function Bank() {
  const [defaultCrypto, setDefaultCrypto] = useState('dinero');
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [enteredCryptoValue, setEnteredCryptoValue] = useState(null);
  const [confirmModalStatus, setConfirmModalStatus] = useState({
    open: false,
  });

  const handleSelectDefaultValue = (e) => {
    setSelectedCrypto(null);
    setDefaultCrypto(e.target.value);
  };

  const refreshHandler = () => {
    setSelectedCrypto(null);
    setDefaultCrypto('dinero');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setConfirmModalStatus({
      open: open,
    });
  };

  const handleCloseConfirmModal = () => {
    setConfirmModalStatus({
      open: false,
    });
  };

  return (
    <div>
      <Head>
        <title>Currency Exchange</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar personData={personData} />
      <div className={styles.exchange_container}>
        <div>
          <div className={styles.rates_header}>
            <div className={styles.default_curreny_selectbox}>
              <label htmlFor="default_currency">Default Currency</label>
              <select
                onChange={handleSelectDefaultValue}
                name="defaultCurrency"
                id="default_currency"
                value={defaultCrypto}
              >
                {Object.keys(exchangeRates).map((cryptoName) => (
                  <option value={cryptoName} key={cryptoName}>
                    {cryptoName.charAt(0).toUpperCase() + cryptoName.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <button onClick={refreshHandler}>Refresh</button>
            </div>
          </div>
          <hr className={styles.divider} />
          <div>
            <div className={styles.rates_container_header}>
              <span>Currency</span>
              <span>
                Exchange Rate (
                {defaultCrypto.charAt(0).toUpperCase() + defaultCrypto.slice(1)}
                )
              </span>
            </div>
            {Object.entries(exchangeRates[defaultCrypto]).map(
              ([cryptoName, cryptoRate], index) => (
                <div
                  onClick={() => setSelectedCrypto(cryptoName)}
                  key={index}
                  className={styles.crypto_row}
                  data-selected={selectedCrypto === cryptoName}
                >
                  <div className={styles.crypto_name}>
                    <img src="https://img.icons8.com/fluent/48/000000/apex-legends.png" />
                    {cryptoName}
                  </div>
                  <span className={styles.crypto_rate}>{cryptoRate}</span>
                </div>
              )
            )}
          </div>
        </div>
        <div>
          {selectedCrypto ? (
            <div className={styles.exchange_info_container}>
              <div className={styles.exchanging_title}>
                <div>
                  <img
                    src="https://img.icons8.com/fluent/48/000000/apex-legends.png"
                    alt="curreny_logo"
                  />
                  <p>{defaultCrypto}</p>
                </div>
                <span>⇛</span>
                <div>
                  <img
                    src="https://img.icons8.com/fluent/48/000000/apex-legends.png"
                    alt="curreny_logo"
                  />
                  <p>{selectedCrypto}</p>
                </div>
              </div>
              <hr />
              <div>
                <div>
                  <span>Available:&nbsp;</span>
                  <span>55 {defaultCrypto}</span>
                </div>
                <div>
                  <span>Exchange Limit:&nbsp;</span>
                  <span>
                    {Math.floor(
                      availableAmount /
                        exchangeRates[defaultCrypto][selectedCrypto]
                    )}
                    &nbsp;
                    {selectedCrypto}
                  </span>
                </div>
              </div>
              <form onSubmit={handleFormSubmit} className={styles.exchangeForm}>
                <label htmlFor="exchangeUserInput">
                  How much {selectedCrypto} do you want to get?
                </label>
                <input
                  min="1"
                  max={Math.floor(
                    availableAmount /
                      exchangeRates[defaultCrypto][selectedCrypto]
                  ).toString()}
                  required
                  type="number"
                  id="exchangeUserInput"
                  value={enteredCryptoValue}
                  onChange={(e) => setEnteredCryptoValue(e.target.value)}
                />
                <div>
                  <input type="submit" value="Exchange" />
                </div>
              </form>
            </div>
          ) : (
            <p className={styles.placeholder_text}>Please select a currency</p>
          )}
        </div>
      </div>
      <ConfirmExchangeModal
        showModal={confirmModalStatus.open}
        setShowModal={handleCloseConfirmModal}
        targetCrypto={selectedCrypto}
        sourceCrypto={defaultCrypto}
        exchangeValue={enteredCryptoValue}
      />
    </div>
  );
}
