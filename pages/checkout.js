import React from 'react';
import NavBar from '../components/NavBar/index';
import personData from '../mock/person.json';

const setTime = setTimeout(() => {
  return (
    <div className="modal">
      <div>
        <h1>Congratulations!!!</h1>
        <h2>Transaction Successful!!!</h2>
      </div>
    </div>
  );
}, 2000);

const Checkout = () => {
  return (
    <div>
      <NavBar personData={personData} />
      <h1 onClick={setTime}>Checkout Page WIP.................</h1>
      <div></div>
      <style jsx>
        {`
          .modal {
            background-color: whitesmoke;
            width: 500px;
            height: 300px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border: 0.1em solid gray;
            border-radius: 0.8em;
          }
          .modal div {
            text-align: center;
            margin-top: 5em;
          }
        `}
      </style>
    </div>
  );
};

export default Checkout;
