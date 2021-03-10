import React, { useState } from 'react';
import styles from '../stock-operation-modal/stock-operation.module.css';

const StockOperationModal = (props) => {
  const {
    nameOfStock,
    listedPriceOfStock,
    modal,
    showModal,
    transactionType,
  } = props;
  const [quantity, setQuantity] = useState('');

  const closeModal = () => {
    showModal((prev) => !prev);
    setQuantity('');
  };
  const submitHandler = () => {
    alert('Trading Successful');
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
            />
            <label className={styles.label} htmlFor="quantity">
              Quantity
            </label>
            <input
              className={styles.select}
              type="number"
              name="quantity"
              id="quantity"
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
            />
            <button
              className={`${styles.buttonClass} ${
                transactionType === 'Buy'
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
