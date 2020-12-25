import { useEffect } from 'react';
import { useAnimateValue } from './useCoinStatus';
import styles from './coin.module.css';
import PropTypes from 'prop-types';

const Coins = (props) => {
  const [coins, changeCoins] = useAnimateValue(0, props.coin.value, 5000);
  useEffect(() => {
    changeCoins(props.coin.value);
  }, [props.coin.value, changeCoins]);
  return (
    <div className={styles.cointypeIndicator}>
      <div className={styles.tooltip}>
        <div className={`coin ${styles.rotateVertCenter}`}>
          <p> {coins} </p>
        </div>
        <span className={styles.tooltiptext}>{props.coin.name}</span>
      </div>
      <style jsx>{`
        .coin {
          background-color: ${props.coin.color};
          width: calc(5em / 2);
          height: calc(5em / 2);
          border-radius: 50%;
          box-shadow: 3px 3px 3px #000;
          border: 1px solid ${props.coin.borderColor};
          position: absolute;
        }
        .coin > p {
          padding-top: 1em;
          text-shadow: -1px -1px 1px #fff, 1px 1px 1px #000;
          color: #9c8468;
          font-weight: bold;
          font-size: 1.2em;
          opacity: 0.7;
          transform: translate(20%, -10%);
        }
      `}</style>
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
