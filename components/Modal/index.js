import React from 'react';
import classNames from './modal.module.css';

// const information = (title, subtitle) => (
//   <div>
//     <h1>{title}</h1>
//     <h2>{subtitle}</h2>
//   </div>
// )

const Modal = (props) => {
  return (
    <div className={`${classNames.modal} ${props.tog}`}>
      <div>
        {/* {information(props.fname, props.lname)} */}
        <h1>{props.fname}</h1>
        <h2>{props.lname}</h2>
      </div>
    </div>
  );
};

export default Modal;
