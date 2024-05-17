import {
	legacy_createStore,
	combineReducers,
	applyMiddleware,
	compose,
} from "redux";

import thunk from "redux-thunk";

import { reducer as reducer } from "./MainApp/reducer";
import { reducer as Authreducer } from "./Auth/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const MainReducer = combineReducers({ reducer, Authreducer });

export const store = legacy_createStore(
	MainReducer,
	composeEnhancers(applyMiddleware(thunk))
);
