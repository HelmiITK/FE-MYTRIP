import { combineReducers } from "redux";
import AuthReducers from "./AuthReducers";
import TiketReducers from "./TiketReducers";

export default combineReducers({
  auth: AuthReducers,
  tiket: TiketReducers
});
