const SingleTransaction = (props) => {
  const { amount, receiver, date, type } = props.transactionItem;
  return (
    <div className="transaction-container">
      <p className="type"> {type} </p>
      <p> {date} </p>
      <p>
        {' '}
        Given to {receiver} - {amount}
      </p>
      <style jsx>{`
        .transaction-container {
          display: flex;
          font-size: 1em;
          justify-content: space-between;
        }
        .type {
          color: ${type === 'credit' ? 'green' : 'red'};
          text-transform: capitalize;
        }
        .transaction-container p {
          padding: 0.3em;
        }
      `}</style>
    </div>
  );
};
const TransactionList = (props) => {
  let transactionItems = props.transactions.map((transactionItem, index) => {
    return <SingleTransaction key={index} transactionItem={transactionItem} />;
  });
  return (
    <div className="transactions-list">
      {transactionItems}
      <style jsx>{`
        .transactions-list {
          border: 2px solid red;
          padding: 1em;
        }
      `}</style>
    </div>
  );
};

export default TransactionList;
