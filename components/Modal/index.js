import React, { useRef, useCallback, useEffect } from 'react';
import classNames from './modal.module.css';

export default function Modal({ showModal, setShowModal, render }) {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };
  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);
  return (
    <>
      {showModal ? (
        <div
          className={classNames.background}
          onClick={closeModal}
          ref={modalRef}
        >
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
