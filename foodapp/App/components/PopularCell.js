import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';

const Constents = require('../constents');

export default PopularCell = ({ data }) => {
    const { id, title, image, weight, rating, price } = data.popularObj;
    return (
        <View style={[styles.card, { marginTop: id == 1 ? 10 : 20 }]}>
            {/* Card Details View */}
            <View>
                <View>
                    <View style={styles.weeksTopContainer}>
                        <MaterialCommunityIcons name='crown' size={12}
                            color={Constents.COLORS.primary} />
                        <Text style={styles.text}>Top of the week</Text>
                    </View>
                    <View style={styles.titlesContainer}>
                        <Text style={styles.itemName}>{title}</Text>
                        <Text style={styles.itemWeight}>Weight {weight}</Text>
                    </View>
                </View>
                <View style={styles.popularCardBottom}>
                    <View style={styles.addPizzaButton}>
                        <FeatherIcon name='plus' size={10} color={Constents.COLORS.textDark} />
                    </View>
                    <View style={styles.ratingContainer}>
                        <MaterialCommunityIcons name='star' size={10} color={Constents.COLORS.textDark} />
                        <Text style={styles.ratingText}>{rating}</Text>
                    </View>
                </View>
            </View>
            {/* Card Image View */}
            <View style={styles.imageViewContainer}>
                <Image style={styles.imageView} source={image} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: Constents.COLORS.white,
        borderRadius: 25,
        paddingTop: 20,
        paddingLeft: 20,
        overflow: 'hidden'
    },

    weeksTopContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginLeft: 10,
        fontFamily: Constents.FONTS.MontserratSemiBold,
        fontSize: 14
    },

    titlesContainer: {
        marginTop: 20,
    },
    itemName: {
        fontFamily: Constents.FONTS.MontserratSemiBold,
        fontSize: 14,
        color: Constents.COLORS.black
    },
    itemWeight: {
        fontFamily: Constents.FONTS.MontserratMedium,
        fontSize: 12,
        marginTop: 5,
        color: Constents.COLORS.textLight
    },

    popularCardBottom: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: -20
    },
    addPizzaButton: {
        backgroundColor: Constents.COLORS.primary,
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
    },
    ratingText: {
        fontFamily: Constents.FONTS.MontserratSemiBold,
        fontSize: 12,
        color: Constents.COLORS.textDark,
        marginLeft: 5
    },
    imageViewContainer: {
        marginLeft: 40,
    },
    imageView: {
        width: 210,
        height: 125,
        resizeMode: 'contain'
    }
});