import StockOperationModal from '@components/stock-operation-modal';
import React, { useState } from 'react';
import styles from '../../styles/Home.module.css';
import { useRouter } from 'next/router';

const StockOperation = (props) => {
  const { stockId, name, price, availableQty } = props;
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
          className={`${styles.button} ${styles.blueButton}`}
          onClick={() => setTransaction('BUY')}
        >
           Buy Now
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
        availableQty={availableQty}
        modal={modal}
        showModal={showModal}
        transactionType={transactionType}
        stockId={stockId}
      />
    </div>
  );
};

export default StockOperation;
