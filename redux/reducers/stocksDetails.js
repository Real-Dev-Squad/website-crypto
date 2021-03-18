const initialState = {
  stocks: [],
  userStocks: [],
};

const stocksDetails = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_STOCKS': {
      return {
        ...state,
        stocks: action.payload.stocksData,
      };
    }
    case 'GET_USER_STOCKS': {
      return {
        ...state,
        userStocks: action.payload.userStocksData,
      };
    }
    default: {
      return state;
    }
  }
};

export default stocksDetails;
