import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CartCard } from '../components/cartlist-card';
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

  useEffect(() => {
    setCartList(Object.keys(props.cartItems));
  }, [props.cartItems]);

  return (
    <div className="cart-container">
      <Link href="/shop">Go to Shop</Link>
      <p> Total Items = {props.totatCartItems}</p>
      {cartList.map((itemName) => {
        return (
          <CartCard
            details={props.cartItems[itemName].details}
            quantity={props.cartItems[itemName].quantity}
            add={{ addCartItem, addShopListItem }}
            del={{ delCartItem, delShopListItem }}
          />
        );
      })}
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
