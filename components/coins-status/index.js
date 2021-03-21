import { useState, useEffect } from 'react';
import { BASE_API_URL, WALLET_URL, CURRENCIES } from '../../constants';
import { useAnimateValue } from './useCoinStatus';
import styles from './coin.module.css';
import PropTypes from 'prop-types';

const Coins = (props) => {
  const { coin, balance, animate } = props;
  const [animatedBalance, changeAnimatedBalance] = useAnimateValue(
    0,
    balance,
    5000
  );
  const currencyColor =
    coin === CURRENCIES.NEELAM
      ? styles.blue
      : coin === CURRENCIES.DINERO
      ? styles.green
      : styles.gray;

  useEffect(() => {
    changeAnimatedBalance(balance);
  }, [balance, changeAnimatedBalance]);

  return (
    <div className={styles.cointypeIndicator}>
      <div className={styles.coinData}>
        <p>{coin}</p>
        <p>{animate ? animatedBalance : balance}</p>
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
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const coins = [];

  const fetchData = async () => {
    await fetch(WALLET_URL, { credentials: 'include' })
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
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.coinsContainer}>
      {isError && <p>Something went wrong ...</p>}
      {!isError && isLoading ? (
        <p>Loading...</p>
      ) : (
        currencies.map((coin) => (
          <Coins
            coin={coin.name}
            balance={coin.balance}
            key={coin.name}
            animate={true}
          />
        ))
      )}
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
