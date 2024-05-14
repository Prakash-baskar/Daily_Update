import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import ReducerForm from "./ReducerForm";


const store = createStore(ReducerForm,applyMiddleware(thunk))

export default store;