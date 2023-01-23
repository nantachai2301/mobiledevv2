import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import activitiesReducer from "./reducers/activitiesReducer";
import rootReducer from "./reducers/rootReducer";

const store = configureStore({
    reducer:{
        activity: activitiesReducer
    }
}, composeWithDevTools);

export default store;
