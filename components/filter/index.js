import styles from './filter.module.css';
import Image from 'next/image';

const Filter = (props) => {
  const { changeTransactions } = props;
  return (
    <div className={styles.filter}>
      <div className="icon">
        <Image
          src="/assets/filter-icon.svg"
          alt="Filter icon"
          width={20}
          height={20}
          onClick={() => {
            document
              .getElementById('filterContent')
              .classList.toggle(styles.showList);
          }}
        />
      </div>

      <div className={styles.filterContent} id="filterContent">
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
  );
};

export default Filter;
