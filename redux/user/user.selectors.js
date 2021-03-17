import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const selectIsFetchingUser = createSelector(
  [selectUser],
  (user) => user.isFetchingUser
);

export const selectCurrentUserFaliureMessage = createSelector(
  [selectUser],
  (user) => user.currentUserFaliureMessage
);
