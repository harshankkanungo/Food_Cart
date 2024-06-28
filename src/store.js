import { createStore } from "redux";
import { reducer } from "./redux/reducers/main";

let store = createStore(reducer, __REDUX_DEVTOOLS_EXTENSION__?.());

export default store;
