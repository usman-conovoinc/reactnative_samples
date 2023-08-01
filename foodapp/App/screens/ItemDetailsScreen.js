import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { View, Text, Image, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import popularData from '../assets/data/popularData';
import IngredientCell from '../components/IngredientCell.js';

const Constents = require('../constents');

export default ItemDetailsScreen = ({ route, navigation }) => {

    const { item } = route.params;

    // const item = popularData[0]
    // console.log(item.crust)

    return (
        <View style={styles.mainView}>
            <SafeAreaView>

                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={styles.headerLeft}>
                            <FeatherIcon name='chevron-left' size={12} color={Constents.COLORS.textDark} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.headerRight}>
                        <MaterialCommunityIcons name='star' size={12} color={Constents.COLORS.white} />
                    </View>
                </View>

                <View style={styles.titlesContainer}>
                    <Text style={styles.title}>
                        {item.title}
                    </Text>
                </View>

                <View style={styles.priceContainer}>
                    <Text style={styles.price}>
                        ${item.price}
                    </Text>
                </View>

                <View style={styles.detailsContainer}>
                    <View style={styles.textDetailsContainer}>

                        <View style={styles.pizzaSizeDetailContainer}>
                            <Text style={styles.pizzaSizeHeading}>Size</Text>
                            <Text style={styles.pizzaSizeText}>{item.sizeName}</Text>
                        </View>

                        <View style={styles.pizzaCrustDetailContainer}>
                            <Text style={styles.pizzaCrustHeading}>Crust</Text>
                            <Text style={styles.pizzaCrustText}>{item.crust}</Text>
                        </View>

                        <View style={styles.pizzaDeliveryDetailContainer}>
                            <Text style={styles.pizzaDeliveryHeading}>Delivery</Text>
                            <Text style={styles.pizzaDeliveryText}>{item.deliveryTime} min</Text>
                        </View>

                    </View>
                    <Image style={styles.imageView} source={item.image} />
                </View>

                <View style={styles.ingredientsContainer}>
                    <Text style={styles.ingredientsTitle}>Ingredients</Text>
                    <View style={styles.ingredientsListContainer}>
                        <FlatList data={item.ingredients}
                            renderItem={item => IngredientCell(item)}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>

                <TouchableOpacity onPress={() => alert("Your order has been placed!")}>
                    <View style={styles.placeOrderButton}>
                        <Text style={styles.placeOrderText}>Place an order</Text>
                        <FeatherIcon name='chevron-right' size={18} color={Constents.COLORS.black} />
                    </View>
                </TouchableOpacity>

            </SafeAreaView>
        </View>
    );
};


const styles = StyleSheet.create({
    mainView: {
        // backgroundColor: '#000',
        flex: 1,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20
    },
    headerLeft: {
        borderRadius: 10,
        borderColor: Constents.COLORS.textLight,
        borderWidth: 2,
        padding: 12
    },
    headerRight: {
        borderRadius: 10,
        borderColor: Constents.COLORS.primary,
        borderWidth: 2,
        padding: 12,
        backgroundColor: Constents.COLORS.primary
    },
    titlesContainer: {
        marginTop: 30,
        paddingHorizontal: 20,
    },
    title: {
        fontFamily: Constents.FONTS.MontserratBold,
        fontSize: 32,
        color: Constents.COLORS.textDark,
        width: '50%'
    },
    priceContainer: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    price: {
        fontFamily: Constents.FONTS.MontserratSemiBold,
        fontSize: 32,
        color: Constents.COLORS.price,
        width: '50%'
    },
    detailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30
    },
    textDetailsContainer: {
        paddingLeft: 20,
    },
    pizzaSizeHeading: {
        fontFamily: Constents.FONTS.MontserratMedium,
        fontSize: 14,
        color: Constents.COLORS.textLight
    },
    pizzaSizeText: {
        fontFamily: Constents.FONTS.MontserratSemiBold,
        fontSize: 16,
        color: Constents.COLORS.textDark
    },
    pizzaCrustDetailContainer: {
        marginTop: 20
    },

    pizzaCrustHeading: {
        fontFamily: Constents.FONTS.MontserratMedium,
        fontSize: 14,
        color: Constents.COLORS.textLight
    },
    pizzaCrustText: {
        fontFamily: Constents.FONTS.MontserratSemiBold,
        fontSize: 16,
        color: Constents.COLORS.textDark
    },
    pizzaDeliveryDetailContainer: {
        marginTop: 20
    },
    pizzaDeliveryHeading: {
        fontFamily: Constents.FONTS.MontserratMedium,
        fontSize: 14,
        color: Constents.COLORS.textLight
    },
    pizzaDeliveryText: {
        fontFamily: Constents.FONTS.MontserratSemiBold,
        fontSize: 16,
        color: Constents.COLORS.textDark
    },
    imageView: {
        resizeMode: 'contain',
        marginLeft: 50
    },

    ingredientsContainer: {
        marginTop: 40,
    },
    ingredientsTitle: {
        paddingHorizontal: 20,
        fontFamily: Constents.FONTS.MontserratSemiBold,
        fontSize: 16,
        color: Constents.COLORS.textDark,
    },
    ingredientsListContainer: {
        paddingVertical: 20,
    },

    placeOrderButton: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Constents.COLORS.primary,
        marginHorizontal: 20,
        paddingVertical: 25,
        borderRadius: 35
    },
    placeOrderText: {
        fontFamily: Constents.FONTS.MontserratBold,
        fontSize: 14,
        color: Constents.COLORS.textDark,
        marginRight: 10
    }



})