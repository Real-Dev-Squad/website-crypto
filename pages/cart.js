import { useState } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import personData from '../mock/person.json';
import Header from '../components/header';
import NavBar from '../components/NavBar';
import { CartCard } from '../components/cartlist-card';
import { CartSummary } from '../components/cart-summary';
import SaveLater from '../components/save-later';
import Modal from '../components/Modal/index';
import {
  getCartItems,
  getCartTotalItems,
  getCartTotalCost,
  getSaveForLaterItems,
  getSaveForLaterItemsCount,
} from '../redux/selector';
import {
  addCartItem,
  delCartItem,
  addShopListItem,
  delShopListItem,
  delFromCart,
  saveForLater,
  delFromSaveLater,
} from '../redux/action';
import colors from '../color/color.json';
import Image from 'next/image';

// const products = Object.keys(productData);
const Cart = (props) => {
  const { addCartItem, addShopListItem } = props;
  const { delCartItem, delShopListItem } = props;
  const [showSummary, setShowSummary] = useState(false);
  console.log({ showSummary });

  const successMsg = () => {
    <Modal className="modalShow" fname="congrats" lname="transaction" />;
  };
  const failMsg = () => {
    <Modal
      className="modalShow"
      fname="no coins"
      lname={<Link href="/bank"> Go to Bank </Link>}
    />;
  };

  return (
    <div>
      <NavBar personData={personData} />
      <Header comp={<Link href="/shop">Go to Shop</Link>} />
      <Modal tog={props.totalCartCost ? successMsg : failMsg} />
      <div className="cart-container">
        <div className="cart-container-heading">
          Your Shopping Cart - {props.totatCartItems}
        </div>

        <div className="summary-icon">
          <Image
            src="/assets/bill.png"
            alt="Summary icon"
            height={35}
            width={35}
            layout="fixed"
            onClick={() => {
              setShowSummary(!showSummary);
            }}
          />
        </div>
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
                  cartDel={props.delFromCart}
                  saveForLater={props.saveForLater}
                />
              );
            })}
          </div>
        ) : (
          <p> Oops No Items !</p>
        )}
      </div>
      {showSummary ? (
        <div className="cart-summary-container">
          {' '}
          <CartSummary total={props.totalCartCost} />
        </div>
      ) : null}

      <div className="saveforlater-container">
        <h2> Save For Later - {props.saveLaterItemsQuantity} </h2>
        {Object.keys(props.saveLaterItems).map((item, id) => {
          return (
            <SaveLater
              key={id}
              details={props.saveLaterItems[item]}
              add={{ addCartItem, addShopListItem }}
              remove={props.delFromSaveLater}
            />
          );
        })}
      </div>

      <style jsx>
        {`
          .cart-container {
            margin: 1.2em;
            border: 1px solid #f4f4f4;
            border-radius: 10px;
            padding: 20px;
            background: white;
            cursor: pointer;
            box-shadow: 0 0 15px -7px rgba(0, 0, 0, 0.65);
          }
          .cart-container-heading {
            font-size: 20px;
            font-weight: bold;
            display: inline-block;
          }
          .summary-icon {
            float: right;
            position: relative;
          }
          .cart-summary-container {
            position: absolute;
            width: 400px;
            top: 35px;
            float: right;
            right: 75px;
            z-index: 5;
          }

          .cart-container-items {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            flex: 1 1 0;
          }

          p {
            color: white;
            font-size: 30px;
            background-color: ${colors.pink.primary};
            text-align: center;
            height: 60px;
          }
          .saveforlater-container {
            display: flex;
            flex-direction: column;
            margin: 1.2em;
            border: 1px solid #f4f4f4;
            border-radius: 10px;
            padding: 20px;
            background: white;
            cursor: pointer;
            box-shadow: 0 0 15px -7px rgba(0, 0, 0, 0.65);
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
  const saveLaterItems = getSaveForLaterItems(state);
  const saveLaterItemsQuantity = getSaveForLaterItemsCount(state);
  return {
    cartItems,
    totatCartItems,
    totalCartCost,
    saveLaterItems,
    saveLaterItemsQuantity,
  };
};

export default connect(mapStateToProps, {
  addCartItem,
  delCartItem,
  addShopListItem,
  delShopListItem,
  delFromCart,
  saveForLater,
  delFromSaveLater,
})(Cart);
