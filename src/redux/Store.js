import { createStore } from "redux";
import gameReducer from "./GameReducer";


let store = createStore(gameReducer)

window.store = store;

export default store