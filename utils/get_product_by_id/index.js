import axios from 'axios';
import { SHOP_PRODUCTS_ENDPOINT } from '../../constants';

export const get_product_by_id = async (id) => {
  try {
    const { Product } = axios.get(`${SHOP_PRODUCTS_ENDPOINT}/${id}`);
    return Product;
  } catch (error) {
    console.log(error.message);
    return {};
  }
};
