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
  const [stockName, setStockName] = useState(nameOfStock);
  const [listedPrice, setListedPrice] = useState(listedPriceOfStock);
  const [quantity, setQuantity] = useState('');
  const [totalPrice, setTotalPrice] = useState('');

  const closeModal = () => {
    showModal((prev) => !prev);
    setStockName('');
    setListedPrice('');
    setQuantity('');
    setTotalPrice('');
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
              value={stockName}
              onChange={(e) => setStockName(e.target.value)}
            />
            <label className={styles.label} htmlFor="listed-price">
              Listed Price
            </label>
            <input
              className={styles.select}
              type="number"
              name="listed-price"
              id="listed-price"
              value={listedPrice}
              onChange={(e) => setListedPrice(e.target.value)}
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
              value={listedPrice * quantity}
              onChange={(e) => setTotalPrice(e.target.value)}
            />

            <div
              className={
                !(stockName && listedPrice && quantity && totalPrice)
                  ? styles.buttonDisabled
                  : null
              }
            >
              {transactionType === 'Buy' && (
                <button
                  className={` ${styles.buttonClass} ${styles.greenButton}`}
                  disabled={
                    !(stockName && listedPrice && quantity && totalPrice)
                  }
                  onClick={submitHandler}
                >
                  {transactionType}
                </button>
              )}
              {transactionType === 'Sell' && (
                <button
                  className={` ${styles.buttonClass} ${styles.redButton}`}
                  disabled={
                    !(stockName && listedPrice && quantity && totalPrice)
                  }
                  onClick={submitHandler}
                >
                  {transactionType}
                </button>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default StockOperationModal;
