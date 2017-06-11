import * as Actions from '../actions/postActions';

let dummyreply = [];

export function all_replies(reply) {
    console.log(reply,'reply');
    dummyreply.push(reply)
    return {
        type:"REPLIES",
        payload: {
            dummyreply: dummyreply
        }
    };
}

export default Actions;
