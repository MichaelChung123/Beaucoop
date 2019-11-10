/*
 src/reducers/simpleReducer.js

 checks to see what the action type is, and then returns the payload as an object.
*/
export default (state = {}, action) => {
    switch (action.type) {
        case 'SIMPLE_ACTION':
            return action.payload;
        default:
            return state
    }
}