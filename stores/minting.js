import React, { createContext, useReducer } from 'react';

const ADD_SCRAPS = 'ADD_SCRAPS';

const initialState = {};

/*
Current format 
{
  ankush: {
    scraps: 20
  },
  swaraj: {
    scraps: 34
  }
}
*/

const store = createContext({
  dispatch: null,
  state: null,
}); // new context

const { Provider, Consumer } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case ADD_SCRAPS: {
        const { payload: { username, newScraps = 0 } = {} } = action;
        const {
          [username]: { scraps: existingScrapsForUser = 0 } = {},
        } = state;
        const newTotalScrapsForUser = existingScrapsForUser + newScraps;
        const newUserData = {
          scraps: newTotalScrapsForUser,
        };
        return { ...state, [username]: newUserData };
      }
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

const StateConsumer = (props) => {
  const { username } = props;
  return (
    <Consumer>
      {({ state }) => {
        const userScraps = (state[username] || {}).scraps;
        return <>{userScraps}</>;
      }}
    </Consumer>
  );
};

export { store, StateProvider, StateConsumer, ADD_SCRAPS };
