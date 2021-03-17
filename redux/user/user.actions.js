import { UserActionsTypes } from './user.actions.types';
import fetchSelfDetails from 'utils/fetchSelfDetails';
export const getCurrentUserStart = () => ({
  type: UserActionsTypes.GET_CURRENT_USER_START,
});

export const getCurrentUserSuccess = (rates) => ({
  type: UserActionsTypes.GET_CURRENT_USER_SUCCESS,
  payload: rates,
});

export const getCurrentUserFaliure = (message) => ({
  type: UserActionsTypes.GET_CURRENT_USER_FALIURE,
  payload: message,
});

export const getCurrentUserStartAsync = () => {
  return async (dispatch) => {
    dispatch(getCurrentUserStart());
    try {
      const data = await fetchSelfDetails();
      dispatch(getCurrentUserSuccess(data));
    } catch (error) {
      dispatch(getCurrentUserFaliure(error.message));
    }
  };
};
