import { useState, useEffect } from 'react';
import { useAnimateValue } from './useCoinStatus';
import styles from './coin.module.css';
import PropTypes from 'prop-types';

const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
const WALLET_URL = `${BASE_API_URL}/wallet`;
const CURRENCIES = {
  NEELAM: 'neelam',
  DINERO: 'dinero',
};

const Coins = (props) => {
  const { coin, balance } = props;
  const [coins, changeCoins] = useAnimateValue(0, balance, 5000);
  const currencyColor =
    coin === CURRENCIES.NEELAM
      ? styles.blue
      : coin === CURRENCIES.DINERO
      ? styles.green
      : styles.gray;

  useEffect(() => {
    changeCoins(balance);
  }, [balance, changeCoins]);

  return (
    <div className={styles.cointypeIndicator}>
      <div className={styles.coinData}>
        <p>{coin}</p>
        <p>{balance}</p>
      </div>
      <div className={`coin ${styles.rotateVertCenter}`}></div>
      <style jsx>{`
        .coin {
          background-color: ${currencyColor};
          width: calc(5em / 2);
          height: calc(5em / 2);
          border-radius: 50%;
          box-shadow: 3px 3px 3px #000;
          border: 1px solid ${currencyColor};
        }
      `}</style>
    </div>
  );
};

const CoinsStatus = () => {
  const [currencies, setCurrencies] = useState([]);
  const coins = [];

  useEffect(async () => {
    const walletData = await fetch(WALLET_URL, { credentials: 'include' })
      .then((response) => {
        if (response.status >= 400 && response.status < 600) {
          throw new Error('Bad response from server');
        }
        return response.json();
      })
      .then((ResponseJson) => {
        const currencyBalance = ResponseJson.wallet.currencies;
        for (const name in currencyBalance) {
          coins.push({
            name,
            balance: currencyBalance[name],
          });
        }
        setCurrencies(coins);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.coinsContainer}>
      {currencies.map((coin) => (
        <Coins coin={coin.name} balance={coin.balance} key={coin.name} />
      ))}
    </div>
  );
};

Coins.propTypes = {
  coin: PropTypes.string,
  value: PropTypes.number,
  name: PropTypes.string,
  color: PropTypes.string,
  borderColor: PropTypes.string,
};

export default CoinsStatus;
