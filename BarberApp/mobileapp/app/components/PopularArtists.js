import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS, images, SIZES, BASE_URL } from '../constents';

export default PopularArtists = () => {

    const [barbers, setBarbers] = useState([]);

    const getPopularBarbers = async () => {
        try {
            const response = await fetch(BASE_URL + '/api/barbers/popular?count=0');
            const json = await response.json();
            // console.log(json);
            setBarbers(json.data);
        } catch (error) {
            console.error(error);
        } finally {
        }
    }

    useEffect(() => {
        getPopularBarbers();
    }, []);


    return (
        <View style={styles.mainView}>

            <View style={styles.titleAndSeeAllContainer}>
                <Text style={styles.title}>Popular Artist</Text>
                <TouchableOpacity>
                    <Text style={styles.btnSeeAll}>See All</Text>
                </TouchableOpacity>
            </View>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {barbers.map((item, index) => {
                    return (
                        <TouchableOpacity key={index}>
                            <View style={[styles.contentContainer, {
                                marginLeft: (index == 0 || index == barbers.length - 1) ? SIZES.horizontalMargin : 11,
                                marginRight: (index == barbers.length - 1) ? SIZES.horizontalMargin : 11

                            }]}>
                                <Image resizeMode='cover'
                                    style={styles.imageView} source={{ uri: item.image }} />
                                <Text style={styles.artistName}>{item.name}</Text>

                            </View>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    mainView: {
        paddingVertical: 16,
    },

    titleAndSeeAllContainer: {
        marginHorizontal: SIZES.horizontalMargin,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btnSeeAll: {
        fontFamily: FONTS.PoppinsRegular,
        fontSize: 12,
        color: COLORS.lightGray,

    },
    title: {
        fontFamily: FONTS.PoppinsMedium,
        fontSize: 14,
        color: COLORS.darkBlue
    },

    contentContainer: {
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
        width: 82,
    },

    imageView: {
        width: 82,
        height: 82,
        flex: 1,
        borderRadius: 41,
        backgroundColor: '#000'
    },
    artistName: {
        fontFamily: FONTS.PoppinsMedium,
        fontSize: 14,
        color: COLORS.lightGray,
        textAlign: 'center'
    }

})

