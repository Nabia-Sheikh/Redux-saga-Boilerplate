import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { reducer } from "./Reducer";
import {  watcherSaga } from "./saga";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watcherSaga);