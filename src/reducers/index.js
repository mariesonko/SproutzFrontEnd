import { combineReducers } from 'redux';
import eventReducer from './eventReducer';
import familyReducer from './familyReducer';

const rootReducer = combineReducers({
  events: eventReducer,
  families: familyReducer
});

export default rootReducer
