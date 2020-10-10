import { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class TransactionHistory extends Component {
  constructor(props) {
    super(props);
    let sortedTransactions = [].concat(this.props.transactions);

    sortedTransactions.map((transaction) => {
      const timeStamp = new Date(transaction.date);
      transaction.timeStamp = timeStamp.getTime();
    });

    sortedTransactions.sort((a, b) => b.timeStamp - a.timeStamp);
    let length = 10;
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
        <div className="transaction" key={transaction.timeStamp}>
          <div>
            <div className="usersInvolved">
              {`${transaction.sender} => ${transaction.receiver}`}
            </div>
            <div className="date">{`${transaction.date}`}</div>
          </div>
          <div className="amount">{`Amount: ${transaction.amount}`}</div>
          <style jsx>
            {`
              .transaction {
                display: flex;
                justify-content: space-between;
                border: 2px solid black;
                padding: 10px;
                margin: 20px;
              }
              .usersInvolved {
                font-size: 1.5rem;
              }
              #endMessage {
                text-align: center;
              }
            `}
          </style>
        </div>
      );
    });
    return (
      <div className="allTransactions">
        <InfiniteScroll
          dataLength={this.state.allTransaction.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<h2 id="loadMessage">loading...</h2>}
          endMessage={<h2 id="endMessage">You are all caught up!</h2>}
        >
          {showThem}
        </InfiniteScroll>
        <style jsx>{`
          #endMessage,
          #loadMessage {
            text-align: center;
          }
        `}</style>
      </div>
    );
  }
}
