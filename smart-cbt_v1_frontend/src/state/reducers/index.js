import { combineReducers } from "redux";
import questionBankReducer from "./questionBankReducer";
import questionSetReducer from "./questionSetReducer";

const reducers = combineReducers({
    questionBank: questionBankReducer,
    questionSet: questionSetReducer
});

export default reducers;