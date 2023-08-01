import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// const Constents = require('../constents')
import { COLORS, FONTS } from '../constants'

export default function ProfileScreen() {
    return (
        <View style={styles.mainView}>
            {/* <View style={{backgroundColor: '#fff'}}> */}
            <Text>Profile Screen</Text>
            {/* </View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: COLORS.orange,
        justifyContent: 'center',
        alignItems: 'center',
    }
})