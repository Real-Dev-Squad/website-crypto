import { CLOSE_DROPDOWN, OPEN_DROPDOWN } from '../actionTypes';

const initialState = {
  dropdownIsOpened: false,
};

export default function dropdownToggle(state = initialState, action) {
  switch (action.type) {
    case CLOSE_DROPDOWN:
      return {
        dropdownIsOpened: false,
      };
    case OPEN_DROPDOWN:
      return {
        dropdownIsOpened: true,
      };

    default:
      return state;
  }
}
