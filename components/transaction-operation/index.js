import React, { useState } from 'react';
import styles from './transaction-operation.module.css';

const TransactionOperation = (props) => {
  const { modal, showModal, personData, receivers, transactionType } = props;
  const [receiver, setReceiver] = useState(receivers[0].value);
  const [currencyType, setCurrencyType] = useState(
    Object.keys(personData.coins)[0]
  );
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const closeModal = () => {
    showModal((prev) => !prev);
    setAmount('');
    setMessage('');
  };
  const checkAmount = (amount) => {
    if (transactionType === 'Send' && personData.coins[currencyType] < amount) {
      setAmount(amount);
      setMessage(
        `The amount should be less than ${personData.coins[currencyType]}`
      );
    } else {
      setMessage('');
      setAmount(amount);
    }
  };
  const submitHandler = () => {
    //Submit handler will be updated
    alert('Demo Successful');
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
            <select
              className={styles.select}
              name="receivers"
              id="receivers"
              value={receiver}
              onChange={(e) => setReceiver(e.target.value)}
            >
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
              value={currencyType}
              onChange={(e) => setCurrencyType(e.target.value)}
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
              className={styles.select}
              type="number"
              name="transaction-amount"
              id="transaction-amount"
              value={amount}
              onChange={(e) => checkAmount(e.target.value)}
            />
            {message && (
              <div className={`  ${styles.errorMessage}`}>{message}</div>
            )}

            <div
              className={
                !(amount && receiver && currencyType && !message)
                  ? styles.buttonDisabled
                  : null
              }
            >
              {transactionType === 'Send' && (
                <button
                  className={` ${styles.buttonClass} ${styles.greenButton}`}
                  disabled={!(amount && receiver && currencyType)}
                  onClick={submitHandler}
                >
                  {transactionType}
                </button>
              )}
              {transactionType === 'Receive' && (
                <button
                  className={` ${styles.buttonClass} ${styles.redButton}`}
                  disabled={!(amount && receiver && currencyType)}
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

export default TransactionOperation;
