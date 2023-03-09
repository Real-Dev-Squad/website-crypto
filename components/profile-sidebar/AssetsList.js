import React from 'react';
import convertObjToArray from 'utils/convertObjToArray';
import styles from './profileSidebar.module.css';

const AssetsList = ({ personData }) => {
  return (
    <>
      {convertObjToArray(personData.coins).map(([name, amount]) => {
        return (
          <div key={name} className={styles.row}>
            <h3 className={styles.subHeading}>{name}</h3>
            <p>{amount}</p>
          </div>
        );
      })}
    </>
  );
};

export default AssetsList;
