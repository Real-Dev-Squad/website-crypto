import { combineReducers } from 'redux';
import cartDetails from './cartdetails';
import getShopListDetails from './shoplist';
import getSaveForLaterDetails from './savelater';

export default combineReducers({
  cartDetails,
  getShopListDetails,
  getSaveForLaterDetails,
});
