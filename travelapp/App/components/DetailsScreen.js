import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground, TouchableOpacity, SafeAreaView } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FastImage from 'react-native-fast-image'
import { isOrientationPortrait } from '../GlobalFunctions.js'

Entypo.loadFont();


import { COLORS, FONTS } from '../constants'

const height = Dimensions.get('window').height;

export default function DetailsScreen({ route, navigation }) {
    const [isPortrait, setPortrait] = useState(isOrientationPortrait());


    useEffect(() => {
        const observer = Dimensions.addEventListener("change", () => { setPortrait(isOrientationPortrait()); })
        return () => {
            observer.remove()
        }
    }, []);

    const { item, isWebImage } = route.params;

    return (
        <View style={[styles.mainView, {
            flexDirection: isPortrait === true ? 'column' : 'row',
        }]}>

            <View style={[styles.imageContainer, {
                flex: isPortrait === true ? 0.6 : 1,
            }]}>

                {isWebImage == false ?
                    <ImageBackground source={item.imageBig} style={{
                        width: '100%',
                        flex: 1,
                        resizeMode: 'contain'
                    }} />
                    :
                    <FastImage
                        style={{
                            width: '100%',
                            flex: 1,
                            resizeMode: 'contain',
                        }}
                        source={{
                            uri: item.download_url,
                            cache: FastImage.cacheControl.immutable,
                            priority: FastImage.priority.normal,
                        }}
                    />}

                {isWebImage == true ?
                    <SafeAreaView style={styles.titleContainer}>
                        <Text style={styles.title}>{item.author}</Text>
                    </SafeAreaView>
                    :

                    <SafeAreaView style={styles.titleContainer}>
                        <Text style={styles.title}>Hiking the Grand Canyon</Text>
                        <View style={styles.locationInfoContainer}>
                            <Entypo name='location-pin' size={24} color={COLORS.white} />
                            <Text style={styles.locationTitle}>{item.location}</Text>
                        </View>
                    </SafeAreaView>}


            </View>

            <SafeAreaView style={{ position: 'absolute', }}>
                <TouchableOpacity style={[styles.btnBack, {
                    marginLeft: isPortrait === true ? 20 : 0
                }]} onPress={() => navigation.goBack()}>
                    <Entypo name='chevron-left' size={32} color={COLORS.white} />
                </TouchableOpacity>
            </SafeAreaView>

            <SafeAreaView style={{ flex: isPortrait === true ? 0.4 : 0.6 }}>
                <View style={[styles.descriptionContainer, {
                    marginTop: 0,
                    borderRadius: 0,
                }]}>
                    <View style={
                        isPortrait === true ?
                            styles.btnHeartContainer :
                            styles.btnHeartContainerLandscape}>
                        <Entypo name='heart' size={32} color={COLORS.orange} />
                    </View>

                    <View style={styles.descriptionContent}>
                        <Text style={styles.descTitle}>Description</Text>
                        <Text style={styles.desc}>{item.description}</Text>
                    </View>

                    <View style={styles.priceRatingContainer}>

                        <View style={styles.priceContainer}>
                            <Text style={styles.infoTitle}>PRICE</Text>
                            <View style={styles.priceRatingTitles}>
                                <Text style={styles.infoValue}>${item.price}</Text>
                                <Text style={styles.infoValuePerUnit}>/person</Text>
                            </View>
                        </View>

                        <View style={styles.ratingContainer}>
                            <Text style={styles.infoTitle}>RATING</Text>
                            <View style={styles.priceRatingTitles}>
                                <Text style={styles.infoValue}>{item.rating}</Text>
                                <Text style={styles.infoValuePerUnit}>/5</Text>
                            </View>
                        </View>

                        <View style={styles.durationContainer}>
                            <Text style={styles.infoTitle}>DURATION</Text>
                            <View style={styles.priceRatingTitles}>
                                <Text style={styles.infoValue}>{item.duration}</Text>
                                <Text style={styles.infoValuePerUnit}>/hours</Text>
                            </View>
                        </View>

                    </View>

                    <TouchableOpacity style={styles.btnBuyNow}>
                        <Text style={styles.btnBuyNowText}>Book Now</Text>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>


        </View>
    );
};

const styles = StyleSheet.create({

    mainView: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    imageContainer: {
        // height: height * .6,
        backgroundColor: COLORS.orange,
        // flex: 1,
    },
    descriptionContainer: {
        flex: 1,
        backgroundColor: COLORS.white,
        marginTop: -20,
        borderRadius: 20,
        marginBottom: 0,
        marginLeft: 0,
    },
    btnBack: {
        // position: 'absolute',
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    titleContainer: {
        marginHorizontal: 20,
        position: 'absolute',
        bottom: 40,
    },
    locationInfoContainer: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontFamily: FONTS.LatoBold,
        fontSize: 32,
        color: COLORS.white,
    },
    locationTitle: {
        fontFamily: FONTS.LatoBold,
        fontSize: 16,
        color: COLORS.white,
    },
    btnHeartContainer: {
        position: 'absolute',
        backgroundColor: COLORS.white,
        right: 40,
        padding: 16,
        top: -32,
        borderRadius: 32,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    btnHeartContainerLandscape: {
        position: 'absolute',
        backgroundColor: COLORS.white,
        left: -120,
        padding: 16,
        top: 20,
        borderRadius: 32,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    descriptionContent: {
        marginTop: 30,
        paddingHorizontal: 20,
    },
    descTitle: {
        fontFamily: FONTS.LatoBold,
        fontSize: 24,
        color: COLORS.black,
    },
    desc: {
        marginTop: 20,
        fontFamily: FONTS.LatoRegular,
        fontSize: 16,
        color: COLORS.gray,
    },
    priceRatingContainer: {
        marginVertical: 20,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    priceRatingTitles: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginTop: 5,
    },

    infoTitle: {
        fontFamily: FONTS.LatoBold,
        fontSize: 12,
        color: COLORS.gray
    },
    infoValue: {
        fontFamily: FONTS.LatoBold,
        fontSize: 24,
        color: COLORS.orange
    },
    infoValuePerUnit: {
        color: COLORS.gray,
        fontFamily: FONTS.LatoBold,
        fontSize: 12,
    },

    btnBuyNow: {
        backgroundColor: COLORS.orange,
        marginHorizontal: 20,
        height: 53,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnBuyNowText: {
        fontFamily: FONTS.LatoBold,
        fontSize: 16,
        color: COLORS.white
    }

})