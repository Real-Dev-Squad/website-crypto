import { BankActionTypes } from './bank.action.types';
export const setCurrencyExchangeRtaes = (rates) => ({
  type: BankActionTypes.SET_CURRENCY_EXCHANGE_RATES,
  payload: rates,
});

export const setBankCurrencies = (currencies) => ({
  type: BankActionTypes.SET_BANK_CURRENCIES,
  payload: currencies,
});
