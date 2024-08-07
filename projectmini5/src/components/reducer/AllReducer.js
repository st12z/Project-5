import { loginReducer } from "./loginReducer";
import {combineReducers} from "redux";
export const AllReducer= combineReducers({
    loginReducer,
})