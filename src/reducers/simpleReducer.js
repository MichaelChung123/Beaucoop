/*
 src/reducers/simpleReducer.js

 checks to see what the action type is, and then returns the payload as an object.
*/

const simpleReducer = (state = '', action) => {
    switch (action.type) {
        case 'SIMPLE_ACTION':
            console.log('inside simple reducer');
            return action.payload;
        default:
            return state
    }
}

export default simpleReducer;