import { combineReducers } from "redux";
import authReducre from "./authReducer";
import projectReducre from "./projectReducer";

const rootReducer = combineReducers({
  auth: authReducre,
  project: projectReducre,
});

export default rootReducer;
