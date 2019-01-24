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
import history from '../history';

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

export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post('/streams', { ...formValues, userId });
  dispatch({ type: CREATE_STREAM, payload: response.data });
  history.push('/');
};

export const updateStream = (id, formValues) => async dispatch => {
  const response = await streams.patch(`streams/${id}`, formValues);
  dispatch({ type: UPDATE_STREAM, payload: response.data });
  history.push('/');
};

export const deleteStream = id => async dispatch => {
  await streams.delete(`streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
};

export const fetchStream = id => async dispatch => {
  const response = await streams.get(`streams/${id}`);
  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const fetchStreamList = () => async dispatch => {
  const response = await streams.get(`streams`);
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};
