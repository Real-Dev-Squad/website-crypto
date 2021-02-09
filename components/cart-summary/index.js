import React, { useState } from 'react';
import PropTypes from 'prop-types';
import colors from '../../color/color.json';
import Modal from '../Modal/index';
import classNames from '../Modal/modal.module.css';
import Link from 'next/link';

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
        <span className={classNames.successBtn}>&#10004;</span>
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
    {showModal ? <div onClick={openModal} className={classNames.backdrop}></div> : null }
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        render={renderText}
      />
      <div className="cart-summary-container">
        <p> SUMMARY </p>
        <p> Subtotal :RDS {total}.00 </p>
        <p> Taxes : RDS {total > 0 ? 10 : '0.00'} </p>
        <p onClick={openModal}> Confirm </p>
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
              cursor: pointer;
              position: absolute;
              left: 50%;
              transform: translateY(30%);
            }
            p :last-child {
              border: none;
              padding: 8px;
              width: 100%;
              font-size: 20px;
              background-color: #88d870;
              text-align: center;
              font-weight: bold;
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
