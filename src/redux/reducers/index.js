import { combineReducers } from "redux";
import userTableReducer from "./userTableReducer";

const appReducer = combineReducers({
    userTable: userTableReducer,
})

const rootReducer = (state, action) => {
    return appReducer(state, action);
}

export default rootReducer;