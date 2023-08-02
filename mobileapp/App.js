/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import SplashScreen from './app/Screens/SplashScreen.js';
import { HomeNavigationStack } from './app/Screens/Home';
import AnalyticsScreen from './app/Screens/AnalyticsScreen.js';
import SettingScreen from './app/Screens/SettingScreen.js';
import NotesScreen from './app/Screens/NotesScreen.js';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator initialRouteName='HomeNavigationStack'>
      <Tab.Screen name='Home' component={HomeNavigationStack} options={{ headerShown: false }} />
      <Tab.Screen name='AnalyticsScreen' component={AnalyticsScreen} options={{ headerShown: false }} />
      <Tab.Screen name='NotesScreen' component={NotesScreen} options={{ headerShown: false }} />
      <Tab.Screen name='SettingScreen' component={SettingScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  )
}

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [loginStatus, setLoginStatus] = useState(true);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? "#000" : "#fff",
  };

  return (
    <NavigationContainer>
      {
        !loginStatus ?  // if has image
          <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='SplashScreen' component={SplashScreen} initialParams={loginStatus} />
          </Stack.Navigator>
          :
          <Stack.Navigator initialRouteName='Tabs' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Tabs' component={Tabs} />
          </Stack.Navigator>
      }
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "orange"
  },
});

export default App;
