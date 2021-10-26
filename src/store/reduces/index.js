import { combineReducers } from "redux";
import authReduces from "./auth";
import chatReducer from "./chat";

export default combineReducers({
  authReduces,
  chatReducer,
});
