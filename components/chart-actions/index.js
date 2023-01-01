import styles from './chartActions.module.css';

const ChartActions = () => {
  return (
    <div className={styles.chart_actions}>
      <section>
        <label htmlFor="month" className={styles.sr_only}>
          Select month
        </label>
        <select id="month" className={styles.month_select}>
          <option value="January">January</option>
        </select>
      </section>
      <button className={styles.button}>Latest Transaction</button>
    </div>
  );
};

export default ChartActions;
