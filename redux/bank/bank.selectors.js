import { createSelector } from 'reselect';

const selectBank = (state) => state.bank;
export const selectCurrencyExchangeRates = createSelector(
  [selectBank],
  (bank) => bank.exchangeRates
);

export const selectBankCurrencies = createSelector(
  [selectBank],
  (bank) => bank.bankCurrencies
);
export const selectIsFetchingExchangeRates = createSelector(
  [selectBank],
  (bank) => bank.isFetchingExchangeRates
);

export const selectExchangeRatesFaliureMessage = createSelector(
  [selectBank],
  (bank) => bank.exchangeRatesFaliureMessage
);
