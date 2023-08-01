import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FONTS, COLORS, images, SIZES } from "../../constents";
import { getStatusBarHeight } from '../../utility/UtilityFunctions.js'


export default HomeHeaderView = ({ isHome, navigation }) => {

    console.log(getStatusBarHeight())

    return (
        <View style={styles.headerView}>

            <View style={[styles.headerViewContent, {
                justifyContent: (isHome == true) ? 'space-between' : 'center'
            }]}>

                {(isHome == false) &&
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                            source={images.btnBackEmpty}
                            style={styles.btnBackEmpty}
                        />
                    </TouchableOpacity>
                }

                <Text style={[styles.appTitle, {
                    fontSize: (isHome == true) ? 32 : 16,
                    fontFamily: (isHome == true) ? FONTS.PoppinsSemiBold : FONTS.PoppinsMedium,

                }]}>ulmo</Text>
                {(isHome == false) &&
                    <View style={styles.btnBackEmpty}></View>
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerView: {
        height: 44 //+ getStatusBarHeight(),
        // paddingTop: getStatusBarHeight()
    },

    headerViewContent: {
        paddingHorizontal: SIZES.appMargin,
        flexDirection: 'row',
        alignItems: 'center',
    },

    appTitle: {
        lineHeight: 42,
        color: COLORS.black,
        textAlign: 'center',
        marginTop: 8,
        flex: 1,

    },
    btnBackEmpty: {
        height: 24,
        width: 24,
        marginTop: 8,
    }
})