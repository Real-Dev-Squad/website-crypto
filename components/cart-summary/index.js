import React, { useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import colors from '../../color/color.json';
import Modal from '../Modal/index';
import styles from '../Modal/modal.module.css';

export const CartSummary = ({ total }) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const renderText =
    total > 0 ? (
      <>
        <h1>Congratulations!!!</h1>
        <h2>Transaction Successful</h2>
        <span className={styles.successBtn}>&#10004;</span>
      </>
    ) : (
      <>
        <h1>Oops!!!</h1>
        <h2>You do not have sufficient coins to purchase items</h2>
        <button>
          <Link href="/bank">Go to Bank</Link>
        </button>
      </>
    );

  return (
    <>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        render={renderText}
      />
      <div className="cart-summary-container">
        <h4>SUMMARY</h4>
        <p>Subtotal: RDS {total}.00</p>
        <p>Taxes: RDS {total > 0 ? 10 : '0.00'}</p>
        <button onClick={openModal}>Confirm</button>
        <style jsx>
          {`
            .cart-summary-container {
              background-color: ${colors.blue.light};
              color: white;
              display: flex;
              flex-direction: column;
              align-items: center;
              border: none;
              padding: 20px;
              cursor: default;
              border-radius: 6px;
            }
            .cart-summary-container h4 {
              margin: auto auto 16px;
              text-decoration: underline;
            }
            .cart-summary-container p {
              align-self: flex-start;
            }
            .cart-summary-container button {
              border: none;
              color: #fff;
              padding: 8px;
              width: 100%;
              font-size: 20px;
              cursor: pointer;
              background-color: #88d870;
              text-align: center;
              font-weight: bold;
              margin-top: 16px;
              transition: 0.5s;
            }
            .cart-summary-container button:hover {
              background-color: #32cd32;
            }
          `}
        </style>
      </div>
    </>
  );
};

CartSummary.propTypes = {
  total: PropTypes.number,
};

CartSummary.defaultProps = {
  total: 0,
};
