import { combineReducers } from "redux";
import AuthReducers from "./AuthReducers";
import AddReducers from "./AddReducers";
import TiketReducers from "./TiketReducers";

export default combineReducers({
  auth: AuthReducers,
  add: AddReducers,
  tiket: TiketReducers
});
