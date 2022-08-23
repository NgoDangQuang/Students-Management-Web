import counterSaga from 'features/counter/couterSaga';
import { all } from 'redux-saga/effects';

function* helloSaga() {
  console.log('Hello saga');
}

export default function* rootSaga() {
  console.log('Root saga');
  yield all([helloSaga(), counterSaga()]);
}
