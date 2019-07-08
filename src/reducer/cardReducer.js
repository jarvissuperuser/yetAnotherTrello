import {ADD_CARD, DEL_CARD, GET_CARD, GET_CARDS} from "../actions/types";

const cards = {
    items: [
        // {id: uuid() , name: "test", color: 'bg-primary'}
    ]
};

export default function (state = cards, action) {
    switch (action.type) {
        case GET_CARDS:
            return {
                ...state
            };
        case GET_CARD:
            return {
                ...state,
                items: [state.items.filter(item=>item.id === action.payload)]
            };
        case ADD_CARD:
            return {
                ...state,
                items: [...state.items,action.payload]
            };
        case DEL_CARD:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };
        default:
            return state;
    }

}
