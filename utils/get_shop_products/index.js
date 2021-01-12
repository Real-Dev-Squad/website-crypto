import axios from 'axios';
import { SHOP_PRODUCTS_ENDPOINT } from '../../constants';

export const get_shop_products = async () => {
  try {
    const { Products } = await axios.get(SHOP_PRODUCTS_ENDPOINT);
    return Products;
  } catch (error) {
    console.log(error.message);
    return [];
  }
};
