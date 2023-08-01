// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

// import AsyncStorage from '@react-native-community/async-storage';

const SplashScreen = ({ navigation }) => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home'),


        setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      // AsyncStorage.getItem('user_id').then((value) =>
      //   navigation.replace(value === null ? 'Auth' : 'Home'),
      // );
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});


/*

{
  "name": "barberbooking",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    "start": "react-native start",
    "test": "jest",
    "lint": "eslint .",
    "prepare": "patch-package"
  },
  "dependencies": {
    "@react-native-community/async-storage": "^1.12.1",
    "@react-native-community/masked-view": "^0.1.11",
    "@react-navigation/native": "^6.0.10",
    "@react-navigation/native-stack": "^6.6.2",
    "cd": "^0.3.3",
    "ios": "0.0.1",
    "or": "^0.2.0",
    "patch-package": "^7.0.2",
    "react": "17.0.4",
    "react-native": "0.68.3",
    "react-native-date-picker": "^4.2.13",
    "react-native-gesture-handler": "^2.11.0",
    "react-native-keyboard-aware-scrollview": "^2.1.0",
    "react-native-normalize": "^1.0.1",
    "react-native-reanimated": "^3.2.0",
    "react-native-safe-area-context": "^4.5.3",
    "react-native-screens": "^3.20.0"
  },
  "devDependencies": {
    "@babel/core": "^7.12.9",
    "@babel/runtime": "^7.12.5",
    "@react-native-community/eslint-config": "^2.0.0",
    "babel-jest": "^26.6.3",
    "eslint": "^7.32.0",
    "jest": "^26.6.3",
    "metro-react-native-babel-preset": "^0.67.0",
    "react-test-renderer": "17.0.2"
  },
  "jest": {
    "preset": "react-native"
  }
}

*/