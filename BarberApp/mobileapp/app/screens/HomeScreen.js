import React, { useState, useEffect } from 'react';
import {
    View, Text, Image, TextInput, SafeAreaView, StyleSheet, FlatList, Platform, TouchableOpacity
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import DealsView from '../components/DealsView.js';
import PopularShopsView from '../components/PopularShopsView.js';
import PopularArtists from '../components/PopularArtists.js';
import ShopView from '../components/ShopView.js';

import { COLORS, FONTS, SIZES, images, USER } from '../constents';

const showViewAtIndex = (index, navigation) => {
    // console.log('navigation:', navigation)
    switch (index) {
        case 1:
            return <DealsView navigation={navigation} />
        case 2:
            return <PopularShopsView navigation={navigation} />
        case 3:
            return <PopularArtists navigation={navigation} />
        case 4:
            return <ShopView navigation={navigation} />
        default:
            return null
    }
}

export default HomeScreen = ({ navigation }) => {
    const sections = [1, 2, 3, 4];

    // useEffect(() => {

    //     const { routes } = navigation.getState();

    //     console.log(routes);

    //     // const filteredRoutes = routes.filter(route => {
    //     //     return route.name == "HomeScreen"
    //     // })
    //     // navigation.reset({
    //     //     index: filteredRoutes.length - 1,
    //     //     routes: filteredRoutes
    //     // })

    // })



    return (
        <View style={styles.mainView}>
            <SafeAreaView>
                <HomeScreenHeader navigation={navigation} />
            </SafeAreaView>

            <View style={styles.contentView}>
                <SafeAreaView>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={sections}
                        initialNumToRender={4}
                        keyExtractor={(item) => item}
                        renderItem={({ item, index }) => (
                            showViewAtIndex(item, navigation)
                        )}
                    />
                </SafeAreaView>

            </View>

        </View>
    );
};

export async function removeItem(key) {
    try {
        return new Promise(async resolve => {
            await AsyncStorage.removeItem(key);
            resolve();
        });
    } catch (e) {
        console.log(e)
    }
}

function HomeScreenHeader({ navigation }) {
    const [text, setText] = useState('');

    return (
        <View style={styles.header}>

            <TouchableOpacity onPress={() => {
                (async () => await removeItem('user_id'))();
                navigation.replace('Auth');
            }
            }>
                <Image style={styles.logoutImage} source={images.logout} />
            </TouchableOpacity>

            {/* Search View */}
            <View style={styles.searchView}>
                <TextInput
                    value={text}
                    placeholder="Search here"
                    onChangeText={setText}
                    style={styles.searchInputField}
                />


                <Image style={styles.searchIcon} source={images.searchIcon} />
            </View>

            {/* Profile Image */}
            <TouchableOpacity onPress={() =>
                navigation.navigate('UserBookingsScreen')
            }>
                <Image style={styles.profileImage} source={USER.image} />
            </TouchableOpacity>


        </View >
    );
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    header: {
        marginTop: 10, //Platform.OS === 'ios' ? 0 : 10,
        height: 48,
        paddingHorizontal: SIZES.horizontalMargin,
        flexDirection: 'row',
        // backgroundColor: COLORS.darkBlue,
        alignItems: "center"
    },
    searchView: {
        flex: 1,
        backgroundColor: '#fff',
        height: 38,
        marginRight: 16,
        marginLeft: 16,
        alignSelf: 'center',
        flexDirection: 'row',
        borderRadius: 20,
        borderColor: COLORS.darkBlue,
        borderWidth: 1,
    },
    searchInputField: {
        flex: 1,
        marginLeft: SIZES.horizontalMargin,
        alignSelf: 'center',
        fontFamily: FONTS.PoppinsRegular,
        fontSize: 14,
        color: COLORS.lightBlue,
        // backgroundColor: '#000',
        paddingVertical: -10,
    },
    searchIcon: {
        height: 18,
        width: 18,
        alignSelf: 'center',
        marginRight: 8
    },
    profileImage: {
        height: 48,
        width: 48
    },

    logoutImage: {
        height: 30,
        width: 30,
        flexDirection: 'row',
    },
    // Content View
    contentView: {
        flex: 1,
        marginTop: 20,
    },

})