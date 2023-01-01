import styles from './profileSidebar.module.css';

const ProfileSidebar = () => {
  return (
    <div className={styles.dashboard_profile}>
      <div>
        <div>
          <img className={styles.profile_img} />
          <h2 className={styles.profile_name}>Manish Devrani</h2>
          <p className={styles.profile_email}>manishdevrani777@gmail.com</p>
        </div>
        <div className={styles.account}>
          <h2 className={styles.profile_header}>Account</h2>
          <div className={styles.row}>
            <h3 className={styles.subHeading}>Joined</h3>
            <p>June 22, 2020</p>
          </div>
          <div className={styles.row}>
            <h3 className={styles.subHeading}>Assets Total</h3>
            <p>$1,312,900</p>
          </div>
        </div>
        <div className={styles.assets}>
          <h2 className={styles.profile_header}>Assets</h2>
          <div className={styles.row}>
            <h3 className={styles.subHeading}>Bitcoin</h3>
            <p>23.5 BTC</p>
          </div>
          <div className={styles.row}>
            <h3 className={styles.subHeading}>Ethereum</h3>
            <p>190.45 ETH</p>
          </div>
          <div className={styles.row}>
            <h3 className={styles.subHeading}>Doge</h3>
            <p>239,500 DOGE</p>
          </div>
          <div className={styles.row}>
            <h3 className={styles.subHeading}>Ripple</h3>
            <p>65,100 XRP</p>
          </div>
          <button className={styles.more_assets}>More Assets...</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
