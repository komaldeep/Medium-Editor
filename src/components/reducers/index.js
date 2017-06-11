import { combineReducers } from 'redux';
import posts from './postReducer';

const rootReducer = combineReducers({
  posts,
});

export default rootReducer;
