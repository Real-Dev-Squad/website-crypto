import { combineReducers } from 'redux';
import cartDetails from './cartdetails';
import getShopListDetails from './shoplist';

export default combineReducers({ cartDetails, getShopListDetails });
