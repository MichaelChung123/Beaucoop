/*
 * src/store.js
 * With initialState
 * 
 * Set the initial state, add the combined reducers to the store, and add middleware thunk and the redux devtools by using compose()
 */
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

export default function configureStore() {
    return createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}
