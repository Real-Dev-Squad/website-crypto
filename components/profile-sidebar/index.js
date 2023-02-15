import styles from './profileSidebar.module.css';

const ProfileSidebar = ({ personData }) => {
  return (
    <div className={styles.dashboard_profile} data-testid="profile-sidebar">
      <div>
        <div>
          <img
            className={styles.profile_img}
            src={personData.photo}
            alt="profile"
          />
          <h2 className={styles.profile_name}>{personData.name ?? ''}</h2>
          <p className={styles.profile_email}>{personData.email ?? ''}</p>
        </div>
        <div className={styles.account}>
          <h2 className={styles.profile_header}>Account</h2>
          <div className={styles.row}>
            <h3 className={styles.subHeading}>Joined</h3>
            <p>{personData.joined ?? ''}</p>
          </div>
        </div>
        <div className={styles.assets}>
          <h2 className={styles.profile_header}>Assets</h2>
          {Object.entries(personData.coins).map(([name, amount]) => {
            return (
              <div key={name} className={styles.row}>
                <h3 className={styles.subHeading}>{name}</h3>
                <p>{amount}</p>
              </div>
            );
          })}
          <button className={styles.more_assets}>More Assets...</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
