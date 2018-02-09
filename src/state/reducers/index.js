import { combineReducers } from 'redux';
import posts from './reducer-posts';
const rootReducer = combineReducers({
  posts: posts,
});

export default rootReducer;