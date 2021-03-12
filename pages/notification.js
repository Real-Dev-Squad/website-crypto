import React from 'react';
import personData from '../mock/person.json';
import NavBar from '@components/NavBar';
import data from '../mock/notifications.json';

export default function notification() {
  return (
    <div className="container">
      <NavBar personData={personData} />
      <div className="notification">
        <ul>
          {
            data.map((item, index) => {
              return(
                <li key={index}>
                  <div className="notificationArea">
                    <h4>{item.notification}</h4>
                    <div className="buttons">
                      <button className="approve">Approve</button>
                      <button className="discard">Discard</button>
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
      <style jsx>
        {`
          .notification {
            margin: auto;
            padding: 0;
            width: 50%;
            min-height: auto;
            border: 0.15em solid rgba(128, 128, 128, 0.5);
          }
          .notification ul {
            margin: 0;
            padding: 0;
          }
          .notification ul li {
            list-style-type: none;
            border-bottom: 0.1em solid rgba(128, 128, 128, 0.137);
            padding: 5px;
          }
          .notification ul li:hover {
            background-color: rgba(214, 212, 212, 0.308);
          }
          .notificationArea h4 {
            margin: 0;
            padding: 10px;
          }
          .buttons {
            margin-left: 0.5em;
          }
          .approve {
            background-color: #2ecc71;
            text-align: center;
            border: none;
            outline: none;
            cursor: pointer;
            padding: 0.5em;
            border-radius: 0.3em;
            font-weight: 600;
          }
          .discard {
            background-color: #ff3838;
            text-align: center;
            border: none;
            outline: none;
            cursor: pointer;
            padding: 0.5em;
            border-radius: 0.3em;
            font-weight: 600;
            margin-left: 0.5em;
          }
          @media only screen and (max-width: 600px) {
            .notification {
              width: 80%;
              margin-top: 3em;
            }
          }
        `}
      </style>
    </div>
  );
}
