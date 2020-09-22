import PropTypes from 'prop-types';
import styles from './transaction-details.module.css'

const SingleTransaction = (props) => {
  const { amount, receiver, date, type } = props.transactionItem;
  return (
    <div className={styles.transactionCard} >
      <div className={`${styles.action} ${(type == 'Credit') ? styles.green : styles.red}`}>{type}</div>
      <div className={styles.transactionDetails}>
        <div>{amount}</div>
        <div>{receiver}</div>
        <span>{date}</span>
      </div>
    </div >
  );
};
const TransactionList = (props) => {
  let transactionItems = props.transactions.map((transactionItem, index) => {
    return <SingleTransaction key={index} transactionItem={transactionItem} />;
  });
  return (
    <>
      {transactionItems}
    </>
  );
};

SingleTransaction.propTypes = {
  date: PropTypes.string,
  reciever: PropTypes.string,
  sender: PropTypes.string,
  type: PropTypes.string,
};

export default TransactionList;
