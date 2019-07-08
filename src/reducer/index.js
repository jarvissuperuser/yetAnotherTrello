import { combineReducers} from "redux";
import itemReducer from './itemReducer';
// import listReducer from "./listReducer";

export default combineReducers({
    item: itemReducer,
    // list: listReducer
});
