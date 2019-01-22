import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_STREAMS,
  CREATE_STREAM,
  FETCH_STREAM,
  UPDATE_STREAM,
  DELETE_STREAM
} from './types';
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
  const response = await streams.post('/streams', formValues);
  dispatch({ type: CREATE_STREAM, payload: response.data });
};

export const updateStream = (id, formValues) => async dispatch => {
  const response = await streams.put(`streams/${id}`, formValues);
  dispatch({ type: UPDATE_STREAM, payload: response.data });
};

export const deleteStream = id => async dispatch => {
  await streams.delete(`streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: null });
};

export const fetchStream = id => async dispatch => {
  const response = await streams.get(`streams/${id}`);
  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const fetchStreamList = () => async dispatch => {
  const response = await streams.get(`streams`);
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};
