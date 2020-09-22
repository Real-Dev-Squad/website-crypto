import PropTypes from 'prop-types';
import styles from './user-info.module.css';

const PersonDetail = (props) => {
  const { name, type, photo } = props.personDetails;
  return (
    <>
      <img src={photo} className={styles.profilePic} alt="Profile Image" />
      <div>
        <h1>{name}</h1>
        <p className={styles.userName}>{type}</p>
        <p>
          FrontEnd Developer
          <br />
          <span className={styles.userName}>RDS</span>
        </p>
      </div>
    </>
  );
};

PersonDetail.propTypes = {
  name: PropTypes.string,
  photo: PropTypes.string,
  type: PropTypes.string,
};

export default PersonDetail;
