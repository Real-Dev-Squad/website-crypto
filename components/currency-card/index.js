import styles from './currencyCard.module.css';

const CurrencyCard = ({ name, value }) => {
  return (
    <div className={styles.currency}>
      <p data-testid={`currency-card-name-${name}`} className={styles.logo}>
        {name}
      </p>
      <div>
        <h3
          data-testid={`currency-card-value-${value}`}
          className={styles.value}
        >
          {value}
        </h3>
      </div>
    </div>
  );
};

export default CurrencyCard;
