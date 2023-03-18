import CurrencyCard from '@components/currency-card';
import styles from './wallets.module.css';

const Wallets = ({ currencyData }) => {
  return (
    <div className={styles.wallets}>
      <div className={styles.header}>
        <h3 data-testid="wallets-title">Wallets</h3>
        <button data-testid="wallets-more-assets-btn">More Assets →</button>
      </div>
      <div className={styles.currency_list}>
        <div className={styles.currencyCardsContainer}>
          {currencyData.map((currency) => {
            return <CurrencyCard key={currency.name} {...currency} />;
          })}
        </div>
        <div className={styles.add_currency}>
          <button data-testid="wallets-add-currency-btn">+ Add Currency</button>
        </div>
      </div>
    </div>
  );
};

export default Wallets;
