import axios from 'axios';

import { SHOP_PRODUCTS_ENDPOINT } from '../../constants';

export const get_shop_products = async () => {
  try {
    const {
      data: { Products },
    } = await axios.get(SHOP_PRODUCTS_ENDPOINT);
    // console.log(Products);
    return Products;
  } catch (error) {
    console.log(error.message);
    return [];
  }
};
