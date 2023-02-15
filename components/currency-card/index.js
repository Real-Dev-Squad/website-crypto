import styles from './currencyCard.module.css';

const CurrencyCard = ({ name, value }) => {
  return (
    <div className={styles.currency} data-testid="currency-card">
      <p className={styles.logo}>{name}</p>
      <div>
        <h3 className={styles.value}>{value}</h3>
      </div>
    </div>
  );
};

export default CurrencyCard;
