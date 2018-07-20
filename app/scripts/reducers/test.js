import immutable from 'immutability-helper';
import { REHYDRATE } from 'redux-persist/lib/constants';
import { createReducer } from 'modules/helpers';

// import { ActionTypes } from 'constants/index';

export const testState = {
  collection: [],
  ready: 'false',
};

export default {
  test: createReducer(testState, {
    [REHYDRATE](state) {
      return immutable(state, {
        collection: { $set: [] },
      });
    },
    'TEST_READY'(state) {
      return immutable(state, {
        ready: { $set: true },
      });
    },
    'TEST_FAILED'(state) {
      return immutable(state, {
        ready: { $set: false },
        collection: { $set: [] },
      });
    },
    'TEST_PENDING'(state) {
      return immutable(state, {
        ready: { $set: false },
      });
    },
    'UPDATE_COLLECTION_REQUEST'(state) {
      return immutable(state, {
        ready: { $set: false },
        collection: { $set: [] },
      });
    },
    'UPDATE_COLLECTION_SUCCESS'(state, { payload }) {
      return immutable(state, {
        ready: { $set: true },
        collection: { $push: payload },
      });
      // return { ...state, collection: payload, ready: true };
    },
  }),
};
