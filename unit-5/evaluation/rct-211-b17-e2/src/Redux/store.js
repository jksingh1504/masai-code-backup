// NOTE: use this store variable to create a store.
import { reducer as reducer } from "./AppReducer/reducer";

import { reducer as Authreducer } from "./AuthReducer/reducer";

import {
	combineReducers,
	legacy_createStore,
	applyMiddleware,
	compose,
} from "redux";

import thunk from "redux-thunk";

const Mainreducer = combineReducers({reducer,Authreducer})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(Mainreducer,composeEnhancers(applyMiddleware(thunk)));

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
	window.store = store;
}
