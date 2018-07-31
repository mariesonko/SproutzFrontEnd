import { combineReducers } from 'redux';
import eventReducer from './eventReducer';
import familyReducer from './familyReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  events: eventReducer,
  families: familyReducer,
  auth: authReducer
});

export default rootReducer
