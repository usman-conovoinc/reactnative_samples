import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "../.redux/reducers/messageReducer.js";
import usersReducer from "../.redux/reducers/usersReducer.js";

export const store = configureStore({
    reducer: {
        message: messageReducer,
        users: usersReducer
    },
});


/*

// @ts-nocheck
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./ducks/user.js";
import createSagaMiddleware from "redux-saga";
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
middleware.push(sagaMiddleware);
const reducers = persistReducer(config, userReducer);
const enhancers = [...middleware];
const persistConfig = { enhancers };

const store = configureStore({
    reducer: reducers,
    middleware: enhancers
});

sagaMiddleware.run(watcherSaga);
export const persistor = persistStore(store, persistConfig);
export default store;


*/