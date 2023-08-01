import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { COLORS, FONTS, images, SIZES } from "../../constents";
import ItemCell from '../../components/ItemCell.js';

/*
const data = [
    { "id": 1, "image": images.prod1, "description": "Wooden bedside table featuring a raised desi...", "price": "$150.00" },
    { "id": 2, "image": images.prod2, "description": "Chair made of ash wood sourced from responsib...", "price": "$149.99" },
    { "id": 3, "image": images.prod3, "description": "Square bedside table with legs, a rattan shelf and a...", "price": "$140.25" },
    { "id": 4, "image": images.prod4, "description": "Dark wood side board with a faceted drawer", "price": "$450.00" },
    { "id": 5, "image": images.prod1, "description": "Mango wood chair with a woven design", "price": "$350.00" },
    { "id": 6, "image": images.prod1, "description": "Square bedside table with legs, a rattan shelf and ...", "price": "$151.00" },
]
*/

export default function HomeProductView(props) {
    return (
        <View style={styles.mainView}>
            <Text style={styles.categoryTitle}>Popular</Text>
            <View>
                <FlatList
                    style={styles.categoryList}
                    data={data}
                    extraData={data.length}
                    keyExtractor={item => item.id.toString()}
                    showsHorizontalScrollIndicator={false}
                    horizontal={false}
                    numColumns={2}
                    renderItem={(item) => ItemCell(item, { lastIndex: data.length })}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainView: {
        // backgroundColor: COLORS.editableColorSet.three,
    },
    categoryTitle: {
        paddingVertical: SIZES.horizontalMargin,
        height: 60,
        marginLeft: SIZES.horizontalMargin,
        fontFamily: FONTS.PoppinsSemiBold,
        fontSize: 24,
        lineHeight: 32
    },

    categoryList: {
        // backgroundColor: '#000'
    }


});