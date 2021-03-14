import { BankActionTypes } from './bank.action.types';
import exchangeRates from 'mock/exchange-rates';
import currencies from 'mock/currency';
const INITIAL_STATE = {
  exchangeRates,
  bankCurrencies: currencies,
};
const bankReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BankActionTypes.SET_CURRENCY_EXCHANGE_RATES:
      return {
        ...state,
        exchangeRates: action.payload,
        bankCurrencies: currencies,
      };
    case BankActionTypes.SET_BANK_CURRENCIES:
      return {
        ...state,
        bankCurrencies: action.payload,
      };
    default:
      return state;
  }
};
export default bankReducer;
