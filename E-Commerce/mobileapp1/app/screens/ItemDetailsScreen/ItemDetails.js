import React, { useState, useRef } from 'react';
import {
    StyleSheet, View, FlatList, Text, Image, TouchableOpacity, SafeAreaView, Animated
} from 'react-native';
import { images, FONTS, SIZES, COLORS } from '../../constents'
import { DetailsScreenHeader } from '../../components';
import ItemCell from '../../components/ItemCell.js';
import { getStatusBarHeight } from '../../utility/UtilityFunctions.js'

export default ItemDetails = ({ route, navigation }) => {
    // let imageRef = useRef(null)
    const { item } = route.params;
    const [offset, SetOffset] = useState(0);
    const [scrollDirection, SetScrollDirection] = useState('');
    const scrollA = useRef(new Animated.Value(0)).current;

    const items = [
        { "id": 1, "image": images.item1, imageSrc: images.item1Image, "description": "Wooden bedside table featuring a raised desi...", "price": "$150.00" },
        { "id": 2, "image": images.item2, imageSrc: images.item1Image, "description": "Chair made of ash wood sourced from responsib...", "price": "$149.99" },
        { "id": 3, "image": images.item3, imageSrc: images.item1Image, "description": "Square bedside table with legs, a rattan shelf and a...", "price": "$140.25" },
        { "id": 4, "image": images.item4, imageSrc: images.item1Image, "description": "Dark wood side board with a faceted drawer", "price": "$450.00" },
        { "id": 5, "image": images.item5, imageSrc: images.item1Image, "description": "Mango wood chair with a woven design", "price": "$350.00" },
        { "id": 6, "image": images.item6, imageSrc: images.item1Image, "description": "Square bedside table with legs, a rattan shelf and ...", "price": "$151.00" },
    ]


    const Header = () => {
        return (

            <Animated.View style={[styles.header(scrollA), {

                height: Platform.OS === 'ios' ? ((getStatusBarHeight() > 20) ? 90 : 65) : 44,
            }]}>
                <View style={styles.headerContentContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Animated.View style={styles.btnContainer('back', scrollA)}>
                            <Image
                                style={styles.headerButtons}
                                source={images.btnBackBG} />
                        </Animated.View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Animated.View style={styles.btnContainer('fav', scrollA)}>
                            <Image
                                style={styles.headerButtons}
                                source={images.btnFavoriteBG} />
                        </Animated.View>

                    </TouchableOpacity>
                </View>
            </Animated.View>
        )
    }


    return (
        <View style={styles.mainView}>
            <Header />

            <Animated.FlatList
                showsVerticalScrollIndicator={false}
                style={styles.itemList}
                keyExtractor={item => item.id.toString()}
                data={items}
                showsHorizontalScrollIndicator={false}
                horizontal={false}
                numColumns={2}
                renderItem={(item) => ItemCell(item, {
                    lastIndex: items.length,
                    listHeading: "you might also like",
                    navigation: navigation,
                })}
                onScroll={
                    Animated.event(
                        [{
                            nativeEvent: {
                                contentOffset: { y: scrollA }
                            }
                        }],
                        { useNativeDriver: false },
                    )
                }
                scrollEventThrottle={16}

                ListHeaderComponent={DetailsScreenHeader({
                    item: item,
                    navigation: navigation,
                    offset: offset,
                    scrollDirection: scrollDirection,
                    scrollA: scrollA
                })}

            >
            </Animated.FlatList>


        </View>
    );
}

const styles = StyleSheet.create({

    mainView: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    itemList: {
        flex: 1,
    },

    header: scrollA => ({
        backgroundColor: scrollA.interpolate({
            inputRange: [0, 1],
            outputRange: ["transparent", COLORS.editableColorSet.one],
        }),

        width: '100%',
        justifyContent: 'flex-end',
        position: 'absolute',
        top: 0,
        zIndex: 100
    }),

    headerContentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        bottom: 8
    },

    headerButtons: {
        height: 36,
        width: 36,
    },

    btnContainer: (type, scrollA) => ({
        height: 36,
        width: 36,
        borderRadius: 18,
        marginRight: type == 'fav' ? SIZES.appMargin : 0,
        marginLeft: type != 'fav' ? SIZES.appMargin : 0,

        backgroundColor: scrollA.interpolate({
            inputRange: [0, 0],
            outputRange: [COLORS.editableColorSet.one, "transparent"],
        })
    })



})