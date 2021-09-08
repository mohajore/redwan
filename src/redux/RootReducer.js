import { combineReducers } from "redux";
import currentUserReducer from "./actions-reducers/user";

const rootReducer = combineReducers({ currentUser: currentUserReducer });

export default rootReducer;
