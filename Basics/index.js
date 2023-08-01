// @ts-nocheck
/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import store, { persistor } from './src/redux/store.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

const ReduxProvider = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => ReduxProvider);
