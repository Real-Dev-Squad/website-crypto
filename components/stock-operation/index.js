import StockOperationModal from '@components/stock-operation-modal';
import React, { useState } from 'react';
import styles from '../../styles/Home.module.css';
import { useRouter } from 'next/router';

const StockOperation = (props) => {
  const { id, name, price } = props.stock;
  const [modal, showModal] = useState(false);
  const [transactionType, setTransactionType] = useState('');
  const setTransaction = (operation) => {
    setTransactionType(operation);
    showModal((prev) => !prev);
  };

  const router = useRouter();

  return (
    <div className={styles.buttonWrapper}>
      {router.pathname == '/trading' && (
        <div
          className={`${styles.button} ${styles.greenButton}`}
          onClick={() => setTransaction('BUY')}
        >
          BUY
        </div>
      )}
      {router.pathname == '/trading/sell' && (
        <div
          className={`${styles.button} ${styles.redButton}`}
          onClick={() => setTransaction('SELL')}
        >
          SELL
        </div>
      )}
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
