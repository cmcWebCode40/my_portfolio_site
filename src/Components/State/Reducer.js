import * as types from './ActionTypes';


const initialUser = [];

export const userReducer = (state = initialUser, actions) => {
    switch (actions.type) {
        case types.GET_USER:
            return actions.payload;
        default:
            return state
    }
}