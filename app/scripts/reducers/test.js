import immutable from 'immutability-helper';
import { createReducer } from 'modules/helpers';

// import { ActionTypes } from 'constants/index';

export const testState = {
  collection: [],
  ready: 'false',
};

export default {
  test: createReducer(testState, {
    'TEST_READY'(state) {
      return immutable(state, {
        ready: { $set: true },
      });
    },
    'TEST_PENDING'(state) {
      return immutable(state, {
        ready: { $set: false },
      });
    },
    'UPDATE_COLLECTION'(state, { payload }) {
      return immutable(state, {
        collection: { $set: payload.collection },
      });
    },
    // [ActionTypes.USER_LOGOUT_SUCCESS](state) {
    //   return immutable(state, {
    //     isAuthenticated: { $set: false },
    //     status: { $set: 'idle' },
    //   });
    // },
  }),
};
