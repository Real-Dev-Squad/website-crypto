import {
  ADD_CART_ITEMS,
  REMOVE_CART_ITEMS,
  ADD_SHOPLIST_ITEMS,
  REMOVE_SHOPLIST_ITEMS,
  SAVE_FOR_LATER,
  DELETE_FROM_CART,
  DEL_FROM_SAVELATER,
} from './actionTypes';

//TODO : Move all export at bottom of file (named export)
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

export const delShopListItem = (
  item,
  saveForLater = false,
  delFromCart = false
) => {
  return {
    type: REMOVE_SHOPLIST_ITEMS,
    payload: {
      item,
      saveForLater,
      delFromCart,
    },
  };
};

export const saveForLater = (item) => {
  console.log({ item });
  return {
    type: SAVE_FOR_LATER,
    payload: {
      item,
    },
  };
};

export const delFromSaveLater = (item) => {
  return {
    type: DEL_FROM_SAVELATER,
    payload: {
      item,
    },
  };
};

export const delFromCart = (item, quantity) => {
  return {
    type: DELETE_FROM_CART,
    payload: {
      item,
      quantity,
    },
  };
};
