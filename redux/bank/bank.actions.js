import { BankActionTypes } from './bank.action.types';
import fetchData from 'utils/fetchData';
export const setCurrencyExchangeRtaes = (rates) => ({
  type: BankActionTypes.SET_CURRENCY_EXCHANGE_RATES,
  payload: rates,
});

export const setBankCurrencies = (currencies) => ({
  type: BankActionTypes.SET_BANK_CURRENCIES,
  payload: currencies,
});

export const getCurrencyExchangeRatesStart = () => ({
  type: BankActionTypes.GET_CURRENCY_EXCHANGE_RATES_START,
});

export const getCurrencyExchangeRatesSuccess = (rates) => ({
  type: BankActionTypes.GET_CURRENCY_EXCHANGE_RATES_SUCCESS,
  payload: rates,
});

export const getCurrencyExchangeRatesFaliure = (message) => ({
  type: BankActionTypes.GET_CURRENCY_EXCHANGE_RATES_FALIURE,
  payload: message,
});

export const getCurrencyExchangeRatesStartAsync = () => {
  return async (dispatch) => {
    const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
    const EXCHANGE_RATES_URL = `${BASE_API_URL}/rates`;
    dispatch(getCurrencyExchangeRatesStart());
    try {
      const { data } = await fetchData(`${EXCHANGE_RATES_URL}`);
      dispatch(getCurrencyExchangeRatesSuccess(data ? data : []));
    } catch (error) {
      dispatch(getCurrencyExchangeRatesFaliure(error.message));
    }
  };
};
