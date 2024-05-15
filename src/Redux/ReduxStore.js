import { configureStore } from "@reduxjs/toolkit";
import ReducerForm from "./ReducerForm";


const store = configureStore({
    reducer: ReducerForm
})

export default store;