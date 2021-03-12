import { useState, useEffect } from 'react';
import { Card } from '@components/stock-card';
import { Footer } from '@components/footer';
import stockData from '../../mock/stocks.json';
import personData from '../../mock/person.json';
import NavBar from '@components/NavBar';

const stock = Object.keys(stockData);
const Invest = () => {
  const [stocks, updateStocks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/stocks')
      .then((response) => response.json())
      .then((data) => updateStocks(data.stock));
  }, []);
  return (
    <>
      <NavBar personData={personData} />
      <div className="main-container">
        <div className="layout">
          <div className="content">
            <div className="shoppinglist-container">
              {stocks.map((itemName) => (
                <Card key={itemName} stock={itemName} />
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
        `}</style>
      </div>
    </>
  );
};

export default Invest;
