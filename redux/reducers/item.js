import {ADD_CART_ITEMS} from '../actionTypes';

const initialState = {
    cartItems : '',
    totalItems : 0
}

export default function cartData(state = initialState, action) {
    switch (action.type) {
        case  ADD_CART_ITEMS : {
            const {id , content} = action.payload;
            return {
                ...state,
                cartItems : content,
                totalItems: id
            };
        }
        default: 
            return state;
    }
}