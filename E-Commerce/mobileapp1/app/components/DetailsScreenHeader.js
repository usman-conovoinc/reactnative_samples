import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import { images, FONTS, SIZES, COLORS } from '../constents'
import SwipeUpDownModal from 'react-native-swipe-modal-up-down';

import { db } from '../config/firebaseConfig.js';

let itemsRef = db.ref('/items');


export default DetailsScreenHeader = ({ item, navigation, scrollA }) => {

    let [ShowComment, setShowModelComment] = useState(false);
    let [animateModal, setanimateModal] = useState(false);
    let modalMarginTop = Dimensions.get('window').height - 506


    const ratio = () => {
        const image = Image.resolveAssetSource(item.image)
        return image.width / image.height
    }

    const IMAGE_HEIGHT = Dimensions.get('window').width / ratio()

    console.log(IMAGE_HEIGHT)

    return (
        <View style={styles.mainView}>

            <Animated.Image
                resizeMode='cover'
                style={[styles.backgroundImage(scrollA, IMAGE_HEIGHT), {
                    // aspectRatio: ratio(),
                    width: '100%',//(offset > -3 || scrollDirection == 'down') ? '100%' : (Math.abs(offset / 10) + 100 + ratio()).toString() + '%'
                }]} source={item.image}>
            </Animated.Image>

            <View style={styles.detailsView}>
                <Text style={styles.lblPrice}>
                    $150.00
                </Text>
                <Text style={styles.lblDetails}>
                    Wooden bedside table featuring a raised design on the door
                </Text>
                <TouchableOpacity onPress={() => setShowModelComment(true)}>

                    <View style={styles.btnAddToCart}>
                        <Text style={styles.btnAddToCartTitle}>
                            Add to bag
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.discountViewContainer}>
                <View style={styles.discountView}>
                    <View>
                        <Image style={styles.discountIcon} source={images.discountIcon} />
                    </View>
                    <View style={styles.discountTitles}>
                        <Text style={styles.btnAddToCartTitle}>
                            Discount for you
                        </Text>
                        <Text style={styles.btnAddToCartTitle}>
                            Use promocode ULMO
                        </Text>
                    </View>
                    <View style={styles.btnCopy}>
                        <Text>Copy</Text>
                    </View>
                </View>
            </View>

            <View style={styles.infoContainer}>
                <Text>Product information</Text>
                <Image
                    style={styles.chevronRight}
                    source={images.chevronRight} />
            </View>

            <View style={styles.infoContainer}>
                <Text>Reviews</Text>
                <Text>32</Text>
            </View>

            <View style={styles.infoContainer}>
                <Text>Questions and answers</Text>
                <Text>5</Text>
            </View>

            <SwipeUpDownModal
                modalVisible={ShowComment}
                PressToanimate={animateModal}
                //if you don't pass HeaderContent you should pass marginTop in view of ContentModel to Make modal swipeable

                ContentModal={
                    <View style={[styles.containerContent, {
                        marginTop: modalMarginTop
                    }]}>

                        <View style={{ height: 16, width: '100%' }}></View>
                        <View style={{ padding: 16, width: '100%' }}>
                            <Text style={styles.modalHeader}>
                                sort by
                            </Text>

                            <Text style={styles.modalSortOption}>
                                Price: high to low
                            </Text>
                            <Text style={styles.modalSortOption}>
                                Price: low to high
                            </Text>
                            <Text style={styles.modalSortOption}>
                                New first
                            </Text>
                            <Text style={styles.modalSortOption}>
                                Popular first
                            </Text>

                            <TouchableOpacity onPress={() => {
                                setanimateModal(true);
                            }}>
                                <View style={styles.btnCancel}>
                                    <Text style={styles.btnCancelText}>
                                        Cancel
                                    </Text>
                                </View>
                            </TouchableOpacity>

                        </View>

                        {/* <TouchableOpacity onPress={() => {
                                setanimateModal(true);
                            }}> */}
                        {/* </TouchableOpacity> */}
                    </View>
                }

                ContentModalStyle={styles.Modal}
                onClose={() => {
                    setShowModelComment(false);
                    setanimateModal(false);
                }}
            />

        </View >
    );
}

const styles = StyleSheet.create({

    mainView: {
        flex: 1,
        backgroundColor: COLORS.white,
    },

    //  =========================================================


    backgroundImage: (scrollA, IMAGE_HEIGHT) => ({
        height: IMAGE_HEIGHT,
        transform: [
            {
                translateY: scrollA.interpolate({
                    inputRange: [-IMAGE_HEIGHT, 0, IMAGE_HEIGHT, IMAGE_HEIGHT + 1],
                    outputRange: [-IMAGE_HEIGHT / 2, 0, IMAGE_HEIGHT * 0.75, IMAGE_HEIGHT * 0.75],
                }),
            },
            {
                scale: scrollA.interpolate({
                    inputRange: [-IMAGE_HEIGHT, 0, IMAGE_HEIGHT, IMAGE_HEIGHT + 1],
                    outputRange: [2, 1, 1, 1],
                }),
            },
        ],
    }),

    detailsView: {
        paddingHorizontal: SIZES.appMargin,
        paddingVertical: SIZES.appMargin,
        backgroundColor: COLORS.editableColorSet.one,
    },

    lblPrice: {
        fontFamily: FONTS.PoppinsSemiBold,
        fontSize: 24
    },

    lblDetails: {
        fontFamily: FONTS.PoppinsRegular,
        fontSize: 16,
        color: COLORS.editableColorSet.five,
        marginBottom: SIZES.appMargin,

    },

    btnAddToCart: {
        height: 64,
        backgroundColor: COLORS.mainTheme.four,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
        borderRadius: 8
    },

    btnAddToCartTitle: {
        fontFamily: FONTS.PoppinsRegular,
        fontSize: 16,
        color: COLORS.black
    },

    discountViewContainer: {
        backgroundColor: COLORS.white
    },

    discountView: {
        height: 64,
        marginHorizontal: SIZES.appMargin,
        marginVertical: SIZES.appMargin,
        backgroundColor: COLORS.editableColorSet.one,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 8,
        alignItems: 'center',
    },

    discountIcon: {
        marginHorizontal: SIZES.appMargin,
        height: 24,
        width: 24,
    },

    discountTitles: {

    },

    btnCopy: {
        height: 40,
        width: 70,
        backgroundColor: COLORS.mainTheme.four,
        marginHorizontal: SIZES.appMargin,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },

    infoContainer: {
        height: 64,
        paddingHorizontal: SIZES.appMargin,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.white

    },

    chevronRight: {
        height: 24,
        width: 24
    },


    //  =========================================================


    Modal: {
        backgroundColor: '#00525205',
        marginTop: 0,
    },

    containerContent: {
        // flex: 1,
        height: 506,
        backgroundColor: COLORS.white,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },

    modalHeader: {
        fontFamily: FONTS.PoppinsSemiBold,
        fontSize: 32,
        padding: 16, width: '100%'
    },

    modalSortOption: {
        fontFamily: FONTS.PoppinsRegular,
        fontSize: 16,
        padding: 16, width: '100%'
    },

    btnCancel: {
        marginTop: 16,
        height: 64,
        width: '100%',
        backgroundColor: COLORS.editableColorSet.one,
        justifyContent: 'center',
        borderRadius: 8,
        // alignItems: 'center',
    },

    btnCancelText: {
        textAlign: 'center',
    }






})
