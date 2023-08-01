import React, { useEffect, useState, Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
// import { useOrientation } from '../useOrientation.js';
import activitiesData from '../assets/data/activitiesData'
import discoverCategoriesData from '../assets/data/discoverCategoriesData'
import discoverData from '../assets/data/discoverData'
// import learnMoreData from '../assets/data/learnMoreData'
import DiscoverItemCell from './DiscoverItemCell';
import LearnMoreItemCell from './LearnMoreItemCell';
import ActivityItemCell from './ActivityItemCell';
import { COLORS, FONTS } from '../constants'
import { isOrientationPortrait, useAsync } from '../GlobalFunctions.js'
import { Dimensions } from 'react-native';

Feather.loadFont();

export default function HomeScreen({ navigation }) {
    const [isPortrait, setPortrait] = useState(isOrientationPortrait());

    useEffect(() => {
        const observer = Dimensions.addEventListener("change", () => { setPortrait(isOrientationPortrait()); })
        return () => {
            observer.remove()
        }
    }, []);

    return (
        <View style={styles.mainView}>
            <SafeAreaView>
                <HomeHeader />
                <ScrollView
                    contentInsetAdjustmentBehavior='automatic'
                    showsVerticalScrollIndicator={false} >
                    <View style={styles.contentContainer}>
                        <DiscoverView data={{ navigation: navigation, isPortrait: isPortrait }} />
                        <ActivitiesView data={{ navigation: navigation, isPortrait: isPortrait }} />
                        <LearnMoreView data={{ navigation: navigation, isPortrait: isPortrait }} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};


function HomeHeader() {
    return (
        <View style={styles.headerContentContainer}>
            <Feather name="menu" size={32} color={COLORS.black} />
            <Image style={styles.headerImage} source={require('../assets/images/person.png')} />
        </View>
    );
}

function DiscoverView({ data }) {

    const { isPortrait, navigation } = data

    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.discoverText}>Discover</Text>
            <View style={styles.discoverCategoryContainer}>
                <Text style={[styles.discoverCategoryText, {
                    color: COLORS.orange,
                    paddingRight: isPortrait === true ? 10 : 30
                }]}>All</Text>
                <Text style={[styles.discoverCategoryText, {
                    paddingRight: isPortrait === true ? 10 : 30

                }]}>Destinations</Text>
                <Text style={[styles.discoverCategoryText, {
                    paddingRight: isPortrait === true ? 10 : 30

                }]}>Cities</Text>
                <Text style={[styles.discoverCategoryText, {
                    paddingRight: isPortrait === true ? 10 : 30

                }]}>Experiences</Text>
            </View>
            <HorizontalCollectionView data={{
                'dataSource': discoverData,
                'isPortrait': isPortrait,
                'navigation': navigation,
                'dataType': 0
            }} />
        </View>
    );
}

function ActivitiesView({ data }) {
    const { isPortrait, navigation } = data
    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.discoverText}>Activities</Text>
            <HorizontalCollectionView data={{
                'dataSource': activitiesData,
                'isPortrait': isPortrait,
                'navigation': navigation,
                'dataType': 1
            }} />
        </View>
    );
}

function LearnMoreView({ data }) {
    const { isPortrait, navigation } = data

    const [learnMoreData, setLearnMoreData] = useState([]);

    const getImages = async () => {
        try {
            const response = await fetch('https://picsum.photos/v2/list?page=1&limit=100');
            const json = await response.json();
            setLearnMoreData(json);
        } catch (error) {
            console.error(error);
        } finally {
            // setLoading(false);
        }
    }

    useEffect(() => {
        getImages();
    }, []);


    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.discoverText}>Learn More</Text>
            <HorizontalCollectionView data={{
                'dataSource': learnMoreData,
                'isPortrait': isPortrait,
                'navigation': navigation,
                'dataType': 2
            }} />
        </View>
    );
}

function viewForDataType(dataTypeEnum, item, isPortrait, navigation) {
    switch (dataTypeEnum) {
        case 0:
            return DiscoverItemCell(item, isPortrait, navigation)
        case 1:
            return ActivityItemCell(item, isPortrait, navigation)
        case 2:
            return LearnMoreItemCell(item, isPortrait, navigation)
        default:
            return DiscoverItemCell(item, isPortrait, navigation)
    }
}

function HorizontalCollectionView({ data }) {
    const { isPortrait, dataSource, navigation, dataType } = data

    return (
        <View style={styles.listView}>
            <FlatList
                data={dataSource}
                renderItem={(item) => {
                    return viewForDataType(dataType, item, isPortrait, navigation)
                }}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}



const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    headerContentContainer: {
        paddingTop: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 65,
    },
    headerImage: {
        borderRadius: 20,
        height: 40,
        width: 40,
    },
    contentContainer: {
        paddingTop: 30,
    },
    sectionContainer: {

    },
    discoverText: {
        paddingHorizontal: 20,
        fontFamily: FONTS.LatoBold,
        fontSize: 32
    },
    discoverCategoryContainer: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        paddingRight: 10,
        paddingTop: 20
    },
    discoverCategoryText: {
        fontFamily: FONTS.LatoRegular,
        fontSize: 16,
        color: COLORS.gray
    },
    listView: {
        paddingVertical: 20,
    }
});