import React from 'react';
import { Text, StyleSheet, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native';

const DetailsScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#040507" />
            <Text style={{ fontSize: 40, color: "white" }}>Details screen</Text>
        </SafeAreaView>
    );
}

export default DetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#040507",
        alignItems: 'center',
    },
})