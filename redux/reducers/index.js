import { combineReducers } from 'redux';
import cartDetails from './cartdetails';
import getShopListDetails from './shoplist';
import getSaveForLaterDetails from './savelater';
import bankReducer from '../bank/bank.reducer';
export default combineReducers({
  cartDetails,
  getShopListDetails,
  getSaveForLaterDetails,
  bank: bankReducer,
});
