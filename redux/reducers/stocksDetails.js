const initialState = {
  stocks: [],
};

const stocksDetails = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_STOCKS': {
      return {
        ...state,
        stocks: action.payload.stocksData,
      };
    }
    default: {
      return state;
    }
  }
};

export default stocksDetails;
