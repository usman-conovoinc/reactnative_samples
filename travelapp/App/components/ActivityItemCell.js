import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

// const Constents = require('../constents')
import { COLORS, FONTS } from '../constants'

export default ActivityItemCell = ({ item }, isPortrait) => {
    return (
        <TouchableOpacity>
            <View style={[styles.mainView, {
                marginLeft: item.id == 1 ? 20 : 0
            }]}>
                <Image style={styles.image} source={item.image} />
                <Text style={styles.title}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    mainView: {
        marginRight: 20,
        alignItems: 'center'
    },
    image: {
        height: 36,
        width: 36,
        resizeMode: 'contain'
    },
    title: {
        marginTop: 5,
        color: COLORS.gray,
        fontFamily: FONTS.LatoBold,
        fontSize: 10
    },
})