/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './screens/SplashScreen.js';
// import LoginScreen from './screens/Auth/LoginScreen.js';
// import RegisterScreen from './screens/Auth/RegisterScreen.js';

import HomeScreen from './screens/HomeScreen.js'
import ShopDetailsScreen from './screens/ShopDetailsScreen.js';
import ServiceDetailsScreen from './screens/ServiceDetailsScreen.js';
import BookingScreen from './screens/BookingScreen.js';
import UserBookingsScreen from './screens/UserBookingsScreen.js';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">

        {/* <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Auth"
          component={AuthNavigationStack}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="Home"
          component={HomeNavigationStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const AuthNavigationStack = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: 'Register',
          headerStyle: {
            backgroundColor: '#307ecc',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

const HomeNavigationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ShopDetailsScreen" component={ShopDetailsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ServiceDetailsScreen" component={ServiceDetailsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="BookingScreen" component={BookingScreen} options={{ headerShown: false }} />
      <Stack.Screen name="UserBookingsScreen" component={UserBookingsScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default App;

