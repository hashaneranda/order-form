import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// types
import { InitialState } from './types';

const initialState: InitialState = {
  userDetails: {
    loading: false,
    data: null,
    error: null,
  },
  addressdetails: {
    loading: false,
    data: null,
    error: null,
  },
};

const createdSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    createUserDetails(state) {
      return {
        ...state,
        userDetails: { ...state.userDetails, loading: true },
      };
    },
    createUserDetailsSuccess(state, action: PayloadAction<any | void>) {
      return {
        ...state,
        userDetails: {
          ...state.userDetails,
          loading: false,
          data: action?.payload?.data,
          error: null,
        },
      };
    },
    createUserDetailsError(state, action: PayloadAction<any | void>) {
      return {
        ...state,
        userDetails: {
          ...state.userDetails,
          loading: false,
          data: null,
          error: action?.payload ? (action?.payload.data ? action?.payload.data.message : action?.payload.data) : null,
        },
      };
    },
    createUserDetailsReset(state) {
      return {
        ...state,
        userDetails: initialState.userDetails,
      };
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    createAddressDetails(state, action: PayloadAction<any | void>) {
      return {
        ...state,
        addressdetails: { ...state.addressdetails, loading: true },
      };
    },
    createAddressDetailsSuccess(state, action: PayloadAction<any | void>) {
      return {
        ...state,
        addressdetails: {
          ...state.addressdetails,
          loading: false,
          data: action?.payload?.data,
          error: null,
        },
      };
    },
    createAddressDetailsError(state, action: PayloadAction<any | void>) {
      return {
        ...state,
        addressdetails: {
          ...state.addressdetails,
          loading: false,
          data: null,
          error: action?.payload ? (action?.payload.data ? action?.payload.data.message : action?.payload.data) : null,
        },
      };
    },
    createAddressDetailsReset(state) {
      return {
        ...state,
        addressdetails: initialState.addressdetails,
      };
    },
  },
});

const { actions, reducer } = createdSlice;

export const {
  createUserDetails,
  createUserDetailsSuccess,
  createUserDetailsError,
  createUserDetailsReset,
  createAddressDetails,
  createAddressDetailsSuccess,
  createAddressDetailsError,
  createAddressDetailsReset,
} = actions;

export default reducer;
