export const ProductDetails = ({ product = {} }) => {
  return (
    <div className="product-container">
      <img
        className="product-image"
        src="../../styles/user-female-alt-icon.png"
      />
      <div>
        <p> Name : name of the product</p>
        <p> Where to use : description of the product</p>
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
