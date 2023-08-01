/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import types from '../.redux/actions/types.js';
import { increaseCounter, decreaseCounter } from '../.redux/actions/counterAction.js';

const CounterApp = () => {

    const dispatch = useDispatch()
    const counterState = useSelector(state => state)

    return (
        <View style={styles.mainView}>
            <View style={
                {
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1
                }
            }>
                <TouchableOpacity onPress={() => dispatch(increaseCounter({ counter: 1 }))}>
                    <Text style={{ fontSize: 20 }}>Increase</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 20 }}>{counterState?.counter}</Text>
                <TouchableOpacity onPress={() => dispatch(decreaseCounter({ counter: 1 }))}>
                    <Text style={{ fontSize: 20 }}>Decrease</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#fff',
    }
})


export default CounterApp;
