import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { assetReducer } from "./reducers/assetReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    assetModule: assetReducer
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
window.myStore = store;
