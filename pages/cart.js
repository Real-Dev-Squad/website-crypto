import { useState, useRef } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import personData from '../mock/person.json';
import Header from '@components/header';
import NavBar from '@components/NavBar';
import { CartCard } from '@components/cartlist-card';
import { CartSummary } from '@components/cart-summary';
import SaveLater from '@components/save-later';
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
import { Footer } from '@components/footer';
import GenericClosePopUp from '@components/Close-popup/GenericClosePopUp';
// ! ref rather then on summary icon should be on the whole component
const Cart = (props) => {
  const { addCartItem, addShopListItem } = props;
  const { delCartItem, delShopListItem } = props;
  const [showSummary, setShowSummary] = useState(false);
  const cartRef = useRef();
  GenericClosePopUp(cartRef, () => {
    setShowSummary(false);
  });
  return (
    <div>
      <NavBar personData={personData} />
      <div className="main-content">
        <div className="cart-container">
          <div>
            <div className="cart-container-heading">
              Your Shopping Cart - {props.totatCartItems}
            </div>
            <div ref={cartRef} className="summary-icon">
              <Image
                src="/assets/bill.png"
                alt="Summary icon"
                height={35}
                width={35}
                layout="fixed"
                onClick={() => {
                  setShowSummary((showSummary) => !showSummary);
                }}
              />
              {showSummary && (
                <div className="cart-summary-container-wrapper">
                  <CartSummary total={props.totalCartCost} />
                </div>
              )}
            </div>
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
            <p className="no-items-add">No Items Added!</p>
          )}
        </div>
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
      </div>
      <Footer />
      <style jsx>
        {`
          .cart-container {
            margin-top: 1.2rem;
            border: 1px solid #f4f4f4;
            border-radius: 10px;
            padding: 20px;
            background: white;
            cursor: pointer;
            box-shadow: 0 0 15px -7px rgba(0, 0, 0, 0.65);
            display: flex;
            flex-direction: column;
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
          .cart-summary-container-wrapper {
            position: absolute;
            width: 250px;
            right: 0;
            z-index: 5;
          }
          .cart-summary-container-wrapper:before {
            width: 15px;
            height: 15px;
            background-color: red;
            border-style: solid;
            border-width: 10px 15px 10px 0;
            border-color: transparent #dd4397 transparent transparent;
          }
          .goToShop-Button {
            background: #540075;
            color: white;
            border: 1px solid #540075;
            border-radius: 5px;
            padding: 0.5rem 2rem;
            font: inherit;
            cursor: pointer;
            margin
          }
          .main-content {
            min-height: calc(100vh-58px);
            position: relative;
            margin: auto 1.2rem;
          }
          .cart-container-items {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            flex: 1 1 0;
          }
          .no-items-add {
            padding: 10px;
          }
          .no-items-add:hover {
            cursor: default;
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
            margin-top: 1.2em;
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
