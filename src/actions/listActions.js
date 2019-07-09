import { GET_LISTS, GET_LIST, ADD_LIST, DEL_LIST} from "./types";
import db from "../reducer/db";

export const getLists = () =>{
    return dispatch => db.lists.toCollection().toArray().then((r) => {
       console.log('get lists');
        dispatch({
        type: GET_LISTS,
        items:r
    })})
};

export const addList = item =>{
    return dispatch => db.lists.add(item).then(()=>dispatch({
        type: ADD_LIST,
        payload: item
    }))
};

export const getList = (id) => {
    return {
        type: GET_LIST,
        payload: id
    }
};

export const delList = (id) => {
    return {
        type: DEL_LIST,
        payload: id
    }
};
