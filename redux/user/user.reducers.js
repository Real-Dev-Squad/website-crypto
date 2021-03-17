import { UserActionsTypes } from './user.actions.types';
const INITIAL_STATE = {
  currentUser: null,
  isFetchingUser: false,
  currentUserFaliureMessage: '',
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionsTypes.GET_CURRENT_USER_START:
      return {
        ...state,
        isFetchingUser: true,
      };
    case UserActionsTypes.GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isFetchingUser: false,
      };
    case UserActionsTypes.GET_CURRENT_USER_FALIURE:
      return {
        ...state,
        isFetchingUser: false,
        currentUserFaliureMessage: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
