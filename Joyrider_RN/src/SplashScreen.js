
import Video from 'react-native-video'
import { useEffect } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import CreateAccountModal from './CreateAccountModal.js';


export default SplashScreen = () => {

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            width: null,
            height: null,
            backgroundColor: 'red'
        }}>
            <Video source={{ uri: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 1
                }}
                muted={true}
                repeat={true}
                resizeMode='cover' />

            <SafeAreaView style={{
                height: '100%',
                width: '100%',
                // backgroundColor: 'red',
                justifyContent: 'space-between'
            }}>
                <View style={{
                    // backgroundColor: 'white', 
                    height: '15%',
                    width: '100%',
                }}>
                    {/* Titles */}

                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        flex: 1
                    }}>
                        <Text style={{ fontSize: 36, fontWeight: 'bold', color: '#fff' }}>JoyRider</Text>
                        <Text style={{ marginTop: 10, fontSize: 20, fontWeight: '500', color: '#fff' }}>The app for riders, by riders</Text>
                    </View>


                </View>

                <View style={{
                    // backgroundColor: 'white', 
                    height: '16%',
                    width: '100%',
                }}>
                    {/* Buttons */}

                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        flex: 1
                    }}>
                        <TouchableOpacity style={
                            {
                                backgroundColor: "#C42331",
                                width: '85%',
                                aspectRatio: 6.2,
                                justifyContent: 'center',
                                borderRadius: 10
                            }
                        }>
                            <Text style={
                                {
                                    fontSize: 20,
                                    fontWeight: '600',
                                    color: '#fff',
                                    alignSelf: 'center',
                                }}>Get started</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            flexDirection: 'row'
                        }}>
                            <Text style={{
                                color: '#fff',
                                marginTop: 10,
                                fontSize: 16,
                                fontWeight: '500',
                                alignSelf: 'center',
                            }}>Returning user?</Text>
                            <Text style={{
                                marginLeft: 2,
                                color: '#fff',
                                marginTop: 10,
                                fontSize: 16,
                                fontWeight: '500',
                                alignSelf: 'center',
                                textDecorationLine: 'underline',
                            }}>Sign in</Text>
                        </TouchableOpacity>
                    </View>


                </View>



            </SafeAreaView>
            <CreateAccountModal />


        </View>
    );
}