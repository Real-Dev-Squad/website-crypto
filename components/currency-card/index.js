import styles from './currencyCard.module.css';

const CurrencyCard = () => {
  return (
    <div className={styles.currency}>
      <p className={styles.logo}>₿</p>
      <div>
        <h3 className={styles.value}>
          1.9678 <span>BTC</span>
        </h3>
        <p className={styles.rate}>
          <span>↗</span> +12,5%
        </p>
      </div>
    </div>
  );
};

export default CurrencyCard;
