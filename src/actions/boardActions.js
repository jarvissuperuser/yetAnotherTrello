import { GET_ITEMS, GET_ITEM, ADD_ITEM, DEL_ITEM} from "./types";

export const getItems = () =>{
    return {
        type: GET_ITEMS
    }
};

export const addItems = item =>{
    return {
        type: ADD_ITEM,
        payload: item
    }
};

export const getItem = (id) => {
  return {
      type: GET_ITEM,
      payload: id
  }
};

export const delItem = (id) => {
    return {
        type: DEL_ITEM,
        payload: id
    }
};
