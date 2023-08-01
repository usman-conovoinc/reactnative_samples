import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../constants'

// const Constents = require('../constents')

export default function FavouriteScreen() {
    return (
        <View style={styles.mainView}>
            {/* <View style={{backgroundColor: '#fff'}}> */}
            <Text>Favourite Screen</Text>
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