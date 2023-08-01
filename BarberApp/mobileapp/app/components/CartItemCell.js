import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { COLORS, FONTS, SIZES, images } from '../constents';

export default CartItemCell = ({ item }) => {
    console.log(item)
    return (
        <View style={styles.mainView}>
            <View style={styles.serviceContainer}>
                <Image style={styles.itemImage}
                    resizeMode='cover'
                    source={{ uri: item.image }} />
                <View style={{ flex: 1 }}>
                    <Text style={styles.serviceLabel}>{item.name}</Text>
                    <Text style={styles.servicePrice}>{item.currency + item.price}</Text>
                </View>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({

    mainView: {
        flex: 1,
        // backgroundColor: '#000'
        paddingTop: 10,
    },

    serviceContainer: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 30,

        borderRadius: 5,
        shadowColor: COLORS.darkGray,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 5,
        paddingVertical: 10
    },
    itemImage: {
        marginLeft: 16,
        height: 53,
        width: 72,
        borderRadius: 5,
        backgroundColor: '#000'
    },
    serviceLabel: {
        fontFamily: FONTS.PoppinsMedium,
        fontSize: 16,
        color: COLORS.black,
        marginLeft: 16,
        marginRight: 16,
    },

    servicePrice: {
        fontFamily: FONTS.PoppinsMedium,
        fontSize: 16,
        color: COLORS.darkBlue,
        marginLeft: 16,
        marginRight: 16

    }
})