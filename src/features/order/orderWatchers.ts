import { takeLatest } from 'redux-saga/effects';

//actions
import * as orderSlice from './orderSlice';

//saga
import * as orderSaga from './orderSaga';

export default function* watchers() {
  yield takeLatest(orderSlice.createUserDetails.type, orderSaga.createUserDetails);
  yield takeLatest(orderSlice.createAddressDetails.type, orderSaga.createAddressDetails);
}
