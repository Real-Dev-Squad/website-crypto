import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from '@components/stock-card';
import { Footer } from '@components/footer';
import Link from 'next/link';
import { getStocks } from '../../redux/action';
import styles from '../../styles/Home.module.css';

const Invest = () => {
  const stocks = useSelector((state) => state.stocksDetails.stocks);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const actionPayload = await getStocks();
      dispatch(actionPayload);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="main-container">
        <div className="layout">
          <div className="content">
          <div className="stocks-header">
              <Link href="/trading/sell">
                <div className={`${styles.trade}`}>Sell Stocks</div>
              </Link>
              <h2>Stocks</h2>
            </div>
            <div className="shoppinglist-container">
              {stocks.map((itemName) => (
                <Card
                  key={itemName.id}
                  stock={itemName}
                  operationType={'BUY'}
                />
              ))}
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
          .stocks-header{
            display: flex;
            flex-direction: column;
            padding: 0rem 5rem;
          }
          .stocks-header h2{
            font-family: 'Poppins';
            font-weight: 600;
            font-size: 1.375rem;
            line-height: 2rem;
          }
        `}</style>
      </div>
    </>
  );
};

export default Invest;
