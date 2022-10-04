import {configureStore} from "@reduxjs/toolkit";
import shopReducer from "./reducer/shopReducer";
const store = configureStore({
    reducer: {
        shopReducer
    }
});

export default store;