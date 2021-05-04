import { fork } from 'redux-saga/effects';

//watchers
import geoDataWatchers from 'features/geoData/geoDataWatchers';

export default function* startforman() {
  yield fork(geoDataWatchers);
}
