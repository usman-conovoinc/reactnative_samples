import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS, images, SIZES } from "../../constents";
import CategoryCell from '../../components/CategoryCell.js';

const data = [
    { "id": 1, "image": images.c1, title: "best of 2020" },
    { "id": 2, "image": images.c2, title: "the golden hour" },
    { "id": 3, "image": images.c3, title: "lovely kitchen" },
    { "id": 4, "image": images.c4, title: "summer choice" }]

export default HomeCategoryView = ({ navigation }) => {

    const showCategories = () => {
        navigation.navigate('CategoriesScreen')
    }

    return (
        <View style={styles.mainView}>
            <TouchableOpacity onPress={() => showCategories()}>
                <Text style={styles.categoryTitle}>Categories</Text>
            </TouchableOpacity>
            <View>
                <FlatList
                    style={styles.categoryList}
                    data={data}
                    renderItem={(item) => CategoryCell(item, { lastIndex: data.length })}
                    keyExtractor={item => item.id.toString()}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                />
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    mainView: {
        // backgroundColor: COLORS.editableColorSet.three,
    },
    categoryTitle: {
        paddingBottom: SIZES.appMargin,
        // height: 60,
        marginLeft: SIZES.appMargin,
        fontFamily: FONTS.PoppinsSemiBold,
        fontSize: 24,
        lineHeight: 32
    },

    categoryList: {
        // backgroundColor: '#000'
    }


});