import { BankActionTypes } from './bank.action.types';
import exchangeRates from 'mock/exchange-rates';
import currencies from 'mock/currency';
const INITIAL_STATE = {
  exchangeRates,
  bankCurrencies: currencies,
  isFetchingExchangeRates: false,
  exchangeRatesFaliureMessage: '',
};
const bankReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BankActionTypes.GET_CURRENCY_EXCHANGE_RATES_START:
      return {
        ...state,
        isFetchingExchangeRates: true,
      };
    case BankActionTypes.GET_CURRENCY_EXCHANGE_RATES_SUCCESS:
      return {
        ...state,
        exchangeRates: action.payload,
        isFetchingExchangeRates: false,
      };
    case BankActionTypes.GET_CURRENCY_EXCHANGE_RATES_FALIURE:
      return {
        ...state,
        isFetchingExchangeRates: false,
        exchangeRatesFaliureMessage: action.payload,
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
