import { createStore, combineReducers } from "redux";
import { userReducer } from "../redux/reducers/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  // Add other reducers if needed
});

const store = createStore(rootReducer);

export default store;
