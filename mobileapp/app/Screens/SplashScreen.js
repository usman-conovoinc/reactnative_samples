import React from 'react';
import { Text, StyleSheet, Image, View, TouchableOpacity } from 'react-native'
import { Images, Constants } from '../Resources/index.js';

const launchApp = () => {
}

const SplashScreen = props => {
    return (
        <View style={styles.container}>
            <Image source={Images.splashbgImage} style={styles.backgroundImage} />
            <View style={styles.buttonAndTextContainer}>
                <Text style={styles.tagline}>{Constants.splashTagLine}</Text>
                <TouchableOpacity onPress={launchApp}>
                    <View style={styles.nextButton}>
                        <Image source={Images.nextArrowIcon} style={styles.nextArrow} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        zIndex: 0,
        height: undefined,
        width: undefined
    },
    buttonAndTextContainer: {
        zIndex: 1,
        position: 'absolute',
        // backgroundColor: '#000',

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        alignItems: 'flex-end',

        width: '90%',
        bottom: '10%',
        marginHorizontal: 16,

    },
    tagline: {
        width: 250,
        fontSize: 26,
        fontWeight: '500',
        color: '#fff',
    },
    nextButton: {
        backgroundColor: '#7993AE',
        height: 50,
        width: 50,
        borderRadius: 4,
        justifyContent: 'center'
    },
    nextArrow: {
        alignSelf: 'center',
    }
})