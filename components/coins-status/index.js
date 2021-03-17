import { useState, useEffect } from 'react';
import { useAnimateValue } from './useCoinStatus';
import styles from './coin.module.css';
import PropTypes from 'prop-types';
import fetchSelfDetails from '../../utils/fetchSelfDetails';
import fetchData from 'utils/fetchData';

const Coins = (props) => {
  const [coins, changeCoins] = useAnimateValue(0, props.balance, 5000);

  useEffect(() => {
    changeCoins(props.balance);
  }, [props.balance, changeCoins]);

  return (
    <div className={styles.cointypeIndicator}>
      <div className={styles.coinData}>
        <p> {props.coin}</p>
        <p> {props.balance} </p>
      </div>
      <div className={`coin ${styles.rotateVertCenter}`}></div>
      <style jsx>{`
        .coin {
          background-color: ${props.coin === 'neelam'
            ? 'blue'
            : props.coin === 'dinero'
            ? 'green'
            : 'gray'};
          width: calc(5em / 2);
          height: calc(5em / 2);
          border-radius: 50%;
          box-shadow: 3px 3px 3px #000;
          border: 1px solid
            ${props.coin === 'neelam'
              ? 'blue'
              : props.coin === 'dinero'
              ? 'green'
              : 'gray'};
        }
      `}</style>
    </div>
  );
};

const CoinsStatus = (props) => {
  const [currencies, setCurrencies] = useState();
  const WALLET_REST_END_POINT = 'http://localhost:3001/wallet';

  useEffect(async () => {
    let i = 1,
      cur,
      text,
      response,
      coinsArray = [];

    response = await fetch(WALLET_REST_END_POINT, { credentials: 'include' });
    text = await response.text();
    cur = JSON.parse(text).wallet.currencies;
    for (const name in cur) {
      coinsArray.push(<Coins coin={name} balance={cur[name]} key={i++} />);
    }
    setCurrencies(coinsArray);
  }, []);

  return <div className={styles.coinsContainer}>{currencies}</div>;
};

Coins.propTypes = {
  coin: PropTypes.object,
  value: PropTypes.number,
  name: PropTypes.string,
  color: PropTypes.string,
  borderColor: PropTypes.string,
};

export default CoinsStatus;
