import React from 'react';
import convertObjToArray from 'utils/convertObjToArray';
import styles from './profileSidebar.module.css';

const AssetsList = ({ personData }) => {
  return (
    <>
      {convertObjToArray(personData.coins).map(([name, amount]) => {
        return (
          <div key={name} className={styles.row}>
            <h3
              data-testid={`profile-sidebar-asset-${name}`}
              className={styles.subHeading}
            >
              {name}
            </h3>
            <p data-testid={`profile-sidebar-asset-${amount}`}>{amount}</p>
          </div>
        );
      })}
    </>
  );
};

export default AssetsList;
