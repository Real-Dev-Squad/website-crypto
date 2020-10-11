import { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from './passbook.module.css';

export default class TransactionHistory extends Component {
  constructor(props) {
    super(props);
    let sortedTransactions = [].concat(this.props.transactions);

    sortedTransactions.map((transaction) => {
      const timeStamp = new Date(transaction.date);
      transaction.timeStamp = timeStamp.getTime();
    });

    sortedTransactions.sort((a, b) => b.timeStamp - a.timeStamp);
    let length = 6;
    this.state = {
      allTransaction: Array.from(sortedTransactions.slice(0, length)),
      hasMore: true,
    };

    this.fetchMoreData = () => {
      if (this.state.allTransaction.length >= sortedTransactions.length) {
        this.setState({ hasMore: false });
        return;
      }
      length += 2;
      setTimeout(() => {
        this.setState({
          allTransaction: sortedTransactions.slice(0, length),
        });
      }, 500);
    };
  }
  render() {
    const showThem = this.state.allTransaction.map((transaction) => {
      return (
        <div className={styles.transaction} key={transaction.timeStamp}>
          <div>
            <div className={styles.usersInvolved}>
              {`${transaction.sender} => ${transaction.receiver}`}
            </div>
            <div className={styles.date}>{`${transaction.date}`}</div>
          </div>
          <div className={styles.amount}>{`Amount: ${transaction.amount}`}</div>
        </div>
      );
    });
    return (
      <div className="allTransactions">
        <InfiniteScroll
          dataLength={this.state.allTransaction.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<h2 id={styles.message}>loading...</h2>}
          endMessage={<h2 id={styles.message}>You are all caught up!</h2>}
        >
          {showThem}
        </InfiniteScroll>
      </div>
    );
  }
}
