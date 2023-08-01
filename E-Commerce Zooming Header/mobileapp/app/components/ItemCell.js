import React from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { SIZES, FONTS, images, COLORS } from '../constents';

export default ItemCell = ({ item, index }, { navigation, listHeading }) => {

    const getTopMarginFor = (index) => {
        // (index == 0 || index == 1 || index == 4 || index == 5) ? 100 : SIZES.horizontalMargin,
        switch (index) {
            case 0:
                return 65;
            case 1:
                return 65;
            case 4:
                return 100;
            case 5:
                return 100;
            default:
                return SIZES.appMargin;
        }
    }

    const showDetailsScreen = () => {
        navigation.push('ItemDetails', {
            item: item
        });
    }

    return (<>
        {(index == 4) &&
            <View style={styles.helpView}>
                <View style={styles.messageView}>
                    <View style={styles.contentView}>
                        <View>
                            <Text style={styles.helpMessageTitle}>Hard to decide?</Text>
                            <Text style={styles.helpMessage}>We are ready for help</Text>
                        </View>
                        <>
                            <View style={styles.helpButton}>
                                <Text style={styles.btnHelpText}>Need help</Text>
                            </View>
                        </>
                    </View>
                </View>
            </View>
        }
        {(index == 0) &&
            <Text style={styles.categoryTitle}>
                {listHeading}
            </Text>
        }

        <View style={[styles.mainView, {
            marginTop: getTopMarginFor(index),
            marginRight: (index % 2 == 1) ? SIZES.appMargin : 0,
        }]}>
            <TouchableOpacity onPress={() => showDetailsScreen()}>
                <Image
                    // resizeMode={'contain'}
                    source={item.image}
                    style={[
                        styles.imageView,
                        //     { width: width }
                    ]}

                />
                <Text style={styles.price}>{item.price}</Text>
                <Text
                    numberOfLines={2}
                    style={styles.description}>
                    {item.description}
                </Text>
            </TouchableOpacity>
        </View>
    </>
    );
}

const styles = StyleSheet.create({

    categoryTitle: {
        position: 'absolute',
        width: "100%",
        top: 0,
        paddingVertical: SIZES.appMargin,
        height: 60,
        marginLeft: SIZES.appMargin,
        fontFamily: FONTS.PoppinsSemiBold,
        fontSize: 24,
        lineHeight: 32
    },

    mainView: {
        marginHorizontal: SIZES.appMargin,
        flex: 1
    },
    imageView: {
        width: "100%",
        height: 200,
        borderRadius: 8,
    },
    price: {
        marginTop: 8,
        fontFamily: FONTS.PoppinsMedium,
        fontSize: 16,
        color: COLORS.black
    },
    description: {
        marginTop: 4,
        fontFamily: FONTS.PoppinsRegular,
        fontSize: 12,
        color: COLORS.editableColorSet.five
    },
    helpView: {
        position: 'absolute',
        width: "100%",
        top: 0
    },
    messageView: {
        borderRadius: 8,
        marginHorizontal: SIZES.appMargin,
        marginVertical: SIZES.appMargin,
        backgroundColor: COLORS.editableColorSet.one,
        height: 64,
        // flex: 1
    },

    contentView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: SIZES.appMargin,
        marginVertical: 8,
    },

    helpMessageTitle: {
        fontFamily: FONTS.PoppinsRegular,
        fontSize: 16,
        color: COLORS.black
    },

    helpMessage: {
        fontFamily: FONTS.PoppinsRegular,
        fontSize: 16,
        color: COLORS.editableColorSet.four
    },


    helpButton: {
        backgroundColor: COLORS.mainTheme.four,
        height: 36,
        width: 104,
        borderRadius: 8,

    },
    btnHelpText: {
        fontFamily: FONTS.PoppinsMedium,
        fontSize: 14,
        paddingHorizontal: 16,
        paddingVertical: 8
    }


})