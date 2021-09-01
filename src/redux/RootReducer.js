import { combineReducers } from "redux";
import languageReducer from "./actions-reducers/language";
import currentUserReducer from "./actions-reducers/user";

const rootReducer = combineReducers({ language: languageReducer, currentUser: currentUserReducer });

export default rootReducer;
