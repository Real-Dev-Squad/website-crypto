import {ADD_CART_ITEMS} from './actionTypes';

let totalItems = 0;

export const addCartItem = content => {
    return {
    type : ADD_CART_ITEMS,
    payload : {
        id : ++totalItems,
        content
    }
}
}