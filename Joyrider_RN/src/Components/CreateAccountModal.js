import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import Separator from "./Separator.js";
import { normalize } from "../Utils.js";

const SocialLoginButton = (props) => {
    const { width: windowWidth } = useWindowDimensions();
    const buttonHeight = (windowWidth * 0.8) / 6.2
    return (
        <TouchableOpacity style={StyleSheetFactory.getSocialLoginButtonStyles(props, buttonHeight).btnClose}>
            <Text style={StyleSheetFactory.getSocialLoginButtonStyles(props).btnTitle}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const CreateAccountModalHeader = (props) => {
    return (
        <View style={StyleSheetFactory.getCreateAccountModalHeaderStyles().container}>
            <Text style={StyleSheetFactory.getCreateAccountModalHeaderStyles().title}>Create account</Text>
            <TouchableOpacity onPress={() => { props.setShowGetStarted(false) }}>
                <Text style={StyleSheetFactory.getCreateAccountModalHeaderStyles().btnClose}>X</Text>
            </TouchableOpacity>
        </View>
    );
}

const CreateAccountModal = (props) => {

    const socialButtons = [
        { "title": "Continue with Facebook", "color": "#1877F2", "backgroundColor": "#fff", "platform": "Facebook" },
        { "title": "Continue with Instagram", "color": "#CC00D0", "backgroundColor": "#fff", "platform": "Instagram" },
        { "title": "Continue with Apple", "color": "#212121", "backgroundColor": "#fff", "platform": "Apple" }]

    return (
        <View style={StyleSheetFactory.getCreateAccountModalStyles().container}>
            <CreateAccountModalHeader setShowGetStarted={props.setShowGetStarted} />
            {socialButtons.map((obj, index) => {
                return (
                    <SocialLoginButton backgroundColor={obj.backgroundColor} color={obj.color}
                        borderColor={obj.color} title={obj.title} key={index} />
                );
            })}
            <Separator marginVertical={'2.5%'} height={0.6} width={'100%'} backgroundColor={'#000'} />
            <SocialLoginButton backgroundColor={"#1D303D"} color={"#fff"}
                borderColor={"#1D303D"} title={"Browse as guest"} />
        </View>
    );
}


class StyleSheetFactory {
    static getSocialLoginButtonStyles(props, buttonHeight) {
        return StyleSheet.create({
            btnClose: {
                backgroundColor: props.backgroundColor,
                width: '100%',
                height: buttonHeight,
                marginVertical: '1.5%',
                justifyContent: 'center',
                borderColor: props.borderColor,
                borderWidth: 1,
                borderRadius: 10
            },
            btnTitle: {
                width: '100%',
                fontSize: normalize(16),
                fontWeight: '500',
                textAlign: 'center',
                color: props.color,
            }
        })
    }

    static getCreateAccountModalHeaderStyles() {
        return StyleSheet.create({
            container: {
                flexDirection: 'row',
                backgroundColor: '#fff',
                width: '100%',
                marginBottom: 16,
            },
            title: {
                flex: 1,
                fontSize: normalize(16),
                fontWeight: '500'
            },
            btnClose: {
                flex: 1,
                fontSize: normalize(16),
                fontWeight: '500'
            }
        })
    }

    static getCreateAccountModalStyles() {
        return StyleSheet.create({
            container: {
                position: 'absolute',
                justifyContent: 'center',
                backgroundColor: '#fff',
                width: '100%',
                padding: 20,
            }
        })
    }
}

export default CreateAccountModal;