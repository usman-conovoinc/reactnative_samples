import React from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
Entypo.loadFont();

// const Constents = require('../constents')
import { COLORS, FONTS } from '../constants'

export default DiscoverItemCell = ({ item }, isPortrait, navigation) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Details', {
            item: item, isWebImage: false,
        })}>
            <View style={[styles.mainView, {
                marginLeft: item.id == '1' ? 20 : 0
            }]}>
                <ImageBackground style={[styles.backgroundImage, {
                    height: isPortrait === true ? 250 : 140,
                    width: isPortrait === true ? 170 : 100,
                }]} source={item.image} >

                    <View style={styles.titleContainer}>
                        <Text style={[styles.title, {
                            fontSize: isPortrait === true ? 18 : 12,
                        }]}>{item.title}</Text>
                        <View style={styles.locationContainer}>
                            <Entypo name='location-pin' size={18} color={COLORS.white} />
                            <Text style={[styles.locationName, {
                                fontSize: isPortrait === true ? 10 : 8,
                            }]}>{item.location}</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    mainView: {
        marginRight: 20,
        justifyContent: 'flex-end',
        // backgroundColor: '#000',
    },
    backgroundImage: {
        width: '100%',
        flex: 1,
        borderRadius: 20,
        overflow: 'hidden',
    },
    titleContainer: {
        position: 'absolute',
        paddingHorizontal: 10,
        bottom: 15,
    },
    title: {
        color: COLORS.white,
        fontFamily: FONTS.LatoBold,
    },
    locationContainer: {
        flexDirection: 'row',
        marginTop: 5,
        alignItems: 'center',
    },
    locationName: {
        color: COLORS.white,
        fontFamily: FONTS.LatoBold,
        marginRight: 5,
    }
})