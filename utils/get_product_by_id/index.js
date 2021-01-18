import axios from 'axios';
import { SOP_PRODUCT_BY_ID_ENDPOINT } from '../../constants';

export const get_product_by_id = async (id) => {
  try {
    const {
      data: { Products },
    } = await axios.get(`${SOP_PRODUCT_BY_ID_ENDPOINT}/${id}`);
    // console.log(data);
    return Products;
  } catch (error) {
    console.log(error.message);
    return {};
  }
};
