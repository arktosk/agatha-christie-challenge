import { combineReducers } from 'redux';
import dataReducer from './booksReducer';

export default combineReducers({
  books: dataReducer,
});