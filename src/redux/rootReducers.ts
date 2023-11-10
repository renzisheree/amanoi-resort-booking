// rootReducer.js

import { combineReducers } from "redux";
import dataReducer from "../redux/red";

export default combineReducers({
  data: dataReducer,
});
