/*
 src/reducers/rootReducer.js

 uses "combineReducers()" function to join all the reducers you give it.
*/
import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';

const rootReducer = combineReducers({
    simple: simpleReducer
});

console.log('ROOT:', rootReducer);

export default rootReducer;