import React from 'react';
import styles from './transaction-operation.module.css';

const TransactionOperation = (props) => {
  const { modal, showModal } = props;
  return (
    <>
      {' '}
      {modal ? (
        <div className={styles.background}>
          <div className={styles.modalWrapper}>
            Real Dev Squad
            <div
              className={styles.closedButton}
              onClick={() => showModal((prev) => !prev)}
            >
              ❌
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default TransactionOperation;
