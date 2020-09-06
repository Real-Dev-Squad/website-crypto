
export const getCartItemsDetails = store => store.addItem;


export const getCartItems = store => {
   return  getCartItemsDetails(store) ? getCartItemsDetails(store).cartItems : 'foobar';
}

export const getCartTotalItems = store => 
    getCartItemsDetails(store) ? getCartItemsDetails(store).totalItems : 0;
