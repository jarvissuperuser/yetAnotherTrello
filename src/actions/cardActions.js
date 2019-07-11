import {GET_CARD, GET_CARDS, ADD_CARD, EDIT_CARD} from "./types";
import db from "../reducer/db";

export const getCards = () =>{
    return (dispatch) => {
        db.boards.toCollection().toArray().then(r =>{
            dispatch({
                type: GET_CARDS,
                items: r
            })
        })
    }

};

export const addCards = item =>{
    return(dispatch) => db.boards.add(item).then(()=>{
        dispatch({
            type:ADD_CARD,
            payload:item
        })
    })
};

export const getCard = (id) => {
    return {
        type: GET_CARD,
        payload: id
    }
};

export const editCard = (item) => {
    return (dispatch)=> db.cards.update(item,{name:item['name']}).then(()=>dispatch({
        type: EDIT_CARD,
        payload:item
    }));
};
