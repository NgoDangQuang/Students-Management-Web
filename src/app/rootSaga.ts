import authSaga from 'features/auth/authSaga';
import counterSaga from 'features/counter/couterSaga';
import dashboardSaga from 'features/dashboard/dashboardSaga';
import studentSaga from 'features/students/studentSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([counterSaga(), authSaga(), dashboardSaga(), studentSaga()]);
}
