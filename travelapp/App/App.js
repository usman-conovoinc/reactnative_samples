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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

Entypo.loadFont();
MaterialCommunityIcons.loadFont();

import HomeScreen from './components/HomeScreen';
import FavouriteScreen from './components/FavouriteScreen';
import ProfileScreen from './components/ProfileScreen';
import DetailsScreen from './components/DetailsScreen';


// const Constents = require('./constents');
import { COLORS, FONTS } from '../App/constants'
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {

  return (<Tab.Navigator screenOptions={{
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: styles.tabbar,
    tabBarActiveTintColor: COLORS.orange,
    tabBarInactiveTintColor: COLORS.gray,
    tabBarItemStyle: {
      // borderRadius: 200,
    },
  }}>
    <Tab.Screen name='Home' component={HomeScreen} options={{
      tabBarIcon: ({ color }) => <Entypo name='home' size={32} color={color} />
    }
    } />
    <Tab.Screen name='Favourite' component={FavouriteScreen} options={{
      tabBarIcon: ({ color }) => <Entypo name='heart' size={32} color={color} />
    }} />
    <Tab.Screen name='Profile' component={ProfileScreen} options={{
      tabBarIcon: ({ color }) => <MaterialCommunityIcons name='account' size={32} color={color} />
    }} />
  </Tab.Navigator>
  )
}


export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='TabNavigator' component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name='Details' component={DetailsScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

  tabbar: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  }
});