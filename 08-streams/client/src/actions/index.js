import { SIGN_IN, SIGN_OUT, FETCH_STREAMS, CREATE_STREAM } from './types';
import streams from '../apis/streams';

export const signIn = id => {
  return {
    type: SIGN_IN,
    payload: id
  };
};

export const signOut = id => {
  return {
    type: SIGN_OUT,
    payload: id
  };
};

export const createStream = formValues => async dispatch => {
  streams.post('/streams', formValues);
  dispatch({
    type: CREATE_STREAM,
    payload: formValues
  });
};

export const fetchStreamList = () => async dispatch => {
  const response = await streams.get(`streams`);
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};
