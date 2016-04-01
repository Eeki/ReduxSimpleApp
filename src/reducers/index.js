import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

//Any key that is provided to the combineReducers ends up to a key to global state
const rootReducer = combineReducers({
  books : BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
