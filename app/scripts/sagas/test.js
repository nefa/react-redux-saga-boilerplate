import { put, takeLatest, all } from 'redux-saga/effects';


export function* updateCollection({ payload }) {
  try {
    yield put({ type: 'UPDATE_COLLECTION_SUCCESS', payload });
  }
  catch (error) {
    console.error(error);
  }
}

export default function* root() {
  yield all([
    takeLatest('UPDATE_COLLECTION_REQUEST', updateCollection),
  ]);
}
