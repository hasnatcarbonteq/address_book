import { combineReducers } from "redux";
import dataGridReducer from "./dataGridReducer";

const appReducer = combineReducers({
    dataGrid: dataGridReducer,
})

const rootReducer = (state, action) => {
    return appReducer(state, action);
}

export default rootReducer;