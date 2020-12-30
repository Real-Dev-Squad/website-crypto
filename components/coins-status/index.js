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
      <div className={styles.coinData}>
        <p> {props.coin.name}</p>
        <p> {coins} </p>
      </div>
      <div className={`coin ${styles.rotateVertCenter}`}></div>
      <style jsx>{`
        .coin {
          background-color: ${props.coin.color};
          width: calc(5em / 2);
          height: calc(5em / 2);
          border-radius: 50%;
          box-shadow: 3px 3px 3px #000;
          border: 1px solid ${props.coin.borderColor};
        }
      `}</style>
    </div>
  );
};

const CoinsStatus = (props) => {
  let coinsArray = props.coins.map((coin, index) => {
    return <Coins coin={coin} key={index} />;
  });
  return <div className={styles.coinsContainer}>{coinsArray}</div>;
};

Coins.propTypes = {
  coin: PropTypes.object,
  value: PropTypes.number,
  name: PropTypes.string,
  color: PropTypes.string,
  borderColor: PropTypes.string,
};

export default CoinsStatus;
