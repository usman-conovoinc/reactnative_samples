import React from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image'

// const Constents = require('../constents')
import { COLORS, FONTS } from '../constants'
import LogoIcon from '../assets/SVG/LOGO.svg';

export default LearnMoreItemCell = ({ item }, isPortrait, navigation) => {
    // console.log(item)
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate('Details', {
                item: item, isWebImage: true
            })
        }}>
            <View style={[styles.mainView, {
                marginLeft: item.id == "0" ? 20 : 0
            }]}>

                <FastImage
                    style={[styles.backgroundImage, {
                        height: isPortrait === true ? 180 : 140,
                        width: isPortrait === true ? 170 : 100,
                    }]}
                    source={{
                        uri: item.download_url,
                        cache: FastImage.cacheControl.immutable,
                        priority: FastImage.priority.normal,
                    }}
                />


                {/* <ImageBackground style={[styles.backgroundImage, {
                    height: orientation === 'PORTRAIT' ? 180 : 140,
                    width: orientation === 'PORTRAIT' ? 170 : 100,
                }]} source={{uri: item.download_url}} > */}

                <View style={styles.titleContainer}>
                    <Text style={[styles.title, {
                        fontSize: isPortrait === true ? 18 : 12,
                    }]}>{item.author}</Text>
                </View>
                {/* </ImageBackground> */}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    mainView: {
        marginRight: 20,
        justifyContent: 'flex-end',
        // backgroundColor: '#000',
        // width: 160,
        // height: 160,
    },
    backgroundImage: {
        width: '100%',
        flex: 1,
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: '#000'
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
})