import { createStore } from "redux";
import gameReducer from "./GameReducer";

let store = createStore(gameReducer)

export default store