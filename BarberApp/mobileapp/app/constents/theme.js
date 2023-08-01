import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const SIZES = {
    horizontalMargin: 16,
    width,
    height
}

export const COLORS = {
    white: '#FFFFFF',
    lightBlue: '#D4CCFF',
    darkBlue: '#6043F5',
    lightGray: '#7B7A85',
    darkGray: '#6C6C6C',
    orange: '#FF8A5C',
    nextButton: '#D7D7CB',
    cartItem: '#F6F6F8',
    black: '#000'
}

export const FONTS = {
    PoppinsRegular: 'Poppins-Regular',
    PoppinsMedium: 'Poppins-Medium',
    PoppinsBold: 'Poppins-Bold',
    PoppinsSemiBold: 'Poppins-SemiBold',
};