import StockOperationModal from '@components/stock-operation-modal';
import React, { useState } from 'react';
import styles from '../../styles/Home.module.css';

const StockOperation = (props) => {
  const { stockName, stockPrice } = props;
  const [modal, showModal] = useState(false);
  const [transactionType, setTransactionType] = useState('');
  const setTransaction = (operation) => {
    setTransactionType(operation);
    showModal((prev) => !prev);
  };

  return (
    <div className={styles.buttonWrapper}>
      <div
        className={`${styles.button} ${styles.greenButton}`}
        onClick={() => setTransaction('Buy')}
      >
        BUY
      </div>
      <div
        className={`${styles.button} ${styles.redButton}`}
        onClick={() => setTransaction('Sell')}
      >
        SELL
      </div>
      <StockOperationModal
        nameOfStock={stockName}
        listedPriceOfStock={stockPrice}
        modal={modal}
        showModal={showModal}
        transactionType={transactionType}
      />
    </div>
  );
};

export default StockOperation;
