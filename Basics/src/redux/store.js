// @ts-nocheck
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice.js";
import followersReducer from "./slices/followersSlice.js";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger"
import { watcherSaga } from "./sagas/rootSaga";

import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistStore, persistReducer } from 'redux-persist'


const config = {
    key: 'root',
    storage: AsyncStorage,
    // blacklist: ['loading'],
    debug: true, //to get useful logging
};

const middleware = []
const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({
    level: 'info',
    collapsed: true,
    duration: true,
    logErrors: true
});

middleware.push(logger);
middleware.push(sagaMiddleware);

const rootReducer = combineReducers({
    users: userReducer,
    followers: followersReducer
});

const reducers = persistReducer(config, rootReducer);

const enhancers = [...middleware];
const persistConfig = { enhancers };

const store = configureStore({
    reducer: reducers,
    middleware: enhancers
});

sagaMiddleware.run(watcherSaga);
export const persistor = persistStore(store, persistConfig);
export default store;
