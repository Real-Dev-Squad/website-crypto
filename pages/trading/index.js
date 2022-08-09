import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Card } from '@components/stock-card';
import { Footer } from '@components/footer';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

const Invest = () => {
  const stocks = useSelector((state) => state.stocksDetails.stocks);

  return (
    <>
      <div className="main-container">
        <div className="layout">
          <div className="content">
            <div className="shoppinglist-container">
              {stocks.map((itemName) => (
                <Card
                  key={itemName.id}
                  stock={itemName}
                  operationType={'BUY'}
                />
              ))}
            </div>
            <div>
              <Link
                href={{
                  pathname: '/trading/sell',
                  query: { data: JSON.stringify(stocks) },
                }}
              >
                <div className={`${styles.trade}`}>Sell Stocks</div>
              </Link>
            </div>
          </div>
          <Footer />
        </div>
        <style jsx>{`
          .layout {
            min-height: calc(100vh-58px);
            position: relative;
          }

          .content {
            min-height: 87vh;
            padding-bottom: 75px;
          }
          .shoppinglist-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            align-items: stretch;
          }
        `}</style>
      </div>
    </>
  );
};

export default Invest;
