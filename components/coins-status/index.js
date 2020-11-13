import { useEffect } from 'react';
import { useAnimateValue } from './useCoinStatus';
import PropTypes from 'prop-types';

const Coins = (props) => {
  const [coins, changeCoins] = useAnimateValue(0, props.coin.value, 5000);
  useEffect(() => {
    changeCoins(props.coin.value);
  }, [props.coin.value, changeCoins]);
  return (
    <div className="cointype-indicator">
      <div className="tooltip">
        <div className="coin">
          <p> {coins} </p>
        </div>
        <span className="tooltiptext">{props.coin.name}</span>
      </div>

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
            position: absolute;
          }

          .coin > p {
            text-shadow: -1px -1px 1px #fff, 1px 1px 1px #000;
            color: #9c8468;
            font-weight: bold;
            opacity: 0.3;
            transform: translate(20%, -10%);
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
            width: 12em;
            height: 4em;
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
