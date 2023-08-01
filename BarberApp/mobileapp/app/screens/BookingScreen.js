import React, { useState } from 'react';
import { FlatList, Image, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CartItemCell from '../components/CartItemCell.js';
import ConfirmBookingModal from '../components/ConfirmBookingModal.js';

import { COLORS, FONTS, SIZES, images } from '../constents';


export default BookingScreen = ({ route, navigation }) => {
    const { cartItems, shop } = route.params;
    const [isVisible, setVisibility] = useState(false);

    const itemsCurrency = cartItems[0].currency

    const btnBookNow = () => {
        setVisibility(true)
    }

    const closeModal = () => {
        setVisibility(false)
    };

    const calculateSubTotal = () => {
        var result = (cartItems.map(data => parseInt(data.price))).reduce((a, b) => a + b);
        return result
    }

    const calculateTax = (percent) => {
        let subTotal = calculateSubTotal()
        return subTotal * percent / 100
    }

    const subTotal = calculateSubTotal()
    const taxAmount = calculateTax(10)

    return (
        <View style={styles.mainView}>
            <View style={styles.contentView}>

                <SafeAreaView width='100%'>
                    <View style={styles.header}>
                        <View style={styles.btnBack}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Image style={styles.btnBackIcon} source={images.btnBackEmpty} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.title}>{shop.name}</Text>
                    </View>
                </SafeAreaView>

                {/* Services List */}
                <FlatList style={styles.itemList}
                    showsVerticalScrollIndicator={false}
                    data={cartItems}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, index }) => (
                        <CartItemCell key={index} item={item} />
                    )}
                />

                <View style={styles.totalsContainer}>
                    <View style={styles.totalsView}>
                        <Text style={styles.subtotalTitle}>Subtotal</Text>
                        <Text style={styles.subtotalText}>{itemsCurrency + subTotal}</Text>
                    </View>
                    <View style={styles.totalsView}>
                        <Text style={styles.subtotalTitle}>Tax</Text>
                        <Text style={styles.subtotalText}>{itemsCurrency + taxAmount}</Text>
                    </View>
                    <View style={styles.totalsView}>
                        <Text style={styles.totalTitle}>Total</Text>
                        <Text style={styles.totalText}>{itemsCurrency + (subTotal + taxAmount)}</Text>
                    </View>
                </View>

                <ConfirmBookingModal navigation={navigation} isVisible={isVisible} closeModal={closeModal} shop={shop} cartItems={cartItems} />

                {/* Proceed Button */}
                <View style={styles.proceedButtonContainer}>
                    <TouchableOpacity onPress={btnBookNow}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.btnProceed}>Book Now</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        </View >


    );
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
    contentView: {
        flex: 1,
    },
    header: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        flex: 1,
        color: COLORS.black,
        fontFamily: FONTS.PoppinsSemiBold,
        fontSize: 18,
        textAlign: 'center',
        marginRight: 42 + SIZES.horizontalMargin,
    },

    btnBack: {
        // flex: 1,
        width: 42,
        marginLeft: 30,
        // backgroundColor: '#000'
    },
    btnBackIcon: {
        height: 20,
        width: 20,
    },

    itemList: {
        marginTop: 20,
        flex: 1
    },

    totalsContainer: {
        marginHorizontal: 30,
        marginVertical: 16,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    totalsView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    subtotalTitle: {
        fontFamily: FONTS.PoppinsRegular,
        fontSize: 16,
        color: COLORS.lightGray
    },
    subtotalText: {
        fontFamily: FONTS.PoppinsRegular,
        fontSize: 16,
        color: COLORS.lightGray
    },

    totalTitle: {
        fontFamily: FONTS.PoppinsMedium,
        fontSize: 16,
        color: COLORS.black
    },
    totalText: {
        fontFamily: FONTS.PoppinsMedium,
        fontSize: 16,
        color: COLORS.black
    },


    proceedButtonContainer: {
        backgroundColor: COLORS.darkBlue,
        marginTop: 10,
        marginRight: 28,
        marginLeft: 28,
        marginBottom: 38,

        height: 52,
        borderRadius: 26,
        justifyContent: 'center',

        shadowColor: COLORS.darkBlue,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 5
    },

    btnProceed: {
        borderRadius: 26,
        padding: 12,
        flex: 1,
        textAlign: 'center',
        color: COLORS.white,
        fontFamily: FONTS.PoppinsSemiBold,
        fontSize: 18,
    },




})
