import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "../screens/HomeScreen/HomeScreen.js";
import About from "../screens/About";
import Contact from "../screens/Contact";
import CategoriesScreen from "../screens/CategoryScreen/CategoriesScreen.js";
import LoginScreen from "../screens/LoginScreen.js";
import { ItemDetails } from "../screens/ItemDetailsScreen";

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {

    return (
        <Stack.Navigator >

            {/* <Stack.Screen name="LoginScreen"
                component={LoginScreen}
                options={{ headerShown: false }} /> */}

            <Stack.Screen name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }} />

            <Stack.Screen name="ItemDetails"
                component={ItemDetails}
                options={{ headerShown: false }} />

            <Stack.Screen name="CategoriesScreen"
                component={CategoriesScreen}
                options={{ headerShown: false }} />

            <Stack.Screen name="About"
                component={About}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

const ContactStackNavigator = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Contact" component={Contact}
                options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export { MainStackNavigator, ContactStackNavigator };