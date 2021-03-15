import React, { useState } from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import personData from 'mock/person.json';
import NavBar from '@components/NavBar';
import ExchangeRateRow from '@components/exchange-rate-row';
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
  const [quantity, setQuantity] = useState(0);
  const [fromCurrencySelected, setFromCurrencySelected] = useState(
    currencies.length ? currencies[0].id : null
  );
  const [toCurrencySelected, setToCurrencySelected] = useState(
    currencies.length ? currencies[0].id : null
  );
  const {
    exchange_rates,
    currency_exchange__left_section,
    currency_exchange__right_section,
    currency_exchange,
    currency_exchange_select,
    currency_exchange_from__quantity,
    left__arrow,
    right__arrow,
  } = styles;
  const bankCurrencyOptions = currencies.map((currency) => ({
    value: currency.id,
    label: currency.name,
  }));
  const handleButtonClick = () => {
    setShowModal(!showModal);
  };
  const handleQuantityAdd = () => {
    setQuantity(quantity + 1);
  };
  const handleQuantitySub = () => {
    setQuantity(Math.max(quantity - 1, 0));
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
              <ExchangeRateRow {...row} key={index} />
            ))}
          </div>
        </div>
        <div className={currency_exchange__right_section}>
          <div className={currency_exchange_select}>
            <Select
              value={fromCurrencySelected}
              options={bankCurrencyOptions}
              components={makeAnimated()}
            />
            <Select
              value={toCurrencySelected}
              options={bankCurrencyOptions}
              components={makeAnimated()}
            />
          </div>
          <div className={currency_exchange_from__quantity}>
            <div
              title="Decreas the quantity"
              onClick={() => handleQuantitySub()}
              className={left__arrow}
            >
              &laquo;
            </div>
            <div title="Quantity" className>
              {quantity}
            </div>
            <div
              title="Increase the quantity"
              onClick={() => handleQuantityAdd()}
              className={right__arrow}
            >
              &raquo;
            </div>
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
