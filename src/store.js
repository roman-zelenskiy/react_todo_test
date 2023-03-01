import { legacy_createStore as createStore, combineReducers} from "redux";
import { todosReducer, modalReducer } from "./reducers";

const rootReducer = combineReducers({
    todosReducer,
    modalReducer
});
export const store = createStore(
    rootReducer
); 
