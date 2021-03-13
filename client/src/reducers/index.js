import { combineReducers } from 'redux';
import { authReducer } from './auth';

// COMBINE MULTIPLE REDUCERS
const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
