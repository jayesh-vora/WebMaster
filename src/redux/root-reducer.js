import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

// console.log(combineReducers);

export default combineReducers({
  user: userReducer
});