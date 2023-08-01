import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS, images, SIZES, BASE_URL } from '../constents';

export default ShopView = ({ navigation }) => {

    const [barbers, setBarbers] = useState([]);

    const getPopularBarbers = async () => {
        try {
            const response = await fetch(BASE_URL + '/api/barbers');
            const json = await response.json();
            // console.log(json);
            setBarbers(json.data);
        } catch (error) {
            console.error(error);
        } finally {
        }
    }

    useEffect(() => {
        getPopularBarbers();
    }, []);


    return (
        <View style={styles.mainView}>

            <View style={styles.titleAndSeeAllContainer}>
                <Text style={styles.title}>All Shops Near You</Text>
                <TouchableOpacity>
                    <Text style={styles.btnSeeAll}>See All</Text>
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                {barbers.map((item, index) => {
                    // console.log(JSON.stringify(item, null, 2));

                    let isDiscountAvailable = (index == 1) ? 'flex' : 'none'

                    return (
                        <TouchableOpacity key={index} onPress={() =>
                            navigation.navigate('ShopDetailsScreen', { item: item })
                        }>
                            <View style={[styles.popularShopsContainer, {
                            }]}>
                                <Image resizeMode='cover'
                                    style={styles.imageView} source={{ uri: item.image }} />
                                <View style={styles.detailsContainer}>

                                    <TouchableOpacity style={{ display: isDiscountAvailable }}>
                                        <View style={styles.btnDiscount}>
                                            <Text style={styles.offerText}>50% off Haircut</Text>
                                        </View>
                                    </TouchableOpacity>


                                    <View style={styles.detailsContentView}>
                                        <Text style={styles.shopTitle}>{item.name}</Text>
                                        <View style={styles.ratingContainer}>

                                            <Text style={styles.priceText}>10$</Text>
                                            <Image style={styles.ratingIcon} source={images.starIcon} />
                                            <Text style={styles.ratingText}>4.9 (1900 ratings)</Text>
                                        </View>
                                        <View style={styles.locationContainer}>
                                            <Image style={styles.locationIcon} source={images.locationIcon} />
                                            <Text style={styles.shopLocationText}>{item.location}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>

                    )
                })}
            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    mainView: {
        paddingVertical: 20,

        // shadowColor: COLORS.lightBlue,
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 1,
        // shadowRadius: 5,
        // elevation: 5,
        // backgroundColor: '#000'
    },
    titleAndSeeAllContainer: {
        marginHorizontal: SIZES.horizontalMargin,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: FONTS.PoppinsMedium,
        fontSize: 14,
        color: COLORS.darkBlue
    },
    btnSeeAll: {
        fontFamily: FONTS.PoppinsRegular,
        fontSize: 12,
        color: COLORS.lightGray,

    },
    popularShopsContainer: {
        flex: 1,
        marginTop: 14,
        marginBottom: 14,
        marginHorizontal: SIZES.horizontalMargin,
        flexDirection: 'column',
        // backgroundColor: '#000',
    },
    imageView: {
        width: "100%",
        height: 170,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        // backgroundColor: '#000'
    },
    detailsContainer: {
        flex: 1,
        backgroundColor: COLORS.white,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        paddingTop: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        // borderColor: COLORS.darkGray,
        // borderWidth: 0.2,


        shadowColor: COLORS.lightBlue,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,

    },
    btnDiscount: {
        marginLeft: SIZES.horizontalMargin,
        backgroundColor: COLORS.darkBlue,
        alignItems: 'center',
        alignSelf: "flex-start",
        paddingHorizontal: 8,
        borderRadius: 4,
        marginBottom: 8
    },
    offerText: {
        fontFamily: FONTS.PoppinsMedium,
        fontSize: 10,
        color: COLORS.white,
        padding: 2,
    },
    detailsContentView: {
        marginTop: 5,
        // backgroundColor: '#000',
        paddingHorizontal: 16,

    },
    shopTitle: {
        fontFamily: FONTS.PoppinsMedium,
        fontSize: 16,
        color: COLORS.darkGray,
        lineHeight: 16
    },

    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: '#000',
    },
    priceText: {
        fontFamily: FONTS.PoppinsRegular,
        fontSize: 10,
        color: COLORS.lightGray,
    },

    ratingIcon: {
        marginLeft: 7,
        width: 14,
        height: 14,
    },

    ratingText: {
        marginLeft: 7,
        fontFamily: FONTS.PoppinsRegular,
        fontSize: 10,
        color: COLORS.lightGray,
    },


    locationContainer: {
        marginTop: 2,
        flexDirection: 'row',
        // backgroundColor: '#000'
    },
    shopLocationText: {
        fontFamily: FONTS.PoppinsRegular,
        fontSize: 10,
        color: COLORS.lightGray,
        paddingHorizontal: 10,
        paddingTop: 1,
    },
    locationIcon: {
        width: 12,
        height: 12,
        marginBottom: 16
    }


})

