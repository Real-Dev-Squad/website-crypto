import PropTypes from 'prop-types';
const PersonDetail = (props) => {
  const { name, type, photo } = props.personDetails;
  return (
    <div className="userinfo-container">
      <div className="img">
        <img src={photo} alt="profile picture"></img>
      </div>

      <div>
        <div className="name"> {name} </div>
        <div className="text-gray"> {type} </div>
        <div className="text-gray"> some extra information</div>
      </div>

      <style jsx>{`
        .userinfo-container {
          padding: 1em;
          display: flex;
          align-items: center;
        }
        .userinfo-container > .img {
          border: 3px solid #e30062;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          margin-right: 10px;
          overflow: hidden;
        }
        .userinfo-container > .img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .userinfo-container .name {
          color: #e30062;
          font-size: 36px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

PersonDetail.propTypes = {
  name: PropTypes.string,
  photo: PropTypes.string,
  type: PropTypes.string,
};

export default PersonDetail;
