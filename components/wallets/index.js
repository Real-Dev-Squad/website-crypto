import CurrencyCard from '@components/currency-card';
import styles from './wallets.module.css';

const Wallets = () => {
  return (
    <div className={styles.wallets}>
      <div className={styles.header}>
        <h3>Wallets</h3>
        <button>More Assets →</button>
      </div>
      <div className={styles.currency_list}>
        <CurrencyCard />
        <CurrencyCard />
        <CurrencyCard />
        <div className={styles.add_currency}>
          <button>+ Add Currency</button>
        </div>
      </div>
    </div>
  );
};

export default Wallets;
