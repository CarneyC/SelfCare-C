import { combineReducers } from 'redux';
import behaviorsReducers from './behaviorsReducers';
import ormReducer from './ormReducer';

const rootReducer = combineReducers({
  orm: ormReducer,
  behaviors: behaviorsReducers,
});

export default rootReducer;
