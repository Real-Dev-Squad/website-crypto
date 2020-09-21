import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { CartCard } from '../components/cartlist-card';
import { CartSummary } from '../components/cart-summary';
import {
  getCartItems,
  getCartTotalItems,
  getCartTotalCost,
} from '../redux/selector';
import {
  addCartItem,
  delCartItem,
  addShopListItem,
  delShopListItem,
} from '../redux/action';
import productData from '../mock/products.json';
import colors from '../color/color.json';

const products = Object.keys(productData);
const Cart = (props) => {
  const { addCartItem, addShopListItem } = props;
  const { delCartItem, delShopListItem } = props;
  const [showSummary, setShowSummary] = useState(false);

  return (
    <div>
      <Header
        msg={`Your Shopping Cart - ${props.totatCartItems}`}
        comp={<Link href="/shop">Go to Shop</Link>}
      />
      <div className="cart-container">
        {Object.keys(props.cartItems).length ? (
          <div className="cart-container-items">
            {Object.keys(props.cartItems).map((itemName, index) => {
              return (
                <CartCard
                  key={index}
                  details={props.cartItems[itemName].details || ''}
                  quantity={props.cartItems[itemName].quantity || ''}
                  add={{ addCartItem, addShopListItem }}
                  del={{ delCartItem, delShopListItem }}
                />
              );
            })}
          </div>
        ) : (
          <p> Oops No Items !</p>
        )}

        <CartSummary total={props.totalCartCost} />
      </div>
      { <Footer /> }

      <style jsx>
        {`
          .cart-container {
            display: flex;
            padding: 0.5em;
          }

          .cart-container-items {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            flex: 1 1 0;
            margin-right: 1.2em;
          }
          p {
            color: white;
            font-size: 36px;
            background-color: ${colors.pink.primary};
            width: 75%;
            text-align: center;
            height: 60px;
          }
        `}
      </style>
    </div>
  );
};

const mapStateToProps = (state) => {
  const cartItems = getCartItems(state);
  const totatCartItems = getCartTotalItems(state);
  const totalCartCost = getCartTotalCost(state);
  return { cartItems, totatCartItems, totalCartCost };
};

export default connect(mapStateToProps, {
  addCartItem,
  delCartItem,
  addShopListItem,
  delShopListItem,
})(Cart);
