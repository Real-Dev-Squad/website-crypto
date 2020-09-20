export const getCartDetails = (store) => store.cartDetails;
export const getShopListDetails = (store) => store.getShopListDetails;

export const getCartItems = (store) => {
  return getCartDetails(store) ? getCartDetails(store).cartItems : 'empty cart';
};

export const getCartTotalItems = (store) =>
  getCartDetails(store) ? getCartDetails(store).totalItemsInCart : 0;

export const getShopListCount = (store) =>
  getShopListDetails(store)
    ? getShopListDetails(store).shopListItemsCount
    : null;

export const getCartTotalCost = (store) =>
  getCartDetails(store) ? getCartDetails(store).totalCost : 0;
