import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NavBar from '@components/NavBar';
import { Footer } from '@components/footer';
import personData from '../../mock/person.json';
import { Card } from '@components/stock-card';
import Link from 'next/link';
import { getUserStocks } from '../../redux/action';
import styles from '../../styles/Home.module.css';
import GlobalStyles from '@components/Dark-Theme/globalStyles';
import { ThemeProvider } from 'styled-components';
import { useDarkModeContext } from 'stores/dark-mode-context';

const SellStocks = () => {
  const userStocksData = useSelector(
    (state) => state.stocksDetails.userStocksData
  );
  const userStocks = userStocksData.stocks;
  const dispatch = useDispatch();
  const [
    theme,
    themeData,
    themeToggler,
    mountedComponent,
  ] = useDarkModeContext();

  useEffect(() => {
    const fetchData = async () => {
      const actionPayload = await getUserStocks();
      dispatch(actionPayload);
    };

    fetchData();
  }, []);

  if (!mountedComponent) return <div />;
  const showAlert = () => {
    return (
      <ThemeProvider theme={themeData}>
        <>
          <GlobalStyles />
          <div className={`${styles.trade}`}>
            <Link href="https://www.realdevsquad.com/">
              Please log in to continue!
            </Link>
          </div>
        </>
      </ThemeProvider>
    );
  };

  const availableStocks = userStocks
    .filter((itemName) => itemName.quantity)
    .map((itemName) => (
      <Card key={itemName.id} stock={itemName} operationType={'SELL'} />
    ));
  const NO_STOCKS_MESSAGE =
    "You don't have any stocks yet. Click below to buy some";
  if (!mountedComponent) return <div />;
  return (
    <ThemeProvider theme={themeData}>
      <>
        <GlobalStyles />
        <NavBar personData={personData} />
        <div className="main-container">
          <div className="layout">
            {userStocksData.isLoggedIn && (
              <div className="content">
                <div className="shoppinglist-container">
                  {availableStocks.length ? availableStocks : NO_STOCKS_MESSAGE}
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
    </ThemeProvider>
  );
};

export default SellStocks;
