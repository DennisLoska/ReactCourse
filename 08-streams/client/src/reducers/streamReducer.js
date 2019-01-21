import { FETCH_STREAMS } from '../actions/types';
export default (state = [], action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return action.payload;
    default:
      return state;
  }
};
