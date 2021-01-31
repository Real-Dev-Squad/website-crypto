import { useState } from 'react';
import PropTypes from 'prop-types';
import Filter from '../filter';
import styles from './transaction-details.module.css';

const SingleTransaction = (props) => {
  const { amount, receiver, date, type } = props.transactionItem;
  return (
    <div className={styles.transactionCard}>
      <div
        className={`${styles.action} ${
          type == 'Credit' ? styles.green : styles.red
        }`}
      >
        {type}
      </div>
      <div className={styles.transactionDetails}>
        <div>{receiver}</div>
        <div>{amount}</div>
        <span>{date}</span>
      </div>
    </div>
  );
};
const TransactionList = (props) => {
  const { transactions } = props;
  const [transactionList, setTransaction] = useState(transactions);
  const filterStateReducer = (state, type) => {
    if (type === 'credit') {
      return state.filter((x) => x.type === 'Credit');
    }
    if (type === 'debit') {
      return state.filter((x) => x.type === 'Debit');
    }
    if (type === 'reset') {
      return state;
    }
    return state;
  };
  const filterTransaction = ({ type }) => {
    setTransaction(filterStateReducer(transactions, type));
  };
  let transactionItems = transactionList.map((transactionItem, index) => {
    return <SingleTransaction key={index} transactionItem={transactionItem} />;
  });
  return (
    <div>
      <Filter changeTransactions={filterTransaction} />
      {transactionItems}
    </div>
  );
};

SingleTransaction.propTypes = {
  date: PropTypes.string,
  reciever: PropTypes.string,
  sender: PropTypes.string,
  type: PropTypes.string,
};

export default TransactionList;
