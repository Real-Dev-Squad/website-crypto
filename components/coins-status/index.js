import { useEffect } from 'react';
import { useCoinStatus } from './useCoinStatus';
import PropTypes from 'prop-types';

const Coins = (props) => {
  const [coins, changeCoins] = useCoinStatus(0, props.coin.value);
  useEffect(() => {
    changeCoins(props.coin.value);
  }, [props.coin.value, changeCoins]);
  return (
    <div className="cointype-indicator">
      <div className="tooltip">
        <div className="coin"></div>
        <span className="tooltiptext">{props.coin.name}</span>
      </div>
      <p> {coins} </p>

      <style jsx>
        {`
          .cointype-indicator {
            display: flex;
          }
          .coin {
            background-color: ${props.coin.color};
            width: 3em;
            height: 3em;
            border-radius: 50%;
            border: 1px solid ${props.coin.borderColor};
          }

          .cointype-indicator > p {
            font-weight: bold;
          }

          .tooltip {
            position: relative;
            display: inline-block;
          }
          .tooltip .tooltiptext {
            visibility: hidden;
            width: 70px;

            color: ${props.coin.borderColor};
            text-align: center;
            position: absolute;
            z-index: 1;
          }

          .tooltip:hover .tooltiptext {
            visibility: visible;
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
            flex-direction: row;
            justify-content: space-between;
          }
        `}
      </style>
    </div>
  );
};

Coins.propTypes = {
  coin: PropTypes.object,
  value: PropTypes.number,
  name: PropTypes.string,
  color: PropTypes.string,
  borderColor: PropTypes.string,
};

export default CoinsStatus;
