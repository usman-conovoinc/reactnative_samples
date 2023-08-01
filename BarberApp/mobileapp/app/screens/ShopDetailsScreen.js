import React, { useState, useEffect } from 'react';
import { Alert, Platform } from "react-native"

import {
    FlatList, Image, Pressable, SafeAreaView,
    StyleSheet, Text,
    TouchableOpacity, View
} from 'react-native';

import ServiceCell from '../components/ServiceCell.js';

import { COLORS, FONTS, SIZES, images, BASE_URL } from '../constents';

export default ShopDetailsScreen = ({ route, navigation }) => {
    const { item } = route.params;
    const [categories, setCategories] = useState([]);
    const [selectedServices, setSelectedServices] = useState([]);
    const [showMore, setShowMore] = useState(false);

    // let shopDetails = `${item.description.slice(0, 90)}`

    // console.log(item.description);

    const getServiceCategoriesForShop = async () => {

        const url = BASE_URL + '/api/services/servicesByCategories/' + item.id
        try {
            const response = await fetch(url);
            const json = await response.json();
            setCategories(json.data);
        } catch (error) {
            console.error(error);
        } finally {
        }
    }

    useEffect(() => {
        if (item != null) {
            getServiceCategoriesForShop();
        }
    }, []);

    const handleChange = (service) => {
        selectService(service)
    };

    const btnProceedToCheckOut = async () => {

        let services = []
        const promises = categories.map(async cat => {
            services = services.concat(cat.services);
        })

        const _ = await Promise.all(promises)
        let filteredServices = services.filter(item => selectedServices.includes(item.id))
        if (filteredServices.length > 0) {
            navigation.navigate('BookingScreen', { cartItems: filteredServices, shop: item })
        } else {
            Alert.alert("Please select at least one service.")
        }
    };

    function selectService(service) {

        const key = service.id
        const index = selectedServices.indexOf(key)

        if (index > -1) {
            const services = selectedServices.filter(item => !key.includes(item))
            setSelectedServices(services);
        } else {
            // console.log(key)
            setSelectedServices(prevState => [...prevState, key])
            // console.log(selectedServices)
        }
    };

    function isSelectedServices(service) {
        const key = service.id
        const index = selectedServices.indexOf(key)
        return (index > -1)
    };

    // const isShowMore = () => {
    //     setShowMore(!showMore)
    //     if (item.description.length > 90) {
    //         shopDetails = (showMore == false) ? `${item.description.slice(0, 90)}` : item.description
    //     } else {
    //         shopDetails = item.description
    //     }
    // };

    return (
        <View style={styles.mainView}>
            <View style={styles.contentView}>
                {/* Header View */}
                <View>
                    <Image style={styles.imageView}
                        resizeMode='cover' source={{ uri: item.image }} />

                    <View style={styles.postContentContainer}>
                        {item?.description?.length > 90 ? (
                            showMore ? (
                                <TouchableOpacity onPress={() => setShowMore(!showMore)}>
                                    <Text style={styles.descriptionText}>{item.description} <Text style={styles.seeMore}>Show less</Text>
                                    </Text>

                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity onPress={() => setShowMore(!showMore)}>
                                    <Text style={styles.descriptionText}>
                                        {`${item.description.slice(0, 90)}`}... <Text style={styles.seeMore}>Show more</Text>
                                    </Text>
                                </TouchableOpacity>
                            )
                        ) : (
                            <Text style={styles.descriptionText}>{item.description}</Text>
                        )}
                    </View>

                </View>
                {/* Services List */}
                <FlatList style={{ flex: 1 }}
                    showsVerticalScrollIndicator={false}
                    data={categories}
                    keyExtractor={(item) => item.category.id}
                    renderItem={({ item }) => (
                        <View style={styles.categoryContainer}>
                            <Text style={styles.categoryLabel}>{item.category.name}</Text>
                            {item.services.map((service, index) => {
                                const isSelected = isSelectedServices(service)

                                return <ServiceCell key={index}
                                    navigation={navigation}
                                    service={service}
                                    isSelected={isSelected}
                                    handleChange={handleChange} />
                            })}
                        </View>
                    )}
                />

                {/* Proceed Button */}
                <View style={styles.proceedButtonContainer}>
                    <TouchableOpacity onPress={btnProceedToCheckOut}>
                        <Text style={styles.btnProceed}>PROCEED</Text>
                    </TouchableOpacity>
                </View>

                {
                    (Platform.OS != 'android') ?
                        <SafeAreaView position='absolute'>
                            <View style={styles.btnBack}>
                                <TouchableOpacity onPress={() => navigation.goBack()}>
                                    <Image style={styles.btnBackIcon} source={images.btnBackIcon} />
                                </TouchableOpacity>
                            </View>
                        </SafeAreaView>
                        : <></>

                }
            </View>

        </View >
    );
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
    contentView: {
        flex: 1,
    },
    imageView: {
        width: SIZES.width,
        height: SIZES.width * 0.6214285714,
    },

    postContentContainer: {
        // borderWidth: 1,
        // borderColor: 'red',
        flexDirection: 'column',
        marginVertical: 18,
    },

    descriptionText: {
        color: COLORS.darkGray,
        paddingHorizontal: 16,
        fontFamily: FONTS.PoppinsRegular,
        fontSize: 13,
        lineHeight: 15,
    },

    seeMore: {
        paddingHorizontal: 15,
        color: COLORS.darkBlue,
        fontStyle: 'italic',
        textDecorationLine: 'underline',
        fontFamily: FONTS.PoppinsRegular,
        fontSize: 13,
        flex: 1,
    },




    // description: {
    // marginVertical: 18,
    // color: COLORS.darkGray,
    // paddingHorizontal: 16,
    // fontFamily: FONTS.PoppinsRegular,
    // fontSize: 13,
    // lineHeight: 15,
    // // backgroundColor: '#000',
    // },
    btnBack: {
        marginLeft: SIZES.horizontalMargin
    },
    btnBackIcon: {
        height: 42,
        width: 42,
    },
    categoryContainer: {
        marginHorizontal: SIZES.horizontalMargin,
        marginBottom: 10,
    },
    categoryLabel: {
        fontFamily: FONTS.PoppinsMedium,
        fontSize: 20,
        color: COLORS.darkBlue,
    },
    serviceView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: COLORS.white,
        paddingVertical: 10,
        borderRadius: 10,
        borderColor: COLORS.darkBlue,
        borderWidth: 0.5,

        shadowColor: COLORS.lightGray,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    checkbox: {
        height: 20,
        width: 20,
        marginLeft: 16,
        // backgroundColor: '#000'
    },
    serviceText: {
        width: '75%',
        marginLeft: 8,
        marginRight: 5,
        flexShrink: 1,
        fontFamily: FONTS.PoppinsMedium,
        fontSize: 16,
        color: COLORS.darkGray
    },
    servicePrice: {
        marginRight: 16,
        fontFamily: FONTS.PoppinsRegular,
        fontSize: 16,
        color: COLORS.darkGray
    },

    proceedButtonContainer: {
        backgroundColor: COLORS.darkBlue,
        marginTop: 10,
        marginRight: 28,
        marginLeft: 28,
        marginBottom: 38,

        height: 52,
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

    btnProceed: {
        padding: 12,
        textAlign: 'center',
        color: COLORS.white,
        fontFamily: FONTS.PoppinsSemiBold,
        fontSize: 18
    }

})
