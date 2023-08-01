import React, { useRef, useState, useEffect } from 'react';
import { Alert, Image, Keyboard, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import normalize from 'react-native-normalize';

import { USER, COLORS, FONTS, SIZES, images, BASE_URL } from '../constents';

const screenMargin = (SIZES.width * 7.2463768) / 100
// console.log("screenMargin: " + screenMargin)

const screenWidthWithoutMargin = (SIZES.width - (screenMargin * 2))
// console.log("screenWidthWithoutMargin: " + screenWidthWithoutMargin)

const slotMargin = (SIZES.width * 5.55) / 100
// console.log("slotMargin: " + slotMargin)

const slotWidth = (screenWidthWithoutMargin / 4) - (slotMargin / 1.3)
// console.log("slotWidth" + slotWidth)

const slots = [
    { 'id': 1, "time": "01:00", isActive: false },
    { 'id': 2, "time": "02:00", isActive: false },
    { 'id': 3, "time": "03:00", isActive: true },
    { 'id': 4, "time": "04:00", isActive: true },
    { 'id': 5, "time": "05:00", isActive: true },
    { 'id': 6, "time": "06:00", isActive: false },
    { 'id': 7, "time": "07:00", isActive: false },
    { 'id': 8, "time": "08:00", isActive: true }]


export default ConfirmBookingModal = ({ navigation, isVisible, closeModal, shop, cartItems }) => {

    const [selectedSlot, setSelectedSlot] = useState(slots[3]);
    const [email, setEmail] = useState('usman.saeed@conovoinc.com');
    const [phoneNumber, setPhoneNumber] = useState('+8801944100955');

    const getSlotBackGroundColor = (slot) => {

        if (slot.isActive == true && selectedSlot.id == slot.id) {
            return [COLORS.darkBlue, COLORS.white];
        } else if (slot.isActive == true && selectedSlot.id != slot.id) {
            return [COLORS.white, COLORS.darkBlue];
        } else if (slot.isActive == false) {
            return [COLORS.cartItem, COLORS.darkGray];
        } else {
            return '#0000';
        }
    }

    const handelBookingAction = async () => {

        const servicesIDArray = cartItems.flatMap((item) => (
            item.id
        ))

        if (validateEmailAddress(email) == false) {
            Alert.alert("Invalid email address", "Please enter a valid email address")
            return
        }
        // console.log(shop.id)

        const params = {
            "userId": USER.id,
            "email": email,
            "phoneNumber": phoneNumber,
            "services": servicesIDArray,
            "shop": shop.id,
            "time": selectedSlot.time
        }

        // console.log(params)

        let data = {
            method: 'POST',
            body: JSON.stringify(params),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        try {
            await fetch(BASE_URL + '/api/bookings', data)
                .then(response => {
                    response.json()
                        .then(data => {
                            console.log(data);
                            Alert.alert(data["message"]);
                            goToHome();
                        });
                })
        }
        catch (error) {
            console.error(error);
        }

    }

    const goToHome = () => {
        const { routes } = navigation.getState();
        const filteredRoutes = routes.filter(route => {
            return route.name == "HomeScreen"
        })
        navigation.reset({
            index: filteredRoutes.length - 1,
            routes: filteredRoutes
        })
    }

    const validateEmailAddress = (email) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(email) === false) {
            console.log("Email is Not Correct");
            return false;
        } else {
            console.log("Email is Correct");
            return true;
        }
    }


    return (
        <Modal
            animationType={"slide"}
            transparent={true}
            visible={isVisible}
            swipeDirection={['down']}
            onSwipeComplete={() => { closeModal() }}

        // onRequestClose={() => {
        //     Alert.alert('Modal has now been closed.');
        // }}
        >
            <View style={styles.mainView}>
                <View style={styles.content}>

                    <KeyboardAwareScrollView
                        // style={{ backgroundColor: 'red' }}
                        automaticallyAdjustContentInsets={false}
                        keyboardDismissMode="interactive"
                        keyboardShouldPersistTaps="always"
                        scrollEventThrottle={100}
                        extraHeight={250}
                        resetScrollToCoords={{ x: 0, y: 0 }}
                        getTextInputRefs={() => {
                            return [
                                _emailAddressRef,
                                _phoneNumberRef
                            ];
                        }}
                    >

                        <View style={styles.modalHeader}>
                            <TouchableOpacity
                                style={styles.addButton}
                                onPress={() => { closeModal() }}>

                                <View style={styles.btnCloseModal}>
                                    <Image style={{ width: 16, height: 16 }} source={images.btnClose} />
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.profileView}>
                            <View style={styles.ratingContainer}>
                                <Text>{shop.name}</Text>
                                <View style={styles.ratingStars}>
                                    {[1, 2, 3, 4, 5].map((_, index) => {
                                        return (
                                            <Image key={index} style={{ width: 16, height: 16 }} source={images.starIcon} />
                                        )
                                    })}
                                    <Text>( 5 start )</Text>
                                </View>
                            </View>
                            <Image style={styles.profileImage} source={{ uri: shop.image }} />
                        </View>

                        <View style={styles.timeSlotContainer}>
                            <View style={styles.timeSlotsHeader}>
                                <Text>Available Time</Text>
                                <View style={styles.btnDatePicker}>
                                    <Text style={{ marginLeft: 4, color: 'white' }}>Today</Text>
                                </View>
                            </View>

                            <View style={styles.slotsContainer}>
                                {slots.map((slot, index) => {
                                    return (
                                        <TouchableOpacity
                                            disabled={!slot.isActive}
                                            key={index}
                                            onPress={() => {
                                                setSelectedSlot(slot)
                                            }}>

                                            <View
                                                style={[styles.slotView,
                                                {
                                                    marginRight: (index == 3 || index == 7) ? 0 : slotMargin,
                                                    backgroundColor: getSlotBackGroundColor(slot)[0],
                                                    borderColor: (index == 0 || index == 1 || index == 5 || index == 6) ? '#0000' : COLORS.darkBlue,
                                                }]}>
                                                <Text style={[styles.slotTitle,
                                                {
                                                    color: getSlotBackGroundColor(slot)[1],
                                                }]}>{slot.time}</Text>

                                            </View>
                                        </TouchableOpacity>
                                    )
                                })}

                            </View>

                            <View>

                                <Text style={styles.textFieldLabel}>Email Address</Text>
                                <View style={styles.txtFieldContainer}>
                                    <TextInput keyboardType="email-address" style={styles.txtEmailAddress}
                                        placeholder={"ibrahimdebbagh54@gmail.com"}
                                        onChangeText={newText => setEmail(newText)}
                                        defaultValue={email}
                                        autoCorrect={false}
                                        autoCapitalize={'none'}
                                        // height={(Platform.OS === 'android') ? 36 : 36}

                                        ref={r => {
                                            _emailAddressRef = r;
                                        }}
                                    // returnKeyType={"next"}
                                    // onSubmitEditing={event => _phoneNumber.focus()}
                                    />
                                </View>

                                <Text style={styles.textFieldLabel}>Phone Number</Text>
                                <View style={styles.txtFieldContainer}>
                                    <TextInput keyboardType='phone-pad' style={styles.txtPhoneNumber}
                                        placeholder={"+8801944100955"}
                                        onChangeText={newText => setPhoneNumber(newText)}
                                        defaultValue={phoneNumber}
                                        autoCorrect={false}
                                        autoCapitalize={'none'}
                                        // height={(Platform.OS === 'android') ? 36 : 36}

                                        ref={r => {
                                            _phoneNumberRef = r;
                                        }}
                                    // returnKeyType={"go"}
                                    />
                                </View>

                                <Text style={styles.textFieldLabel}>Appointment Date & Time</Text>
                                <Text >25 May  at  5:00 PM</Text>

                            </View>

                            <View style={styles.confirmButtonContainer}>
                                <TouchableOpacity onPress={() => handelBookingAction()}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.btnConfirm}>Confirm</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </KeyboardAwareScrollView>
                </View>
            </View>
        </Modal >
    )
}

