import CurrencyCard from '@components/currency-card';
import styles from './wallets.module.css';

const Wallets = ({ currencyData }) => {
  return (
    <div className={styles.wallets} data-testid="wallets">
      <div className={styles.header}>
        <h3>Wallets</h3>
        <button>More Assets →</button>
      </div>
      <div className={styles.currency_list}>
        <div className={styles.currencyCardsContainer}>
          {currencyData.map((currency) => {
            return <CurrencyCard key={currency.name} {...currency} />;
          })}
        </div>
        <div className={styles.add_currency}>
          <button>+ Add Currency</button>
        </div>
      </div>
    </div>
  );
};

export default Wallets;
