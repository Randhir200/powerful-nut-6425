import { legacy_createStore as createstore,applyMiddleware,compose, combineReducers } from "redux";
import thunk from "redux-thunk"
import { projectReducer } from "./projects/reducer";






const middleware = applyMiddleware(thunk);

export const store=createstore(projectReducer,middleware)