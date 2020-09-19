import path from 'path';
import colors from '../../color/color.json';
export const CartCard = (props) => {
  const { details: product } = props;
  const handleAddProduct = (item) => {
    props.add.addCartItem(item);
    props.add.addShopListItem(item);
  };

  const handleRemoveProduct = (item) => {
    props.del.delCartItem(item);
    props.del.delShopListItem(item);
  };
  return (
    <div className="cartcard-container">
      <img
        className="card-item"
        src={path.join('./', 'coins.jpg')}
        alt={product.name}
      />
      <span className="card-item"> {product.name}</span>
      <span className="card-item"> {props.quantity}</span>
      <div className="cartcard-button card-item">
        <button onClick={() => handleAddProduct(product.name)}>+</button>
        <button onClick={() => handleRemoveProduct(product.name)}>-</button>
      </div>
      <span className="card-item"> RDS {product.price} </span>
      <style jsx>{`
        .cartcard-container {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          background-color: ${colors.pink.light};
          padding: 5px;
          margin: 2px;
        }

        .card-item {
          width: 25%;
        }
        .cartcard-container > img {
          border: 2px solid grey;
          width: 5em;
          height: 5em;
          border-radius: 50%;
          margin-left: 1.2em;
        }

        .cartcard-container > span {
          text-align: center;
        }

        .cartcard-button {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        button {
          background-color: ${colors.pink.dark};
          border: none;
          color: white;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin-bottom: 0.5em;
          cursor: pointer;
          width: 20px;
          padding: 2px;
        }

        @media only screen and (max-width: 600px) {
          .cartcard-container {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};
