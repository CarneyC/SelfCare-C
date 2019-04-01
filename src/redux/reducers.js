import { combineReducers } from 'redux';
import { createReducer as createOrmReducer } from "redux-orm";

import { orm } from "./models";

export default combineReducers({
  orm: createOrmReducer(orm),
});
