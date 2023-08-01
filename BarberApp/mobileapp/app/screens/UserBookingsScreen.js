import React, { useState, useEffect } from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BookingCell from '../components/BookingCell.js';

import { COLORS, FONTS, SIZES, images, BASE_URL } from '../constents';

const UserBookingsScreen = ({ navigation }) => {

    const [bookings, setBookings] = useState([]);

    const getUserBookings = async () => {

        const url = BASE_URL + '/api/bookings'
        try {
            // console.log(url)
            const response = await fetch(url);
            const json = await response.json();
            // console.log(json.data)
            console.log(JSON.stringify(json.data, null, 2));
            setBookings(json.data);
        } catch (error) {
            console.error(error);
        } finally {
        }
    }

    useEffect(() => {
        getUserBookings();
    }, []);



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
                        <Text style={styles.title}>Bookings</Text>
                    </View>
                </SafeAreaView>

                {/* Services List */}
                <FlatList style={styles.itemList}
                    showsVerticalScrollIndicator={false}
                    data={bookings}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item, index }) => (
                        <BookingCell key={index} item={item} />
                    )}
                />

            </View>
        </View >
    );
};

export default UserBookingsScreen;


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


})
