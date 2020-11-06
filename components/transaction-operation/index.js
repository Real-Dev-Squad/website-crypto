import React from 'react';
import styles from './transaction-operation.module.css';

const TransactionOperation = (props) => {
  const { modal, showModal, personData, receivers, transactionType } = props;

  return (
    <>
      {' '}
      {modal ? (
        <div className={styles.background}>
          <div className={styles.modalWrapper}>
            <div
              className={styles.closedButton}
              onClick={() => showModal((prev) => !prev)}
            >
              x
            </div>
            <div>
              {transactionType === 'Send' && (
                <label className={styles.label} htmlFor="to">
                  To
                </label>
              )}
              {transactionType === 'Receive' && (
                <label className={styles.label} htmlFor="to">
                  From
                </label>
              )}
              <select className={styles.select} name="receivers" id="receivers">
                {receivers &&
                  receivers.map((receiver) => (
                    <option key={receiver.id} value={receiver.value}>
                      {receiver.value}
                    </option>
                  ))}
              </select>
              <label className={styles.label} htmlFor="currency-Type">
                Currency Type
              </label>
              <select
                className={styles.select}
                name="Currency Type"
                id="currency-type"
              >
                {personData &&
                  Object.keys(personData.coins).map((key, value) => (
                    <option key={key} value={key}>
                      {key}
                    </option>
                  ))}
              </select>
              <label className={styles.label} htmlFor="amount">
                Amount
              </label>
              <input
                className={styles.input}
                type="number"
                name="transaction-amount"
                id="transaction-amount"
              />
              {transactionType === 'Send' && (
                <div className={` ${styles.button} ${styles.greenButton}`}>
                  {transactionType}
                </div>
              )}
              {transactionType === 'Receive' && (
                <div className={` ${styles.button} ${styles.redButton}`}>
                  {transactionType}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default TransactionOperation;
