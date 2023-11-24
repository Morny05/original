import { legacy_createStore } from "redux";
import { panierReducer } from "./redux/reducer/panierReducer";

const store = legacy_createStore(panierReducer);
export default store;