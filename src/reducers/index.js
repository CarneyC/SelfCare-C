import { combineReducers } from 'redux';
import behaviorsReducers from './behaviorsReducers';
// import conditionReducers from './conditionsReducers';
import ormReducer from './ormReducer';

const rootReducer = combineReducers({
  orm: ormReducer,
  behaviors: behaviorsReducers,
  // condition: conditionReducers
});

export default rootReducer;
