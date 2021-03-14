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
