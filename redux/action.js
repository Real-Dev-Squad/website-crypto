import {
  ADD_CART_ITEMS,
  REMOVE_CART_ITEMS,
  ADD_SHOPLIST_ITEMS,
  REMOVE_SHOPLIST_ITEMS,
  SAVE_FOR_LATER,
  DELETE_FROM_CART,
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

export const delShopListItem = (item, saveForLater = false) => {
  return {
    type: REMOVE_SHOPLIST_ITEMS,
    payload: {
      item,
      saveForLater,
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

// export const moveToCart = (item) => {
//   return {
//     type : MOVE_TO_CART,
//     payload: {
//       item
//     }
//   }
// }

export const delFromCart = (item, quantity) => {
  return {
    type: DELETE_FROM_CART,
    payload: {
      item,
      quantity,
    },
  };
};
