import {
    GET_LIST,
    GET_LISTS,
    ADD_LIST,
    DEL_LIST
} from "../actions/types";

const lists = {
    lists: [
        // {id: uuid() , name: "test", color: 'bg-primary'}
    ]
};

export default function (state = lists, action) {
    switch (action.type) {
        case GET_LISTS:
            return {
                ...state
            };
        case GET_LIST:
            return {
                ...state,
                lists: [state.lists.filter(item=>item.id === action.payload)]
            };
        case ADD_LIST:
            return {
                ...state,
                lists: [...state.lists,action.payload]
            };
        case DEL_LIST:
            return {
                ...state,
                lists: state.lists.filter(item => item.id !== action.payload)
            };
        default:
            return state;
    }

}
