import React from 'react';
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { COLORS, FONTS, images, SIZES } from '../constents';

export default ServiceCell = ({ navigation, service, isSelected, handleChange }) => {
    return <View>
        <TouchableOpacity onPress={() => navigation.navigate('ServiceDetailsScreen', { service: service })}>
            <View style={styles.serviceView}>
                <Pressable onPress={() => { handleChange(service) }}>
                    <Image style={styles.checkbox}
                        source={isSelected == true ? images.checked : images.unchecked} />
                </Pressable>
                <Text style={styles.serviceText}>{service.name}</Text>
                <Text style={styles.servicePrice}>{service.currency + service.price}</Text>
            </View>
        </TouchableOpacity>
    </View>
};


const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
    serviceView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: COLORS.white,
        paddingVertical: 10,
        borderRadius: 10,
        borderColor: COLORS.darkBlue,
        borderWidth: 0.5,

        shadowColor: COLORS.lightGray,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    checkbox: {
        height: 20,
        width: 20,
        marginLeft: 16,
    },
    serviceText: {
        width: '75%',
        marginLeft: 8,
        marginRight: 5,
        flexShrink: 1,
        fontFamily: FONTS.PoppinsMedium,
        fontSize: 16,
        color: COLORS.darkGray
    },
    servicePrice: {
        marginRight: 16,
        fontFamily: FONTS.PoppinsMedium,
        fontSize: 16,
        color: COLORS.darkGray

    },
})
