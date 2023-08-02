
import Video from 'react-native-video'
import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FormattedText } from 'react-native-formatted-text';
import CreateAccountModal from './Components/CreateAccountModal.js';
import { normalize } from "./Utils.js";


export default SplashScreen = () => {

    const [showGetStarted, setShowGetStarted] = useState(false)

    const showGetStartedModal = () => {
        setShowGetStarted(true)
    }

    return (
        <View style={StyleSheetFactory.getSplashScreenStyles().mainContainer}>
            <Video source={{ uri: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' }}
                style={StyleSheetFactory.getSplashScreenStyles().videoContainer}
                muted={true}
                repeat={true}
                resizeMode='cover' />
            <SafeAreaView>
                <View style={StyleSheetFactory.getSplashScreenStyles().componentsContainer}>
                    <View style={StyleSheetFactory.getSplashScreenStyles().headerFooter}>
                        {/* Titles */}
                        <View style={StyleSheetFactory.getSplashScreenStyles().headerTitleContainer}>
                            <Text style={StyleSheetFactory.getSplashScreenStyles().title}>JoyRider</Text>
                            <Text style={StyleSheetFactory.getSplashScreenStyles().description}>The app for riders, by riders</Text>
                        </View>
                    </View>

                    <View style={StyleSheetFactory.getSplashScreenStyles().headerFooter}>
                        {/* Buttons */}
                        <View style={StyleSheetFactory.getSplashScreenStyles().footerButtonContainer}>
                            <TouchableOpacity style={StyleSheetFactory.getSplashScreenStyles().btnGetStarted} onPress={showGetStartedModal}>
                                <Text style={StyleSheetFactory.getSplashScreenStyles().btnGetStartedTitle}>Get started</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={StyleSheetFactory.getSplashScreenStyles().btnSignin}>
                                <FormattedText style={StyleSheetFactory.getSplashScreenStyles().btnSigninTitle}
                                    ranges={StyleSheetFactory.getSplashScreenStyles().btnSigninFormatedTitle}>
                                    Returning user? Sign in
                                </FormattedText>
                            </TouchableOpacity>
                        </View>


                    </View>
                </View>

            </SafeAreaView>
            {(showGetStarted == true) &&
                <CreateAccountModal setShowGetStarted={setShowGetStarted} />
            }

        </View>
    );

}

class StyleSheetFactory {
    static getSplashScreenStyles() {
        return StyleSheet.create({
            mainContainer: {
                flex: 1,
                justifyContent: 'center',
                backgroundColor: '#000'
            },
            videoContainer: {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 1
            },
            componentsContainer: {
                height: '100%',
                width: '100%',
                justifyContent: 'space-between'
            },
            headerFooter: {
                height: '15%',
                width: '100%',
            },
            headerTitleContainer: {
                alignItems: 'center',
            },
            title: {
                fontSize: normalize(28),
                fontWeight: 'bold',
                color: '#fff'
            },
            description: {
                fontSize: normalize(16),
                marginTop: 10,
                fontWeight: '500',
                color: '#fff'
            },
            footerButtonContainer: {
                alignItems: 'center',
            },
            btnGetStarted: {
                backgroundColor: "#C42331",
                width: '85%',
                aspectRatio: 6.2,
                justifyContent: 'center',
                borderRadius: 10
            },
            btnGetStartedTitle: {
                fontSize: normalize(16),
                fontWeight: '600',
                color: '#fff',
                alignSelf: 'center',
            },
            btnSignin: {
                flexDirection: 'row'
            },
            btnSigninTitle: {
                color: '#fff',
                marginTop: 10,
                fontSize: normalize(12),
                fontWeight: '500',
                alignSelf: 'center',
            },
            btnSigninFormatedTitle: {
                start: 16,
                end: 23,
                style: {
                    textDecorationLine: 'underline',
                }
            }
        })
    }
}