import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
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
    console.log('Hi I am from cart', props);
    setCartList(Object.keys(props.cartItems));
  }, [props.cartItems]);

  return (
    <div className="cart-container">
      <p> Total Items = {props.totatCartItems}</p>
      {cartList.map((itemName, index) => {
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
