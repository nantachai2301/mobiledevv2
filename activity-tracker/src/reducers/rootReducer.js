import { combineReducers } from "redux";
import activitiesReducer from "./activitiesReducer";

const rootReduce = combineReducers({
    activities:activitiesReducer,
})
export default rootReduce;