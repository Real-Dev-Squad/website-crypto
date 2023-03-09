import styles from './chartActions.module.css';
import monthsList from '../../constants/months';

const ChartActions = () => {
  return (
    <div className={styles.chart_actions}>
      <section>
        <label htmlFor="month" className={styles.sr_only}>
          Select month
        </label>
        <select id="month" className={styles.month_select}>
          {monthsList.map((month) => {
            return (
              <option key={month} value={month}>
                {month}
              </option>
            );
          })}
        </select>
      </section>
      <button className={styles.button}>Latest Transaction</button>
    </div>
  );
};

export default ChartActions;
