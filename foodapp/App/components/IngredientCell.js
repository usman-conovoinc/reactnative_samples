
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const Constents = require('../constents');

export default IngredientCell = ({ item }) => {
    return (
        <View style={[styles.ingredientCell, {
            marginLeft: item.id == 1 ? 20 : 0
        }]}>
            <Image style={styles.ingredientImage} source={item.image} />
        </View>
    );
}

const styles = StyleSheet.create({

    ingredientCell: {
        marginVertical: 10,
        marginRight: 15,
        borderRadius: 20,
        shadowColor: Constents.COLORS.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2,
        backgroundColor: '#fff'
    },
    ingredientImage: {
        height: 80,
        width: 80,
        marginHorizontal: 10,
        alignContent: 'center'
    },

});