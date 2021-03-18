import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NavBar from '@components/NavBar';
import { Footer } from '@components/footer';
import personData from '../../mock/person.json';
import { Card } from '@components/stock-card';
import Link from 'next/link';
import { getUserStocks } from '../../redux/action';

const SellStocks = () => {
  const userStocks = useSelector((state) => state.stocksDetails.userStocks);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const actionPayload = await getUserStocks();
      dispatch(actionPayload);
    };

    fetchData();
  }, []);

  return (
    <>
      <NavBar personData={personData} />
      <div className="main-container">
        <div className="layout">
          <div className="content">
            <div className="shoppinglist-container">
              {userStocks.map((itemName) => (
                <Card key={itemName.id} stock={itemName} />
              ))}
            </div>
            <div>
              <Link href="/trading">Buy Stocks</Link>
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

export default SellStocks;
