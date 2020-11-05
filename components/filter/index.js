import styles from './filter.module.css';

const Filter = (props) => {
  const { changeTransactions } = props;
  return (
    <div className={styles.filter}>
      <img
        className="icon"
        src="https://www.flaticon.com/svg/static/icons/svg/3126/3126539.svg"
        alt="Filter icon"
        onClick={() => {
          document
            .getElementById('filterContent')
            .classList.toggle(styles.showList);
        }}
      />

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
