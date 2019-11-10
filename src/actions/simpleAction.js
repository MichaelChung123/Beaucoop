/*
 src/actions/simpleAction.js

 Create a an action type, which carries a payload of what ever data you want.
*/
export const simpleAction = () => dispatch => {
    dispatch({
        type: 'SIMPLE_ACTION',
        payload: 'result_of_simple_action'
    })
}