import { fork } from 'redux-saga/effects';

//watchers
import geoDataWatchers from 'features/geoData/geoDataWatchers';
import orderWatchers from 'features/order/orderWatchers';

export default function* startforman() {
  yield fork(geoDataWatchers);
  yield fork(orderWatchers);
}
