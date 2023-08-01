import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView, Dimensions } from "react-native";
import { FONTS, SIZES, COLORS, images } from '../../constents';
import HomeHeaderView from './HomeHeaderView.js'
import HomeSearchView from './HomeSearchView.js'
import HomeCategoryView from "./HomeCategoryView.js";
import ItemCell from "../../components/ItemCell.js";

const data = [
    { "id": 1, "image": images.item1, imageSrc: images.item1Image, "description": "Wooden bedside table featuring a raised desi...", "price": "$150.00" },
    { "id": 2, "image": images.item2, imageSrc: images.item1Image, "description": "Chair made of ash wood sourced from responsib...", "price": "$149.99" },
    { "id": 3, "image": images.item3, imageSrc: images.item1Image, "description": "Square bedside table with legs, a rattan shelf and a...", "price": "$140.25" },
    { "id": 4, "image": images.item4, imageSrc: images.item1Image, "description": "Dark wood side board with a faceted drawer", "price": "$450.00" },
    { "id": 5, "image": images.item5, imageSrc: images.item1Image, "description": "Mango wood chair with a woven design", "price": "$350.00" },
    { "id": 6, "image": images.item6, imageSrc: images.item1Image, "description": "Square bedside table with legs, a rattan shelf and ...", "price": "$151.00" },
]

export default HomeScreen = ({ navigation }) => {

    const [searchText, setSearchText] = useState("");

    const CategoryView = () => {
        return (
            <View style={styles.categoryView}>
                <Text>Categories</Text>
            </View>
        )
    }

    const getSearchText = (text) => {
        setSearchText(text)
    }

    const sections = [1, 2]

    const itemWidth = (Dimensions.white * 43.7333333333) / 100

    return (
        <View style={styles.mainView}>
            <SafeAreaView>
                <HomeHeaderView isHome={true} navigation={navigation} />
                <HomeSearchView getSearchText={getSearchText} />
            </SafeAreaView>

            <FlatList
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
                style={styles.categoryList}
                data={data}
                extraData={data.length}
                showsHorizontalScrollIndicator={false}
                horizontal={false}
                numColumns={2}
                renderItem={(item) => ItemCell(item, {
                    listHeading: "Popular",
                    navigation: navigation
                })}
                ListHeaderComponent={HomeCategoryView({ navigation: navigation })}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: COLORS.white,
    },

    categoryView: {
        marginHorizontal: SIZES.appMargin,
        backgroundColor: COLORS.black,
        height: 60,
    },

});