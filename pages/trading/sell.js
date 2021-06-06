import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NavBar from '@components/NavBar';
import { Footer } from '@components/footer';
import personData from '../../mock/person.json';
import { Card } from '@components/stock-card';
import Link from 'next/link';
import { getUserStocks } from '../../redux/action';
import styles from '../../styles/Home.module.css';

const SellStocks = () => {
  const userStocksData = useSelector(
    (state) => state.stocksDetails.userStocksData
  );

  //if quantity is 0 still it was showing the stock card, so filter the array to only show the stocks having quantity more than 0
  const userStocks = userStocksData.stocks.filter(stock => stock.quantity != 0);
  
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const actionPayload = await getUserStocks();
      dispatch(actionPayload);
    };

    fetchData();
  }, []);

  const showAlert = () => {
    return (
      <div className={`${styles.trade}`}>
        <Link href="https://www.realdevsquad.com/">
          Please log in to continue!
        </Link>
      </div>
    );
  };

  
  return (
    <>
      <NavBar personData={personData} />
      <div className="main-container">
        <div className="layout">
          {userStocksData.isLoggedIn && (
            <div className="content">
              <div className="shoppinglist-container">
                {/* add msg for user if doesn't hold any stocks */}
                {userStocks.length == 0 && <h2>You don't have any stocks yet. Click below to buy some</h2>}
                {userStocks.map((itemName) => (
                  <Card
                    key={itemName.id}
                    stock={itemName}
                    operationType={'SELL'}
                  />
                ))}
              </div>
              <div>
                <Link href="/trading">
                  <div className={`${styles.trade}`}>Buy Stocks</div>
                </Link>
              </div>
            </div>
          )}
          <div>{!userStocksData.isLoggedIn && showAlert()}</div>
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

export default SellStocks;
