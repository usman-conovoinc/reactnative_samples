import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, ScrollView, View, Image } from 'react-native'
import { Images } from '../../Resources/index.js';
import ImageGallery from "../Home/ImageGallery.js";


const HomeScreen = ({ navigation }) => {

    const [count, setCount] = useState(0)

    const add = () => {
        setCount(count + 1)
    }

    const subtract = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const DetailsView = () => {
        return (
            <View style={styles.detailsView}>
                <View style={styles.titleHeader}>
                    <Text style={styles.productTitle}>
                        Room Sofa
                    </Text>
                    <View style={styles.productCountView}>
                        <TouchableOpacity onPress={subtract}>
                            <Text style={styles.counterStyle}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.counterStyle}>{count}</Text>
                        <TouchableOpacity onPress={add}>
                            <Text style={styles.counterStyle}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.colorBadgeContrainer}>
                    {['#7993AE', '#C9A885', '#282828'].map((id, color) =>
                        <View style={[{ backgroundColor: color }, styles.colorBadge]} key={id.toString()}></View>
                    )}
                </View>
                <Text style={styles.productDescription}>
                    Drawing Room Wooden Sofa Set is solid wooden sofa set which you can contrast the cushion of any color. The good sight caused ue to the furniture help us relax for a longer time.
                </Text>
                <View style={styles.productPriceContainer}>
                    <Text style={styles.productPrice}>
                        ¥2500
                    </Text>
                    <TouchableOpacity style={styles.addToCart}>
                        <Text style={styles.addToCartTitle}>Add to cart </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.mainContainerView}>
            <ScrollView style={styles.scrollViewStyles}
                contentContainerStyle={styles.contentContainerStyle}>
                <View style={styles.contentContainer}>
                    {/* <Image source={imageArray[0]} style={styles.productImage} /> */}
                    {<ImageGallery />}
                    {<DetailsView />}
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.backButtonContainer}>
                <Image tintColor='black' source={Images.nextArrowIcon} style={styles.backButton} />
            </TouchableOpacity>

        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({

    mainContainerView: {
        flex: 1,
        position: 'relative',
    },
    scrollViewStyles: {
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    contentContainerStyle: {
        width: '100%',
        height: '100%',
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    detailsView: {
        margin: 20,
        // backgroundColor: '#00000030',
    },
    titleHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    productCountView: {
        backgroundColor: '#E7E7E7',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: 100,
        borderRadius: 5
    },
    productTitle: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    counterStyle: {
        fontSize: 20,
        fontWeight: '300',
        minWidth: 30,
        textAlign: 'center'
    },
    colorBadgeContrainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 10,
    },
    colorBadge: {
        marginRight: 3,
        width: 16,
        height: 16,
        borderRadius: 8
    },
    productDescription: {
        marginTop: 10,
        fontSize: 14,
        fontWeight: '300',
        lineHeight: 25
    },
    productPriceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        // backgroundColor: 'red',
        alignItems: 'center'
    },
    productPrice: {
        fontSize: 24,
        fontWeight: '400',
    },
    addToCart: {
        backgroundColor: '#7993AE',
        borderRadius: 4
    },
    addToCartTitle: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: '#fff',
        fontSize: 16,
        fontWeight: '400'
    },
    backButtonContainer: {
        margin: 10,
        // backgroundColor: 'orange',
        marginVertical: 60,
        width: 30,
        height: 30,
        justifyContent: 'center'
    },
    backButton: {
        transform: 'rotate(180deg)',
    },
})