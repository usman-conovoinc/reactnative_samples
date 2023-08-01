import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';

import { COLORS, FONTS, SIZES, images } from '../constents';

export default ServiceDetailsScreen = ({ route, navigation }) => {

    const { service } = route.params;

    // console.log(JSON.stringify(service, null, 2));


    return (
        <View style={styles.mainView}>
            <View style={styles.contentView}>

                {/* Header View */}
                <View>
                    <Image source={{ uri: service.image }} style={styles.imageView} resizeMode='cover' />

                    <View style={styles.serviceDetails}>
                        <Text style={styles.title}>{service.name}</Text>
                        <Text style={styles.price}>{service.currency + service.price}</Text>
                    </View>
                </View>

                {
                    (Platform.OS != 'android') ?

                        <SafeAreaView position='absolute'>
                            <View style={styles.btnBack}>
                                <TouchableOpacity onPress={() => navigation.goBack()}>
                                    <Image style={styles.btnBackIcon} source={images.btnBackEmpty} />
                                </TouchableOpacity>
                            </View>
                        </SafeAreaView>
                        : <></>
                }
            </View>

        </View >
    );
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
    contentView: {
        flex: 1,
    },

    btnBack: {
        marginLeft: SIZES.horizontalMargin,
        marginTop: SIZES.horizontalMargin,
        height: 40,
        width: 40,
    },
    btnBackIcon: {
        height: 20,
        width: 20,
    },

    imageView: {
        width: SIZES.width,
        height: SIZES.width * 0.6214285714,
        // backgroundColor: '#000'
    },
    title: {
        marginVertical: 18,
        color: '#000',
        paddingHorizontal: 16,
        fontFamily: FONTS.PoppinsBold,
        fontSize: 13,
        lineHeight: 15,
    },
    price: {
        marginVertical: 18,
        color: COLORS.darkBlue,
        paddingRight: 16,
        fontFamily: FONTS.PoppinsBold,
        fontSize: 13,
        lineHeight: 15,
    },
    serviceDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})