import React, { useCallback, useEffect } from 'react';
import classNames from './modal.module.css';

export default function Modal({ showModal, setShowModal, render }) {
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  
  const escKeyHandler = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', escKeyHandler);
    return () => document.removeEventListener('keydown', escKeyHandler);
  }, [escKeyHandler]);
  return (
    <>
      {showModal ? (
        <div>
          <div onClick={openModal} className={classNames.backdrop}></div>
            <div className={classNames.container}>
            <span
              className={classNames.cancelBtn}
              button
              onClick={() => setShowModal((prev) => !prev)}
            >
              &times;
            </span>
            <span className={classNames.subDiv}>{render}</span>
          </div>
          </div>
      ) : null}
    </>
  );
}
