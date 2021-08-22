import React, { useEffect, useState } from 'react';
import Modal from '@components/Modal';
import exchangeRateMockData from 'mock/exchange-rates.json';
import styles from './confirm-exchange-modal.module.css';

const ConfirmExchangeModal = ({
  showModal,
  setShowModal,
  targetCrypto,
  sourceCrypto,
  exchangeValue,
}) => {
  const [exchangeRates, setExhangeRates] = useState({});
  const [loading, setLoading] = useState({
    exchangeRates: true,
    submitTransaction: false,
  });
  const [errors, setErrors] = useState({
    exchangeRates: false,
    submitTransaction: false,
  });

  const fetchExchangeRates = () => {
    try {
      setLoading((prev) => ({ ...prev, exchangeRates: true }));
      setTimeout(() => {
        setExhangeRates(exchangeRateMockData);
        setLoading((prev) => ({ ...prev, exchangeRates: false }));
      }, 2000);
    } catch (err) {
      setErrors((prev) => ({ ...prev, exchangeRates: err }));
    }
  };

  const handleSubmitTransation = () => {
    setLoading((prev) => ({ ...prev, submitTransaction: true }));
    try {
      setTimeout(() => {
        setLoading((prev) => ({ ...prev, submitTransaction: false }));
        setShowModal();
        alert('Exchagne Successfull!!');
      }, 2000);
    } catch (err) {
      setErrors((prev) => ({ ...prev, submitTransaction: err }));
    }
  };

  const handleCloseModal = () => {
    if (loading.submitTransaction) return;
    setShowModal();
  };

  useEffect(() => {
    if (showModal) fetchExchangeRates();
  }, [showModal]);

  return (
    <Modal
      showModal={showModal}
      setShowModal={handleCloseModal}
      render={
        <div>
          <h4>Confirm</h4>
          <div style={{ height: '100%' }}>
            {loading.exchangeRates ? (
              <div>Loading...</div>
            ) : errors.exchangeRates ? (
              <div>
                <p>Some error occured while fetching exchange rates</p>
                <button>Please Refresh</button>
              </div>
            ) : (
              <div>
                <p>
                  Exchanging {targetCrypto} with {sourceCrypto}
                </p>
                <p>
                  Current exchange rate: 5 {sourceCrypto} / {targetCrypto}
                </p>
                <p>Updated balance will be:</p>
                <p className={styles.updated_balance_line}>
                  <span>
                    {targetCrypto}: 10 (<span className={styles.add}>+5</span>)
                  </span>
                  <span>
                    {sourceCrypto}: 15 (
                    <span className={styles.subtract}>-5</span>)
                  </span>
                </p>
                <button
                  onClick={handleSubmitTransation}
                  disabled={loading.submitTransaction}
                >
                  {loading.submitTransaction
                    ? 'Exchanging...'
                    : 'Confirm Exchange'}
                </button>
              </div>
            )}
          </div>
        </div>
      }
    />
  );
};

export default ConfirmExchangeModal;
