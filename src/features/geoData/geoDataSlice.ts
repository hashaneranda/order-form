import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// types
import { InitialState } from './types';

const initialState: InitialState = {
  countries: {
    loading: false,
    data: null,
    error: null,
  },
  addresses: {
    loading: false,
    data: null,
    error: null,
  },
};

const createdSlice = createSlice({
  name: 'geoData',
  initialState,
  reducers: {
    fetchCountries(state) {
      return {
        ...state,
        countries: { ...state.countries, loading: true },
      };
    },
    fetchCountriesSuccess(state, action: PayloadAction<any | void>) {
      return {
        ...state,
        countries: {
          ...state.countries,
          loading: false,
          data: action?.payload?.data,
          error: null,
        },
      };
    },
    fetchCountriesError(state, action: PayloadAction<any | void>) {
      return {
        ...state,
        countries: {
          ...state.countries,
          loading: false,
          data: null,
          error: action?.payload ? (action?.payload.data ? action?.payload.data.message : action?.payload.data) : null,
        },
      };
    },
    fetchCountriesReset(state) {
      return {
        ...state,
        countries: initialState.countries,
      };
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fetchAddresses(state, action: PayloadAction<any | void>) {
      return {
        ...state,
        addresses: { ...state.addresses, loading: true },
      };
    },
    fetchAddressesSuccess(state, action: PayloadAction<any | void>) {
      return {
        ...state,
        addresses: {
          ...state.addresses,
          loading: false,
          data: action?.payload?.data,
          error: null,
        },
      };
    },
    fetchAddressesError(state, action: PayloadAction<any | void>) {
      return {
        ...state,
        addresses: {
          ...state.addresses,
          loading: false,
          data: null,
          error: action?.payload ? (action?.payload.data ? action?.payload.data.message : action?.payload.data) : null,
        },
      };
    },
    fetchAddressesReset(state) {
      return {
        ...state,
        addresses: initialState.addresses,
      };
    },
  },
});

const { actions, reducer } = createdSlice;

export const {
  fetchCountries,
  fetchCountriesSuccess,
  fetchCountriesError,
  fetchCountriesReset,
  fetchAddresses,
  fetchAddressesSuccess,
  fetchAddressesError,
  fetchAddressesReset,
} = actions;

export default reducer;
