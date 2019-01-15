import { combineReducers } from 'redux';
import signInReducer from './signInReducer';

export default combineReducers({
  defaultOverride: () => 5,
  isSignedIn: signInReducer
});
