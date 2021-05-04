import { takeLatest } from 'redux-saga/effects';

//actions
import * as geoDataSlice from './geoDataSlice';

//saga
import * as geoDataSaga from './geoDataSaga';

export default function* watchers() {
  yield takeLatest(geoDataSlice.fetchCountries.type, geoDataSaga.fetchCountries);
  yield takeLatest(geoDataSlice.fetchAddresses.type, geoDataSaga.fetchAddresses);
}
