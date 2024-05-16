import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import search from "./reducers/search.js";
import users from "./reducers/users.js";
import preloader from "./reducers/preloader.js";
import rooms from "./reducers/rooms.js";
import messagesSender from "./reducers/messages.js";
import auth from "./reducers/auth.js";
import visualState from "./reducers/visualState.js";
import { thunk as thunkMiddleware } from "redux-thunk";
let reducersStack = combineReducers({
  search,
  users,
  preloader,
  rooms,
  messagesSender,
  auth,
  visualState,
});

let store = createStore(reducersStack, applyMiddleware(thunkMiddleware));
export default store;
window.store = store;
