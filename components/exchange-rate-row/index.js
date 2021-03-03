import React from 'react';
import styles from './exchange-rate-row.module.css';

const ExcgangeRateRow = ({
  first_currency,
  first_image,
  second_currency,
  second_image,
  normalized_number,
}) => {
  const {
    exchange_rate_row,
    first_currency_wrapper,
    second_currency_wrapper,
    first_currency_wrapper__name,
    first_currency_wrapper__normalized_number,
    first_currency_wrapper__image,
    second_currency_wrapper__name,
    second_currency_wrapper__image,
    exchange_rate_row__arrow,
  } = styles;
  return (
    <div className={exchange_rate_row}>
      <div className={first_currency_wrapper}>
        <div className={first_currency_wrapper__normalized_number}>
          {normalized_number}
        </div>
        <div className={first_currency_wrapper__name}>{first_currency}</div>
        <img
          src={first_image}
          alt={first_currency}
          className={first_currency_wrapper__image}
        />
      </div>
      <span className={exchange_rate_row__arrow}>&#8667;</span>
      <div className={second_currency_wrapper}>
        <div className={second_currency_wrapper__name}>{second_currency}</div>
        <img
          src={second_image}
          alt={second_currency}
          className={second_currency_wrapper__image}
        />
      </div>
    </div>
  );
};

export default ExcgangeRateRow;
