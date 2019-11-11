/*
 src/actions/simpleAction.js

 Create a an action type, which carries a payload of what ever data you want.
*/
export const simpleAction = () => {
    console.log('inside action');
    return {
        type: 'SIMPLE_ACTION',
        payload: 'result_of_simple_action'
    }
}