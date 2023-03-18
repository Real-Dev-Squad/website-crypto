import styles from './chartActions.module.css';
import monthsList from '../../constants/months';

const ChartActions = () => {
  return (
    <div className={styles.chart_actions}>
      <section>
        <label htmlFor="month" className={styles.sr_only}>
          Select month
        </label>
        <select
          data-testid="transaction-select-month"
          id="month"
          className={styles.month_select}
        >
          {monthsList.map((month) => {
            return (
              <option
                data-testid={`transaction-select-month-${month}`}
                key={month}
                value={month}
              >
                {month}
              </option>
            );
          })}
        </select>
      </section>
      <button data-testid="latest-transaction-btn" className={styles.button}>
        Latest Transaction
      </button>
    </div>
  );
};

export default ChartActions;
