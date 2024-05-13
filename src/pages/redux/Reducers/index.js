import { combineReducers } from "redux";
import AuthReducers from "./AuthReducers";
import AddReducers from "./AddReducers";

export default combineReducers({
  auth: AuthReducers,
  add: AddReducers,
});
