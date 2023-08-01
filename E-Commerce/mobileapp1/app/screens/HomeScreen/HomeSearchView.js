import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native"
import { FONTS, COLORS, SIZES, images } from "../../constents";

export default HomeSearchView = ({ getSearchText }) => {

    return (
        <View style={styles.searchView}>
            <Image
                source={images.searchIcon}
                style={styles.searchIcon} />

            <TextInput style={styles.txtSearch}
                underlineColorAndroid="transparent"
                placeholder="Search"
                placeholderTextColor={COLORS.editableColorSet.five}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={getSearchText} />

        </View>
    )
}

const styles = StyleSheet.create({
    searchView: {
        marginVertical: SIZES.appMargin,
        marginHorizontal: SIZES.appMargin,
        backgroundColor: COLORS.editableColorSet.one,
        height: 60,
        borderRadius: 8,
        flexDirection: 'row'
    },
    searchIcon: {
        width: 24,
        height: 24,
        marginLeft: 16,
        marginVertical: 20,
    },
    txtSearch: {
        paddingHorizontal: 16,
        flex: 1,
        fontFamily: FONTS.PoppinsRegular,
        fontSize: 16
    },
})