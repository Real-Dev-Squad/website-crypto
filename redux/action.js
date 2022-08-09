import {
  ADD_CART_ITEMS,
  REMOVE_CART_ITEMS,
  ADD_SHOPLIST_ITEMS,
  REMOVE_SHOPLIST_ITEMS,
  SAVE_FOR_LATER,
  DELETE_FROM_CART,
  DEL_FROM_SAVELATER,
  GET_RDS_USER_ID,
  ADD_STOCKS,
} from './actionTypes';

import { GET_STOCKS, GET_USER_STOCKS } from '../constants/trading';

const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
const BASE_API_URL_TEMP = process.env.NEXT_PUBLIC_BASE_API_URL_TEMP;

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

export const getStocks = async () => {
  // const response = await fetch(`${BASE_API_URL}/stocks`);
  const response = await fetch(`http://localhost:8090/api/stocks`);

  const data = await response.json();

  return {
    type: GET_STOCKS,
    payload: {
      stocksData: data.stock,
    },
  };
};

export const addStocks = (body) => {
  return {
    type: ADD_STOCKS,
    payload: {
      stocks: body,
    },
  };
};
export const addRdsId = (body) => {
  return {
    type: GET_RDS_USER_ID,
    payload: {
      rdsUserId: body,
    },
  };
};

export const getUserStocks = async (rdsid) => {
  const response = await fetch(
    `http://localhost:8090/api/rdsUser/getInvestorByRdsId/${rdsid}`
  );
  const data = await response.json();
  const userStocksData = {
    stocks: data.ownedStocks,
    isLoggedIn: !(response.status == 401),
  };

  return {
    type: GET_USER_STOCKS,
    payload: {
      userStocksData,
    },
  };
};
