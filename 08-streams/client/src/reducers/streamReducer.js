import {
  FETCH_STREAMS,
  CREATE_STREAM,
  FETCH_STREAM,
  DELETE_STREAM,
  UPDATE_STREAM
} from '../actions/types';
import _ from 'lodash';

export default (state = {}, { type, payload }) => {
  switch (type) {
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(payload, 'id') };
    case FETCH_STREAM:
      return { ...state, [payload.id]: payload };
    case CREATE_STREAM:
      return { ...state, [payload.id]: payload };
    case UPDATE_STREAM:
      return { ...state, [payload.id]: payload };
    case DELETE_STREAM:
      return _.omit(state, payload); //{ ...state, [payload.id]: undefined };
    default:
      return state;
  }
};
