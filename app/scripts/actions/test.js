// @flow
/**
 * @module Actions/Test
 * @desc Test Actions
 */
import { ActionTypes } from 'constants/index';

/**
 * updateCollection
 *
 * @returns {Object}
 */
export function updateCollection(collection: Array<any>): Object {
  return {
    type: 'UPDATE_COLLECTION',
    payload: { collection },
  };
}
