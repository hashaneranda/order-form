import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createInjectorsEnhancer, forceReducerReload } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';
import { combineReducers } from 'redux';

//reducers
import rootReducer from 'app/rootReducer';

//saga
import rootSaga from './sagas';

const createReducer = (injectedReducers = {}) => combineReducers({ ...rootReducer, ...injectedReducers });

const reducers = combineReducers(rootReducer);

export default function configureAppStore(initialState = {}) {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const { run: runSaga } = sagaMiddleware;

  const middlewares = [
    sagaMiddleware, // sagaMiddleware: Makes redux-sagas work
  ];

  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ];

  const store = configureStore({
    reducer: reducers,
    middleware: [
      ...getDefaultMiddleware({
        serializableCheck: false,
      }),
      ...middlewares,
    ],
    preloadedState: initialState,
    devTools: process.env.NODE_ENV !== 'production',
    enhancers,
  });

  runSaga(rootSaga);

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('app/rootReducer', () => {
      forceReducerReload(store);
    });
  }

  return store;
}
