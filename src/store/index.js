import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { assetReducer } from "./reducers/assetReducer";
import { contractReducer } from "./reducers/contractReducer";
import { paymentReducer } from "./reducers/paymentReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    assetModule: assetReducer,
    contractModule: contractReducer,
    paymentModule: paymentReducer
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
window.myStore = store;
