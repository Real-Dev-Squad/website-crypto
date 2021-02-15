import styles from './filter.module.css';
import Image from 'next/image';
import { useState, useRef } from 'react';
import GenericClosePopUp from '../Close-popup/GenericClosePopUp';

const Filter = (props) => {
  const { changeTransactions } = props;
  const [toggle, setToggle] = useState(false);
  const filterRef = useRef();
  GenericClosePopUp(filterRef, () => {
    setToggle(false);
  });
  return (
    <div
      className={styles.filter}
      onClick={() => {
        setToggle(!toggle);
      }}
      ref={filterRef}
    >
      <div className="icon">
        <Image
          src="/assets/filter-icon.svg"
          alt="Filter icon"
          width={20}
          height={20}
        />
        <div
          className={toggle ? styles.showList : styles.hideList}
          id="filterContent"
        >
          <li onClick={() => changeTransactions({ type: 'credit' })}>
            Sort on credit
          </li>
          <li onClick={() => changeTransactions({ type: 'debit' })}>
            Sort on debit
          </li>
          <li>Sort on date</li>
          <li onClick={() => changeTransactions({ type: 'reset' })}>
            Show original data
          </li>
        </div>
      </div>
    </div>
  );
};

export default Filter;
