import { combineReducers } from 'redux';
import cartDetails from './cartdetails';
import getShopListDetails from './shoplist';
import getSaveForLaterDetails from './savelater';
import stocksDetails from './stocksDetails';

export default combineReducers({
  cartDetails,
  getShopListDetails,
  getSaveForLaterDetails,
  stocksDetails,
});
