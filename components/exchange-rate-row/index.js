import React from 'react';
import styles from './exchange-rate-row.module.css';

const ExcgangeRateRow = ({ src, target, value }) => {
  const {
    exchange_rate_row,
    currency_wrapper,
    currency_wrapper__name,
    currency_wrapper__normalized_number,
    currency_wrapper__image,
    exchange_rate_row__arrow,
  } = styles;
  return (
    <div className={exchange_rate_row}>
      <div className={currency_wrapper}>
        <div className={currency_wrapper__normalized_number}>{value}</div>
        <div className={currency_wrapper__name}>{src.name}</div>
        <div className={currency_wrapper__image} />
      </div>
      <span className={exchange_rate_row__arrow}>&#8667;</span>
      <div className={currency_wrapper}>
        <div className={currency_wrapper__name}>{target.name}</div>
        <div className={currency_wrapper__image} />
      </div>
    </div>
  );
};

export default ExcgangeRateRow;
