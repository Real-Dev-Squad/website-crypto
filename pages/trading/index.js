import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from '@components/stock-card';
import { Footer } from '@components/footer';
import personData from '../../mock/person.json';
import NavBar from '@components/NavBar';
import Link from 'next/link';
import { getStocks } from '../../redux/action';
import styles from '../../styles/Home.module.css';
import GlobalStyles from '@components/Dark-Theme/globalStyles';
import { ThemeProvider } from 'styled-components';
import { useDarkModeContext } from 'stores/dark-mode-context';

const Invest = () => {
  const stocks = useSelector((state) => state.stocksDetails.stocks);
  const dispatch = useDispatch();
  const [
    theme,
    themeData,
    themeToggler,
    mountedComponent,
  ] = useDarkModeContext();

  useEffect(() => {
    const fetchData = async () => {
      const actionPayload = await getStocks();
      dispatch(actionPayload);
    };

    fetchData();
  }, []);

  if (!mountedComponent) return <div />;
  return (
    <ThemeProvider theme={themeData}>
      <>
        <GlobalStyles />
        <NavBar personData={personData} />
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
                <Link href="/trading/sell">
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
    </ThemeProvider>
  );
};

export default Invest;
