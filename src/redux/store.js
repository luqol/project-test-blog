import { combineReducers, createStore } from 'redux';
import initialState from "./initialState";
import booksReducer from './booksRedux';

const subreducers = {
    books: booksReducer,
};

const reducer = combineReducers(subreducers);


const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  
  export default store;