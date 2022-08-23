import { PayloadAction } from '@reduxjs/toolkit';
import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { incrementSaga, incrementSagaSuccess } from './counterSlice';

function* handleIncrementSaga(action: PayloadAction<number>) {
  console.log('Waiting 2s');
  yield delay(2000)
  console.log('Dispatch action');
  yield put(incrementSagaSuccess(action.payload))
}

export default function* counterSaga() {
  yield takeEvery(incrementSaga.toString(), handleIncrementSaga); // lang nghe action increment
//   yield takeLatest(incrementSaga.toString(), handleIncrementSaga); // lang nghe action increment
}
