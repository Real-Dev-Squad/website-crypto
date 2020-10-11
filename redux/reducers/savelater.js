import { SAVE_FOR_LATER } from '../actionTypes';
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

      return {
        saveLaterItems: {
          ...state.saveLaterItems,
          [item]: itemDetails,
        },
        totalItemsForSaveLater: state.totalItemsForSaveLater + 1,
      };
    }
    default:
      return state;
  }
}
