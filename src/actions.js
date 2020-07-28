import axios                                                                                        from "axios";
import {CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_FAILED, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS} from "./constants";

export const setSearchField = (text) => {
    return {
        type   : CHANGE_SEARCH_FIELD,
        payload: text
    }
};


export const requestRobots = () => (dispatch) => {
    dispatch({type: REQUEST_ROBOTS_PENDING});
    axios.get('https://jsonplaceholder.typicode.com/users')
         .then(res => res.data)
         .then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data}))
         .catch(err => dispatch({type: REQUEST_ROBOTS_FAILED, payload: err}))
    ;
}
