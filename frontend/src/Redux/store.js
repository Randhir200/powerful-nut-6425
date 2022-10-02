import {
  legacy_createStore as createstore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import { projectReducer } from './projects/reducer';
import { reducer } from './auth/Authreducer';
import { clientReducer } from "./clients/reducer";
const middleware = applyMiddleware(thunk);
const rootReducer = combineReducers({
  projectReducer:projectReducer,
  clientReducer:clientReducer,
  AuthReducer:reducer
});
export const store = createstore(rootReducer, middleware);
