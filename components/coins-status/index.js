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
        <div className="coin rotate-vert-center ">
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
            width: 5rem;
            height: 5em;
            border-radius: 50%;
            box-shadow: 3px 3px 3px #000;
            border: 1px solid ${props.coin.borderColor};
            position: absolute;
          }

          .coin > p {
            padding-top: 0.5rem;
            text-shadow: -1px -1px 1px #fff, 1px 1px 1px #000;
            color: #9c8468;
            font-weight: bold;
            font-size: 1.5rem;
            opacity: 0.7;
            transform: translate(20%, -10%);
          }

          .rotate-vert-center {
            animation: rotate-vert-center 0.5s
              cubic-bezier(0.455, 0.03, 0.515, 0.955) 1s both;
          }

          @keyframes rotate-vert-center {
            0% {
              transform: rotateY(0);
            }
            100% {
              transform: rotateY(360deg);
            }
          }

          .tooltip {
            position: relative;
            display: inline-block;
          }
          .tooltip .tooltiptext {
            visibility: hidden;
            width: 70px;
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
            margin-left: 2rem;
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
