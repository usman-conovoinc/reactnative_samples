

import React from 'react';
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';

export default LoginScreen = ({ navigation }) => {


    const signIn = async () => {

        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log(userInfo);
            navigation.replace("HomeScreen", { isHome: true })
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    };


    return (
        <View style={styles.mainView}>
            <TouchableOpacity
                style={styles.btnSignin}
                onPress={() => {
                    GoogleSignin.configure({
                        androidClientId: '574027356927-fbp5cmu8q31t2peh3mfohneae2tfkoar.apps.googleusercontent.com',
                        iosClientId: '574027356927-ig4g6ec98hevv1fj4n1koo8uleqbijaq.apps.googleusercontent.com',
                    });
                    signIn()
                }}>

                <Text>Sign in with Google</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({

    mainView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnSignin: {

        padding: 8,
        borderRadius: 8,
        borderColor: '#00000010',
        borderWidth: 1,
        color: 'black'
    }

})
