import React from 'react';
import { Text, StyleSheet, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native';

const SettingScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#040507" />
            <Text style={{ fontSize: 40, color: "white" }}>Setting screen</Text>
        </SafeAreaView>
    );
}

export default SettingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#040507",
        alignItems: 'center',
    },
})