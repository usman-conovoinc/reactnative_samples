import { StyleSheet, View } from "react-native"


export default Separator = (props) => {
    return (
        <View style={StyleSheetFactory.getSheet(props).container}></View>
    )
}

class StyleSheetFactory {
    static getSheet(props) {
        return StyleSheet.create({
            container: {
                marginVertical: props.marginVertical,
                height: props.height,
                width: props.width,
                backgroundColor: props.backgroundColor,
                alignItems: 'center',
            }
        })
    }
}