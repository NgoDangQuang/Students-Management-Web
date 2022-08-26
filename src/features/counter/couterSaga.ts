import { PayloadAction } from '@reduxjs/toolkit';
import { call, delay, put, takeEvery } from 'redux-saga/effects';
import { incrementSaga, incrementSagaSuccess } from './counterSlice';

function* handleIncrementSaga(action: PayloadAction<number>) {
  console.log('Waiting 2s');
  yield call(delay, 1000)
  console.log('Dispatch action');
  yield put(incrementSagaSuccess(action.payload))
}

export default function* counterSaga() {
  yield takeEvery(incrementSaga.toString(), handleIncrementSaga); // lang nghe action increment
//   yield takeLatest(incrementSaga.toString(), handleIncrementSaga); // lang nghe action increment
}
