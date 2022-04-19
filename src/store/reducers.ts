import { combineReducers } from "redux";

//User
import Login from "store/auth/reducer";

const rootReducer = combineReducers({
  //public
  Login,
});

export default rootReducer;
