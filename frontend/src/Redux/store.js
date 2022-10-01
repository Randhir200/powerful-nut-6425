import { legacy_createStore as createstore,applyMiddleware,compose, combineReducers } from "redux";
import thunk from "redux-thunk"
import { projectReducer } from "./projects/reducer";

const rootReducer = combineReducers({
    projectReducer,
  });


const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = applyMiddleware(thunk);

export const store=createstore(rootReducer,composeEnhancers(middleware))