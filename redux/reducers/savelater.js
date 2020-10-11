import { SAVE_FOR_LATER, DEL_FROM_SAVELATER } from '../actionTypes';
import ProductDetails from '../../mock/products.json';

const initialState = {
  saveLaterItems: {},
  totalItemsForSaveLater: 0,
};

export default function saveLaterData(state = initialState, action) {
  switch (action.type) {
    case SAVE_FOR_LATER: {
      const { item } = action.payload;
      const itemDetails = ProductDetails[item];
      if (state.saveLaterItems[item]) {
        return state;
      }

      return {
        saveLaterItems: {
          ...state.saveLaterItems,
          [item]: itemDetails,
        },
        totalItemsForSaveLater: state.totalItemsForSaveLater + 1,
      };
    }
    case DEL_FROM_SAVELATER: {
      const { item } = action.payload;
      let newState = {
        ...state,
      };
      delete newState.saveLaterItems[item];
      newState.totalItemsForSaveLater = newState.totalItemsForSaveLater - 1;
      return {
        ...newState,
      };
    }
    default:
      return state;
  }
}
