import { put, call } from 'redux-saga/effects';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

export const returnSaga = (
  serviceFunc: any,
  targetAction: ActionCreatorWithPayload<any>,
  successAction: ActionCreatorWithPayload<any>,
  errorAction: ActionCreatorWithPayload<any>,
  status: number,
) => {
  return function* generator({ payload }: ReturnType<typeof targetAction>): Generator<any> {
    let response: any = null;

    try {
      response = yield call(serviceFunc, payload);

      if (response && response?.status === status) {
        yield put({
          type: successAction.type,
          payload: response,
        });
      } else {
        yield put({ type: errorAction.type, payload: response });
      }
    } catch (err) {
      yield put({ type: errorAction.type, payload: err?.response });
    }
  };
};
