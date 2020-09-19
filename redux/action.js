import {
  ADD_CART_ITEMS,
  REMOVE_CART_ITEMS,
  ADD_SHOPLIST_ITEMS,
  REMOVE_SHOPLIST_ITEMS,
} from './actionTypes';

let totalItemsInCart = 0;

export const addCartItem = (item) => {
  // item will be just the name of item
  return {
    type: ADD_CART_ITEMS,
    payload: {
      totalItems: ++totalItemsInCart,
      item,
    },
  };
};

export const delCartItem = (item) => {
  return {
    type: REMOVE_CART_ITEMS,
    payload: {
      totalItems: --totalItemsInCart,
      item,
    },
  };
};

export const addShopListItem = (item) => {
  return {
    type: ADD_SHOPLIST_ITEMS,
    payload: {
      item,
    },
  };
};

export const delShopListItem = (item) => {
  console.log(item, 'action del item');
  return {
    type: REMOVE_SHOPLIST_ITEMS,
    payload: {
      item,
    },
  };
};
