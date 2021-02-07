import NavBar from '../NavBar';
import personData from '../../mock/person.json';
import PropTypes from 'prop-types';
import path from 'path';
import Image from 'next/image';

export const ProductDetails = ({ productJSON }) => {
  return (
    <>
      <NavBar personData={personData} />
      <div className="product-container">
        <div className="product-image">
          <Image
            src={path.join('/assets', productJSON.image)}
            alt={productJSON.id}
            width={200}
            height={200}
          />
        </div>

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
        }
        .product-details {
          margin-left -60px;
        }
      `}</style>
      </div>
    </>
  );
};

ProductDetails.propTypes = {
  productJSON: PropTypes.object,
};

ProductDetails.defaultProps = {
  productJSON: {},
};
