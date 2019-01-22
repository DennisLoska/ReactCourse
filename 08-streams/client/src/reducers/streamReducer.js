import {
  FETCH_STREAMS,
  CREATE_STREAM,
  FETCH_STREAM,
  DELETE_STREAM,
  UPDATE_STREAM
} from '../actions/types';

export default (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_STREAM:
      return payload;
    case FETCH_STREAMS:
      return payload;
    case CREATE_STREAM:
      return payload;
    case UPDATE_STREAM:
      return payload;
    case DELETE_STREAM:
      return payload;
    default:
      return state;
  }
};
