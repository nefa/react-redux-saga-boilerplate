import { all, fork } from 'redux-saga/effects';

import github from './github';
import user from './user';
import test from './test';

/**
 * rootSaga
 */
export default function* root() {
  yield all([
    fork(github),
    fork(user),
    fork(test),
  ]);
}
