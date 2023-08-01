import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomeHeaderView from '../HomeScreen/HomeHeaderView.js';
import HomeSearchView from '../HomeScreen/HomeSearchView.js';
import { COLORS } from '../../constents'

export default CategoriesScreen = ({ navigation }) => {

    const [searchText, setSearchText] = useState("");

    const getSearchText = (text) => {
        setSearchText(text)
    }

    return (
        <View style={styles.mainView}>
            <SafeAreaView>
                <HomeHeaderView isHome={false} navigation={navigation} />
                <HomeSearchView getSearchText={getSearchText} />
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: COLORS.white,
    },

})