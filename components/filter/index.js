import styles from './filter.module.css';

const Filter = (props) => {
  return (
    <div className={styles.filter}>
      <img
        className="icon"
        src="https://www.flaticon.com/svg/static/icons/svg/3126/3126539.svg"
        alt="Filter icon"
      />
      <div className={styles.filterContent}>
        <li onClick={() => props.handleCreditSort()}>Sort on credit</li>
        <li onClick={() => props.handleDebitSort()}>Sort on debit</li>
        <li>Sort on date</li>
        <li onClick={() => props.showOriginal()}>Show original data</li>
      </div>
    </div>
  );
};

export default Filter;
