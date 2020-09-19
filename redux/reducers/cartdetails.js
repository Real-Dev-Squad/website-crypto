import { ADD_CART_ITEMS, REMOVE_CART_ITEMS } from '../actionTypes';
import ProductDetails from '../../mock/products.json';
/* productName : {
    details,
    quantity
} */

const initialState = {
  cartItems: {},
  totalItemsInCart: 0,
};

export default function cartData(state = initialState, action) {
  switch (action.type) {
    case ADD_CART_ITEMS: {
      const { totalItems, item } = action.payload;
      const itemDetails = state.cartItems[item]
        ? {
            details: ProductDetails[item],
            quantity: state.cartItems[item].quantity + 1,
          }
        : {
            details: ProductDetails[item],
            quantity: 1,
          };
      return {
        ...state,
        cartItems: {
          ...state.cartItems,
          [item]: {
            ...itemDetails,
          },
        },
        totalItemsInCart: totalItems,
      };
    }
    case REMOVE_CART_ITEMS: {
      const { item } = action.payload;
      const itemDetails = state.cartItems[item]
        ? {
            details: ProductDetails[item],
            quantity: state.cartItems[item].quantity,
          }
        : {
            details: ProductDetails[item],
            quantity: 0,
          };

      const totalItems =
        itemDetails.quantity > 0 ? itemDetails.quantity - 1 : null;
      if (totalItems) {
        return {
          ...state,
          cartItems: {
            ...state.cartItems,
            [item]: {
              ...itemDetails,
              quantity: totalItems,
            },
          },
          totalItemsInCart: totalItems,
        };
      } else {
        delete state.cartItems[item];
        return {
          ...state,
        };
      }
    }
    default:
      return state;
  }
}
