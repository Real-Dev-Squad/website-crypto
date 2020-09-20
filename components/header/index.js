import styles from './header.module.css'

const Header = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles.branding}>
        <img className={styles.logo} src="https://staging-members-rds.herokuapp.com/images/Real-Dev-Squad@1x.png" alt="RealDevSquad Logo" />
        <div className={styles.rdsName}>Real Dev Squad</div>
      </div>

      <div className={styles.coins}>
        <div className={`${styles.coin} ${styles.gold}`}></div>
        <div className={`${styles.coin} ${styles.silver}`}></div>
        <div className={`${styles.coin} ${styles.bronze}`}></div>
      </div>
    </div >
  );
};

export default Header;