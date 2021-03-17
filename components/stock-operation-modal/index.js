import React, { useState } from 'react';
import styles from '../stock-operation-modal/stock-operation.module.css';

const StockOperationModal = (props) => {
  const {
    nameOfStock,
    listedPriceOfStock,
    modal,
    showModal,
    transactionType,
    stockId,
  } = props;

  const [quantity, setQuantity] = useState('');

  const closeModal = () => {
    showModal((prev) => !prev);
    setQuantity('');
  };
  const submitHandler = () => {
    const body = {
      tradeType: transactionType,
      stockName: nameOfStock,
      stockId,
      quantity,
      listedPrice: listedPriceOfStock,
      totalPrice: quantity * listedPriceOfStock,
    };

    fetch('https://api.realdevsquad.com/trade/stock/new/self', {
      credentials: 'include',
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((data) =>
        alert(`Trading Successful! Your balance is ${data.userBalance} Dineros`)
      )
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <>
      <div
        className={modal ? styles.backgroundVisible : null}
        onClick={closeModal}
      ></div>{' '}
      {modal ? (
        <div className={styles.modalWrapper}>
          <div className={styles.closedButton} onClick={closeModal}>
            &times;
          </div>
          <div>
            <label className={styles.label} htmlFor="stock-name">
              Stock Name
            </label>
            <input
              className={styles.select}
              type="text"
              name="stock-name"
              id="stock-name"
              value={nameOfStock}
              onChange={() => {}}
            />
            <label className={styles.label} htmlFor="listed-price">
              Listed Price
            </label>
            <input
              className={styles.select}
              type="number"
              name="listed-price"
              id="listed-price"
              value={listedPriceOfStock}
              onChange={() => {}}
            />
            <label className={styles.label} htmlFor="quantity">
              Quantity
            </label>
            <input
              className={styles.select}
              type="number"
              name="quantity"
              id="quantity"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <label className={styles.label} htmlFor="total-price">
              Total Price
            </label>
            <input
              className={styles.select}
              type="number"
              name="total-price"
              id="total-price"
              value={listedPriceOfStock * quantity}
              onChange={() => {}}
            />
            <button
              className={`${styles.buttonClass} ${
                transactionType === 'BUY'
                  ? styles.greenButton
                  : styles.redButton
              }`}
              disabled={!(nameOfStock && listedPriceOfStock && quantity)}
              onClick={submitHandler}
            >
              {transactionType}
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default StockOperationModal;
