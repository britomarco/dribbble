import { combineReducers } from 'redux';
import dribbbleReducer from './dribbble_reducer';

const rootReducer = combineReducers({
  dribbbles : dribbbleReducer
});

export default rootReducer;
