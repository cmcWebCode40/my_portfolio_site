import * as types from './ActionTypes';

export const getUser = () => dispatch => {
    axios.get(`https://cooplagfair.herokuapp.com/api/v1/users/${user_id}`)
        .then(response => {
            dispatch({
                type: types.GET_USER,
                payload: response.data
            });
            dispatch({
                type: types.GET_USER_SUCCESS,
                payload: true
            })
        })
        .catch(error => {
            dispatch({
                type: types.GET_USER_FAILED,
                payload: false
            })
        })
}