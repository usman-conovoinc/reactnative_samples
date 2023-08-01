import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { images, FONTS, SIZES, COLORS } from '../constents'

export default CategoryCell = ({ item }, { lastIndex }) => {

    return (
        <View style={[styles.mainView, {
            marginRight: (item.id == lastIndex) ? 16 : 0
        }]}>

            <Image
                style={styles.backgroundImage}
                source={item.image}
                resizeMode={'cover'} />
            <LinearGradient
                start={{ x: 0.0, y: 0.4 }} end={{ x: 0, y: 1 }}
                locations={[0, 1]}
                colors={['#00000002', '#00000080']}
                style={styles.linearGradient}>
                <Text style={styles.title}>
                    {item.title}
                </Text>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({

    mainView: {
        marginLeft: 16,
        marginRight: 16,
        width: 88,
        height: 88,
    },

    backgroundImage: {
        width: 88,
        height: 88,
        borderRadius: 8,
    },

    linearGradient: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        height: 44,
        width: '100%',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8
    },

    title: {
        alignSelf: 'center',
        marginTop: 8,
        marginHorizontal: 8,
        fontFamily: FONTS.PoppinsMedium,
        fontSize: 12,
        lineHeight: 16,
        color: COLORS.white,
    }

})