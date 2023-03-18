import AssetsList from './AssetsList';
import styles from './profileSidebar.module.css';

const ProfileSidebar = ({ personData }) => {
  return (
    <div className={styles.dashboard_profile} data-testid="profile-sidebar">
      <div>
        <div>
          <img
            data-testid="profile-sidebar-img"
            className={styles.profile_img}
            src={personData.photo}
            alt="profile"
          />
          <h2
            data-testid="profile-sidebar-name"
            className={styles.profile_name}
          >
            {personData.name ?? ''}
          </h2>
          <p
            data-testid="profile-sidebar-email"
            className={styles.profile_email}
          >
            {personData.email ?? ''}
          </p>
        </div>
        <div className={styles.account}>
          <h2
            data-testid="profile-sidebar-account-title"
            className={styles.profile_header}
          >
            Account
          </h2>
          <div className={styles.row}>
            <h3
              data-testid="profile-sidebar-joined-title"
              className={styles.subHeading}
            >
              Joined
            </h3>
            <p data-testid="profile-sidebar-joined-detail">
              {personData.joined ?? ''}
            </p>
          </div>
        </div>
        <div className={styles.assets}>
          <h2
            data-testid="profile-sidebar-assets-title"
            className={styles.profile_header}
          >
            Assets
          </h2>
          <AssetsList personData={personData} />
          <button
            data-testid="profile-sidebar-more-asset-btn"
            className={styles.more_assets}
          >
            More Assets...
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
