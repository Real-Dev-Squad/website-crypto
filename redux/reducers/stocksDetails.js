const initialState = {
  stocks: [],
  userStocksData: { stocks: [] },
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
        userStocksData: action.payload.userStocksData,
      };
    }
    case 'GET_RDS_USER_ID': {
      return {
        ...state,
        rdsUserId: action.payload.rdsUserId,
      };
    }
    case 'ADD_STOCKS': {
      return {
        ...state,
        stocks: action.payload.stocks,
      };
    }
    default: {
      return state;
    }
  }
};

export default stocksDetails;
