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
      <p>
        {' '}
        {props.coin.name} {coins}{' '}
      </p>
      <style jsx>
        {`
          .cointype-indicator {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .cointype-indicator > div {
            height: 2em;
            width: 2em;
            border-radius: 50%;
            background-color: ${props.coin.color || 'pink'};
          }
          .cointype-indicator > p {
            font-size: 3em;
          }
        `}
      </style>
    </div>
  );
};

const CoinsStatus = (props) => {
  let coinsArray = props.coins.map((coin, index) => {
    return <Coins coin={coin} />;
  });

  return (
    <div className="coins-container">
      {coinsArray}
      <style jsx>
        {`
          .coins-container {
            display: flex;
          }
        `}
      </style>
    </div>
  );
};

export default CoinsStatus;
