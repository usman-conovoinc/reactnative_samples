import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainStackNavigator, ContactStackNavigator } from './MainStackNavigator'
import { Image, StyleSheet } from 'react-native';

import { images, COLORS } from '../constents'

const Tab = createBottomTabNavigator();

export default BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: COLORS.black,
                tabBarInactiveTintColor: COLORS.gray,
            }}>

            <Tab.Screen name='1'
                component={MainStackNavigator}
                options={{
                    tabBarIcon: ({ color }) => {
                        return <Image source={images.tab1}
                            tintColor={color}
                            style={styles.tabIcon}
                        />
                    }
                }} />

            <Tab.Screen name='2'
                component={ContactStackNavigator}
                options={{
                    tabBarIcon: ({ color }) => {
                        return <Image source={images.tab2}
                            tintColor={color}
                            style={styles.tabIcon}
                        />
                    }
                }} />

            <Tab.Screen name='3'
                component={ContactStackNavigator}
                options={{
                    tabBarIcon: ({ color }) => {
                        return <Image source={images.tab3}
                            tintColor={color}
                            style={styles.tabIcon} ß
                        />
                    }
                }} />

            <Tab.Screen name='4'
                component={ContactStackNavigator}
                options={{
                    tabBarIcon: ({ color }) => {
                        return <Image source={images.tab4}
                            tintColor={color}
                            style={styles.tabIcon}
                        />
                    }
                }} />

        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabIcon: {
        width: 52,
        height: 52
    }
});