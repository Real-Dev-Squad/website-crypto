import React, { useEffect } from 'react';
import { useCoinStatus } from './useCoinStatus';

const Coins = (props) => {
  const [coins, changeCoins] = useCoinStatus(0, props.coin.value);
  useEffect(() => {
    changeCoins(props.coin.value);
  }, [props.coin.value]);
  return (
    <div className="cointype-indicator">
      <div></div>
      <p> {coins} </p>
      <style jsx>
        {`
          .cointype-indicator {
            display: flex;
            align-items: center;
            margin-left: 15px;
          }
          .cointype-indicator > div {
            height: 2em;
            width: 2em;
            border-radius: 50%;
            background-color: ${props.coin.color || 'pink'};
            border: 2px solid ${props.coin.borderColor};
            margin-right: 5px;
          }
          .cointype-indicator > p {
            font-size: 1.5em;
            font-weight: bold;
          }
        `}
      </style>
    </div>
  );
};

const CoinsStatus = (props) => {
  let coinsArray = props.coins.map((coin, index) => {
    return <Coins coin={coin} key={index} />;
  });

  return (
    <div className="coins-container">
      {coinsArray}
      <style jsx>
        {`
          .coins-container {
            display: flex;
            justify-content: flex-end;
            padding-right: 36px;
          }
        `}
      </style>
    </div>
  );
};

export default CoinsStatus;
