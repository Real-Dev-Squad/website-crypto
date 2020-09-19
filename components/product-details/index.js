import path from 'path';
import productData from '../../mock/products.json';

export const ProductDetails = ({ productName }) => {
  const product = productData[productName];
  return (
    <div className="product-container">
      <img
        className="product-image"
        src={path.join('../assets',product.image)}
        alt={product.id}
      />
      <div>
        <h2> {product.name}</h2>
        <h3> Where to use</h3>
        <ul>
          {product.usage.map((use, index) => {
            return <li key={index}>{use}</li>;
          })}
        </ul>
      </div>
      <style jsx>{`
        .product-container {
          display: grid;
          border: 2px solid green;
          grid-column-gap: 5rem;
        }
        .product-image {
          border: 2px solid red;
          background-color: cyan;
          height: 200px;
          width: 200px;
        }
      `}</style>
    </div>
  );
};
