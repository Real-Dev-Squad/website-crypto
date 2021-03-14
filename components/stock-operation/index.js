import StockOperationModal from '@components/stock-operation-modal';
import React, { useState } from 'react';
import styles from '../../styles/Home.module.css';

const StockOperation = (props) => {
  const { id, name, price } = props.stock;
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
        onClick={() => setTransaction('BUY')}
      >
        BUY
      </div>
      <div
        className={`${styles.button} ${styles.redButton}`}
        onClick={() => setTransaction('SELL')}
      >
        SELL
      </div>
      <StockOperationModal
        nameOfStock={name}
        listedPriceOfStock={price}
        modal={modal}
        showModal={showModal}
        transactionType={transactionType}
        stockId={id}
      />
    </div>
  );
};

export default StockOperation;
