import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Separator from "./Components/Separator.js";


const SocialLoginButton = (props) => {
    console.log(props)
    return (
        <TouchableOpacity style={
            {
                backgroundColor: props.backgroundColor,
                width: '85%',
                height: '14%',
                marginVertical: 5,
                justifyContent: 'center',
                borderColor: props.borderColor,
                borderWidth: 1,
                borderRadius: 10
            }}>
            <Text style={
                {
                    width: '100%',
                    fontSize: 24,
                    fontWeight: '500',
                    textAlign: 'center',
                    color: props.color,
                }}>
                {props.title}
            </Text>

        </TouchableOpacity>

    )
}

const CreateAccountModalHeader = () => {
    return (
        <View style={
            {
                flexDirection: 'row',
                backgroundColor: '#fff',
                width: '100%',
                padding: 20,
                marginBottom: 10,
            }}>
            <Text style={
                {
                    flex: 1,
                    fontSize: 24,
                    fontWeight: '500'

                }}>Create account</Text>

            <TouchableOpacity>
                <Text style={
                    {
                        flex: 1,
                        fontSize: 24,
                        fontWeight: '500'

                    }}>X</Text>
            </TouchableOpacity>

        </View>

    );
}

const CreateAccountModal = () => {

    const socialButtons = [
        { "title": "Continue with Facebook", "color": "#1877F2", "backgroundColor": "#fff", "platform": "Facebook" },
        { "title": "Continue with Instagram", "color": "#CC00D0", "backgroundColor": "#fff", "platform": "Instagram" },
        { "title": "Continue with Apple", "color": "#212121", "backgroundColor": "#fff", "platform": "Apple" }]

    return (
        <View style={
            {
                position: 'absolute',
                justifyContent: 'center',
                backgroundColor: '#00000050',
                height: "48%",
                width: '100%',
            }}>


            <View style={
                {
                    height: "100%",
                    width: '100%',
                    backgroundColor: '#fff',
                    alignItems: 'center',
                }}>

                <CreateAccountModalHeader />

                {socialButtons.map((obj, index) => {
                    return (
                        <SocialLoginButton
                            backgroundColor={obj.backgroundColor}
                            color={obj.color}
                            borderColor={obj.color}
                            title={obj.title}
                            key={index} />
                    );
                })}

                <Separator marginVertical={20} height={1} width={'85%'} backgroundColor={'#000'} />

                <SocialLoginButton
                    backgroundColor={"#1D303D"}
                    color={"#fff"}
                    borderColor={"#1D303D"}
                    title={"Browse as guest"} />
            </View>

        </View>


    );
}

export default CreateAccountModal;