import TransactionOperation from '@components/transaction-operation';
import React, { useState } from 'react';
import receivers from '../../mock/receivers';
import styles from '../../styles/Home.module.css';
const TransactionOperationModal = (props) => {
  const { personData } = props;
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
        onClick={() => setTransaction('Send')}
      >
        Send
      </div>
      <div
        className={`${styles.button} ${styles.redButton}`}
        onClick={() => setTransaction('Receive')}
      >
        Receive
      </div>
      <TransactionOperation
        modal={modal}
        showModal={showModal}
        personData={personData}
        receivers={receivers}
        transactionType={transactionType}
      />
    </div>
  );
};

export default TransactionOperationModal;
