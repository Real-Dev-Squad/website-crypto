import {
  ADD_CART_ITEMS,
  REMOVE_CART_ITEMS,
  ADD_SHOPLIST_ITEMS,
  REMOVE_SHOPLIST_ITEMS,
} from './actionTypes';

export const addCartItem = (item) => {
  // item will be just the name of item
  return {
    type: ADD_CART_ITEMS,
    payload: {
      totalItems: 0,
      item,
    },
  };
};

export const delCartItem = (item) => {
  console.log('delCartItem', item);
  return {
    type: REMOVE_CART_ITEMS,
    payload: {
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
