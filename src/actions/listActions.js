import { GET_LISTS, GET_LIST, ADD_LIST, DEL_LIST} from "./types";

export const getLists = () =>{
    return {
        type: GET_LISTS
    }
};

export const addList = item =>{
    return {
        type: ADD_LIST,
        payload: item
    }
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
