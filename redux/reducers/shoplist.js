import { ADD_SHOPLIST_ITEMS, REMOVE_SHOPLIST_ITEMS } from '../actionTypes';
import ProductDetails from '../../mock/products.json';
/* shopListItemsCount : {
    shoe : 15
}*/
const initialState = {
  shopListItemsCount: {},
};

export default function shopData(state = initialState, action) {
  switch (action.type) {
    case ADD_SHOPLIST_ITEMS: {
      const { item } = action.payload;
      let quantity = state.shopListItemsCount[item]
        ? state.shopListItemsCount[item] + 1
        : 1;
      return {
        ...state,
        shopListItemsCount: {
          ...state.shopListItemsCount,
          [item]: quantity,
        },
      };
    }
    case REMOVE_SHOPLIST_ITEMS: {
      const { item } = action.payload;
      let quantity = state.shopListItemsCount[item]
        ? state.shopListItemsCount[item] - 1
        : 0;
      return {
        ...state,
        shopListItemsCount: {
          ...state.shopListItemsCount,
          [item]: quantity,
        },
      };
    }
    default:
      return state;
  }
}
