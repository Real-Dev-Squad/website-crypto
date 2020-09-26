import {
  ADD_CART_ITEMS,
  REMOVE_CART_ITEMS,
  DELETE_FROM_CART,
} from '../actionTypes';
import ProductDetails from '../../mock/products.json';
/* productName : {
    details,
    quantity
} */

const initialState = {
  cartItems: {},
  totalItemsInCart: 0,
  totalCost: 0,
};

export default function cartData(state = initialState, action) {
  switch (action.type) {
    case ADD_CART_ITEMS: {
      const { item } = action.payload;
      const itemDetails = state.cartItems[item]
        ? {
            details: ProductDetails[item],
            quantity: state.cartItems[item].quantity + 1,
          }
        : {
            details: ProductDetails[item],
            quantity: 1,
          };
      const totalAmount = itemDetails.details.price + state.totalCost;
      return {
        ...state,
        cartItems: {
          ...state.cartItems,
          [item]: {
            ...itemDetails,
          },
        },
        totalItemsInCart: state.totalItemsInCart + 1,
        totalCost: totalAmount,
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

      const totalItems = itemDetails.quantity ? itemDetails.quantity - 1 : 0;
      const amount =
        state.totalCost - itemDetails.details.price > 0
          ? state.totalCost - itemDetails.details.price
          : 0;

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
          totalItemsInCart: state.totalItemsInCart - 1,
          totalCost: amount,
        };
      } else {
        delete state.cartItems[item];
        return {
          ...state,
          totalItemsInCart: state.totalItemsInCart - 1,
          totalCost: amount,
        };
      }
    }
    case DELETE_FROM_CART: {
      const { item, quantity } = action.payload;
      const amountToReduce = ProductDetails[item].price * quantity;
      //TODO : do not mutate this directly
      delete state.cartItems[item];
      return {
        ...state,
        totalItemsInCart: state.totalItemsInCart - quantity,
        totalCost: state.totalCost - amountToReduce,
      };
    }

    default:
      return state;
  }
}
