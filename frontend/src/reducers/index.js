import { combineReducers } from "redux";
import employees from "./employees";
import errors from "./errors";
import messages from "./messages";
//include auth
import auth from "./auth";
export default combineReducers({
  employees,
  errors,
  messages,
  auth
});
