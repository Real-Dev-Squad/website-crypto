import path from 'path';
import colors from '../../color/color.json';
import PropTypes from 'prop-types';

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

  const handleSaveForLater = (item, quantity) => {
    props.cartDel(item, quantity);
    props.saveForLater(item);
    props.del.delShopListItem(item, true);
  };
  return (
    <div className="cartcard-container">
      <img
        className="card-item"
        src={path.join('./assets', product.image)}
        alt={product.name}
      />
      <span className="card-item"> {product.name}</span>
      <span className="card-item"> {props.quantity}</span>
      <div className="cartcard-button card-item">
        <button onClick={() => handleAddProduct(product.name)}>+</button>
        <button onClick={() => handleRemoveProduct(product.name)}>-</button>
      </div>
      <span className="card-item"> RDS {product.price} </span>
      <div className="cartcard-fnbutton card-item">
        <button onClick={() => props.cartDel(product.name, props.quantity)}>
          {' '}
          Delete from Cart
        </button>
        <button
          onClick={() => handleSaveForLater(product.name, props.quantity)}
        >
          {' '}
          Save for Later{' '}
        </button>
      </div>
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
          width: 50px;
          padding: 2px;
        }
        .cartcard-fnbutton {
          display: flex;

          justify-content: space-between;
        }
        .cartcard-fnbutton > button {
          border: none;
          padding: 5px;
          width: 6em;
          color: white;
          display: inline-block;
          background-color: ${colors.pink.dark};
          font-size: 16px;
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

CartCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
};
