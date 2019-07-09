import {GET_ITEM,ADD_ITEM,DEL_ITEM,GET_ITEMS} from "../actions/types";

const boards = {
    items: [
        // {id: uuid() , name: "test", color: 'bg-primary'}
    ]
};

export default function (state = boards, action) {
    // console.log(action);
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items:action.items
            };
        case GET_ITEM:
            return {
                ...state,
                items: [state.items.filter(item=>item.id === action.payload)]
            };
        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items,action.payload]
            };
        case DEL_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };
        default:
            return state;
    }
    
}
