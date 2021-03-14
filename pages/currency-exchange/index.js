import React, { useState } from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import personData from 'mock/person.json';
import NavBar from '@components/NavBar';
import ExchageRaterow from '@components/exchange-rate-row';
import styles from './currency-exchange.module.css';
import { createStructuredSelector } from 'reselect';
import CustomButton from 'components/custom-button';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Modal from 'components/Modal';
import {
  selectCurrencyExchangeRates,
  selectBankCurrencies,
} from 'redux/bank/bank.selectors';
const ModalText = () => (
  <div className="modal_text">
    <h1>Transaction Successful</h1>
  </div>
);
const CurrencyExchange = ({ exchangeRates, currencies }) => {
  const [showModal, setShowModal] = useState(false);
  const {
    exchange_rates,
    currency_exchange__left_section,
    currency_exchange__right_section,
    currency_exchange,
    currency_exchange_select,
  } = styles;
  const bankCurrencyOptions = currencies.map((currency) => ({
    value: currency.id,
    label: currency.name,
  }));
  const handleButtonClick = () => {
    setShowModal(!showModal);
  };
  return (
    <div>
      <Modal
        render={ModalText()}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <Head>
        <title>Currency Exchange</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar personData={personData} />
      <div className={currency_exchange}>
        <div className={currency_exchange__left_section}>
          <div className={exchange_rates}>
            {exchangeRates.map((row, index) => (
              <ExchageRaterow {...row} key={index} />
            ))}
          </div>
        </div>
        <div className={currency_exchange__right_section}>
          <div className={currency_exchange_select}>
            <Select
              className="basic-multi-select"
              options={bankCurrencyOptions}
              components={makeAnimated()}
            />
            <Select
              className="basic-multi-select"
              isMulti
              options={bankCurrencyOptions}
              components={makeAnimated()}
            />
          </div>
          <CustomButton onClick={() => handleButtonClick()} buttonPrimary>
            Exchange
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  exchangeRates: selectCurrencyExchangeRates,
  currencies: selectBankCurrencies,
});

export default connect(mapStateToProps)(CurrencyExchange);
