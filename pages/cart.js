import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { CartCard } from '../components/cartlist-card';
import { CartSummary } from '../components/cart-summary';
import { getCartItems, getCartTotalItems } from '../redux/selector';
import {
  addCartItem,
  delCartItem,
  addShopListItem,
  delShopListItem,
} from '../redux/action';
import productData from '../mock/products.json';

const products = Object.keys(productData);
const Cart = (props) => {
  const { addCartItem, addShopListItem } = props;
  const { delCartItem, delShopListItem } = props;
  const [cartList, setCartList] = useState([]);
  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    setCartList(Object.keys(props.cartItems));
  }, [props.cartItems]);

  return (
    <div>
      <Header
        msg={`Your Shopping Cart - ${props.totatCartItems}`}
        comp={<Link href="/shop">Go to Shop</Link>}
      />
      <div className="cart-container">
        <div className="cart-container-items">
          {cartList.map((itemName, index) => {
            return (
              <CartCard
                key={index}
                details={props.cartItems[itemName].details}
                quantity={props.cartItems[itemName].quantity}
                add={{ addCartItem, addShopListItem }}
                del={{ delCartItem, delShopListItem }}
              />
            );
          })}
        </div>
        <CartSummary />
      </div>
      {/* <Footer /> */}

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
        `}
      </style>
    </div>
  );
};

const mapStateToProps = (state) => {
  const cartItems = getCartItems(state);
  const totatCartItems = getCartTotalItems(state);
  return { cartItems, totatCartItems };
};

export default connect(mapStateToProps, {
  addCartItem,
  delCartItem,
  addShopListItem,
  delShopListItem,
})(Cart);
