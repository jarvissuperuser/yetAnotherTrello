import { GET_CARD, GET_CARDS, ADD_CARD, DEL_CARD} from "./types";

export const getCards = () =>{
    return {
        type: GET_ITEMS
    }
};

export const addCards = item =>{
    return {
        type: ADD_ITEM,
        payload: item
    }
};

export const getCard = (id) => {
    return {
        type: GET_ITEM,
        payload: id
    }
};

export const delCard = (id) => {
    return {
        type: DEL_ITEM,
        payload: id
    }
};
