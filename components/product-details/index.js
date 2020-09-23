import PropTypes from 'prop-types';
import path from 'path';

export const ProductDetails = ({ productJSON }) => {
  return (
    <div className="product-container">
      <img
        className="product-image"
        src={path.join('../assets', productJSON.image)}
        alt={productJSON.id}
      />
      <div className="product-details">
        <h2> {productJSON.name}</h2>
        <h3> Where to use</h3>
        <ul>
          {productJSON.usage.map((use, index) => {
            return <li key={index}>{use}</li>;
          })}
        </ul>
      </div>
      <style jsx>{`
        .product-container {
          display: flex;
          grid-column-gap: 8rem;
          padding-top:10px;
          padding-bottom:10px;
          padding-left:10px;
        }
        .product-image {
          border: 1px solid #eee;
          box-shadow : 0 2px 2px #ccc;
          background-color: cyan;
          height: auto;
          width: 200px;
        }
        .product-details {
          margin-left -60px;
        }
      `}</style>
    </div>
  );
};

ProductDetails.propTypes = {
  productJSON: PropTypes.object,
};

ProductDetails.defaultProps = {
  productJSON: {},
};
