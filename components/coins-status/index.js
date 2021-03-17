import { useState, useEffect } from 'react';
import { useAnimateValue } from './useCoinStatus';
import styles from './coin.module.css';
import PropTypes from 'prop-types';

const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
const WALLET_URL = `${BASE_API_URL}/wallet`;

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

  useEffect(async () => {
    let walletJson,
      walletData,
      currencyBalance,
      coinsArray = [];

    walletData = await fetch(WALLET_URL, { credentials: 'include' });
    walletJson = await walletData.text();
    currencyBalance = JSON.parse(walletJson).wallet.currencies;
    for (const name in currencyBalance) {
      coinsArray.push(
        <Coins coin={name} balance={currencyBalance[name]} key={name} />
      );
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
