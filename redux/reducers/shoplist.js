import { ADD_SHOPLIST_ITEMS, REMOVE_SHOPLIST_ITEMS } from '../actionTypes';
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
      const { item, saveForLater, delFromCart } = action.payload;
      if (saveForLater || delFromCart) {
        return {
          ...state,
          shopListItemsCount: {
            ...state.shopListItemsCount,
            [item]: 0,
          },
        };
      }
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
