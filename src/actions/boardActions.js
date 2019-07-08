import { GET_ITEMS, GET_ITEM, ADD_ITEM, DEL_ITEM} from "./types";
import db from "../reducer/db";

export const getItems = () =>{
    return (dispatch) => {
        db.boards.toCollection().toArray().then(r =>{
            dispatch({
                    type: GET_ITEMS,
                    items: r
                })
        })
    }

};

export const addItems = item =>{
    return(dispatch) => db.boards.add(item).then(()=>{
        dispatch({
            type:ADD_ITEM,
            payload:item
        })
    })
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
