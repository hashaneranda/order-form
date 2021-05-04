import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// types
import { InitialState } from './types';

const initialState: InitialState = {
  countries: {
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
  },
});

const { actions, reducer } = createdSlice;

export const { fetchCountries, fetchCountriesSuccess, fetchCountriesError } = actions;

export default reducer;
