import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';

import { COLORS, FONTS, SIZES } from '../constents';


const dataSet = [{
    'id': '1',
    'name': '50% Discount on All kinds Of Massage',
    'image': 'https://media.istockphoto.com/photos/business-woman-lady-boss-in-beauty-salon-making-hairdress-and-looking-picture-id1147811403?k=20&m=1147811403&s=612x612&w=0&h=lBbmmhPxES33OgnJgkzvtURRSs_gRvD7kX65gETQ9r8=',
    'description': 'Barba Roja is one of the most attractive places for men to get a change of look, is one of the most recognized barbershops in Medellin and offers excellent customer service. More than just looking good, as they say, you will live a luxurious experience.'
},
{
    'id': '2',
    'name': '50% Discount on All kinds Of Massage',
    'image': 'https://media.istockphoto.com/photos/business-woman-lady-boss-in-beauty-salon-making-hairdress-and-looking-picture-id1147811403?k=20&m=1147811403&s=612x612&w=0&h=lBbmmhPxES33OgnJgkzvtURRSs_gRvD7kX65gETQ9r8=',
    'description': 'Barba Roja is one of the most attractive places for men to get a change of look, is one of the most recognized barbershops in Medellin and offers excellent customer service. More than just looking good, as they say, you will live a luxurious experience.'
},
{
    'id': '3',
    'name': '50% Discount on All kinds Of Massage',
    'image': 'https://media.istockphoto.com/photos/business-woman-lady-boss-in-beauty-salon-making-hairdress-and-looking-picture-id1147811403?k=20&m=1147811403&s=612x612&w=0&h=lBbmmhPxES33OgnJgkzvtURRSs_gRvD7kX65gETQ9r8=',
    'description': 'Barba Roja is one of the most attractive places for men to get a change of look, is one of the most recognized barbershops in Medellin and offers excellent customer service. More than just looking good, as they say, you will live a luxurious experience.'
}
]

export default DealsView = ({ navigation }) => {
    return (
        <View style={styles.dealsViewContainer}>

            <View style={styles.titleAndSeeAllContainer}>
                <Text style={styles.title}>Daily Deals</Text>
                <TouchableOpacity>
                    <Text style={styles.btnSeeAll}>See All</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={{ flex: 1 }} horizontal={true} showsHorizontalScrollIndicator={false}>
                {dataSet.map((item, index) => {
                    return (
                        <TouchableOpacity key={index} onPress={() =>
                            navigation.navigate('ShopDetailsScreen', { item: item })
                        }>
                            <View style={[styles.dealsContainer, {
                                paddingLeft: (index == 0 || index == dataSet.length - 1) ? SIZES.horizontalMargin : 14,
                                // backgroundColor: index % 2 == 0 ? '#ff9f43' : '#fff',
                                // backgroundColor: '#0000'

                            }]}>
                                <View style={styles.imageAndDetails}>
                                    <Image resizeMode='cover'
                                        style={styles.imageView} source={{ uri: item.image }} />
                                    <View style={styles.detailsContainer}>
                                        <Text style={styles.dealTitle}
                                            numberOfLines={2}
                                            ellipsizeMode='tail'>{item.name}</Text>
                                        <Text style={styles.dealDescription}
                                            numberOfLines={1}
                                            ellipsizeMode='tail'>{item.description}</Text>
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
    dealsViewContainer: {
        // paddingVertical: 16,
        // backgroundColor: '#000',
        width: SIZES.width,
        flex: 1,
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

    dealsContainer: {
        flex: 1,
        // backgroundColor: '#ff9f43',
        width: SIZES.width / 2,
        height: (SIZES.width / 2) * 0.85,
        paddingVertical: 14,
    },

    imageAndDetails: {

        width: SIZES.width / 2 - SIZES.horizontalMargin * 2,
        flex: 1,

        borderRadius: 15,
        // backgroundColor: '#000',
        shadowColor: COLORS.lightBlue,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        // borderColor: COLORS.darkGray,
        // borderWidth: 0.2,

    },


    imageView: {
        flex: 1,
        width: SIZES.width / 2 - SIZES.horizontalMargin * 2,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        // backgroundColor: '#000'
    },
    detailsContainer: {
        width: SIZES.width / 2 - SIZES.horizontalMargin * 2,
        height: '50%',
        backgroundColor: COLORS.white,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        paddingVertical: 10,
    },
    dealTitle: {
        fontFamily: FONTS.PoppinsMedium,
        fontSize: 12,
        color: COLORS.darkGray,
        paddingHorizontal: 10,
        lineHeight: 15
    },
    dealDescription: {
        fontFamily: FONTS.PoppinsRegular,
        fontSize: 10,
        color: COLORS.lightGray,
        paddingHorizontal: 10,
        paddingTop: 1,
        lineHeight: 12
    }


})