const styles = StyleSheet.create({

    mainView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        // backgroundColor: 'red'
    },

    content: {
        width: '100%',
        height: '75%',
        backgroundColor: 'white',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,

        shadowColor: COLORS.darkGray,
        shadowOffset: {
            width: 0,
            height: -2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        // backgroundColor: 'blue'
    },

    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: normalize(16),
        // backgroundColor: 'red',
    },

    btnCloseModal: {
        height: normalize(40),
        width: 40,
        // backgroundColor: '#00000050',
        justifyContent: 'center'
    },

    profileView: {
        marginTop: normalize(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: screenMargin
    },

    ratingContainer: {
        justifyContent: 'center',
    },

    ratingStars: {
        flexDirection: 'row',
        marginTop: normalize(8),
    },

    profileImage: {
        width: normalize(62),
        height: normalize(62),
        borderRadius: normalize(31)
    },

    timeSlotContainer: {
        marginVertical: normalize(SIZES.horizontalMargin),
        marginHorizontal: screenMargin,
        // backgroundColor: 'red'

    },

    timeSlotsHeader: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },

    btnDatePicker: {
        justifyContent: 'center',
        backgroundColor: COLORS.darkBlue,
        width: 69,
        height: 23,
        borderRadius: 4
    },

    slotsContainer: {
        marginTop: normalize(22),
        flexDirection: 'row',
        flexWrap: 'wrap',

    },

    slotView: {
        width: slotWidth,
        height: normalize(30),
        marginBottom: normalize(16),
        borderRadius: 4,
        borderWidth: 1,
    },

    slotTitle: {
        flex: 1,
        textAlign: 'center',
        lineHeight: normalize(28)
    },

    textFieldLabel: {
        fontFamily: FONTS.PoppinsMedium,
        includeFontPadding: false,
        fontSize: 14,
        marginVertical: normalize(11),
    },

    txtFieldContainer: {
        backgroundColor: COLORS.cartItem,
        borderRadius: 4,
    },

    txtEmailAddress: {
        paddingHorizontal: 8,
        height: 36,
        padding: 0,
    },

    txtPhoneNumber: {
        paddingHorizontal: 8,
        height: 36,
        padding: 0,

    },


    confirmButtonContainer: {
        backgroundColor: COLORS.darkBlue,
        marginTop: normalize(20),
        marginRight: 28,
        marginLeft: 28,
        marginBottom: normalize(38),

        height: normalize(52),
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

    btnConfirm: {
        borderRadius: 26,
        padding: 12,
        flex: 1,
        textAlign: 'center',
        color: COLORS.white,
        fontFamily: FONTS.PoppinsSemiBold,
        fontSize: 18,
    },



})