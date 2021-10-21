import styles from './filter.module.css';
import Image from 'next/image';
import { useState, useRef } from 'react';
import GenericClosePopUp from '../Close-popup/GenericClosePopUp';
import { useDarkModeContext } from 'stores/dark-mode-context';

const Filter = (props) => {
  const [theme, themeData, themeToggler] = useDarkModeContext();
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
          src={
            theme === 'light'
              ? '/assets/filter-icon.svg'
              : '/assets/filter-icon-dark.svg'
          }
          alt="Filter icon"
          width={20}
          height={20}
        />
        <div
          className={toggle ? styles.showList : styles.hideList}
          id="filterContent"
        >
          <ul>
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Filter;
