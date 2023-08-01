import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const SIZES = {
  appMargin: 16,
  width,
  height
}

export const COLORS = {

  black: "#212121",
  white: "#FFFFFF",
  error: "#EF5350",
  success: "#66BB6A",

  editableColorSet: {
    five: "#9E9E9E",
    four: "#BDBDBD",
    three: "#E0E0E0",
    two: "#EEEEEE",
    one: "#F5F5F5"
  },
  mainTheme: {
    five: "#FFD60A",
    four: "#FEE440",
    three: "#FEEB70",
    two: "#FEF2A0",
    one: "#FFF8CF"
  }
}

export const FONTS = {
  PoppinsRegular: 'Poppins-Regular',
  PoppinsMedium: 'Poppins-Medium',
  PoppinsBold: 'Poppins-Bold',
  PoppinsSemiBold: 'Poppins-SemiBold',
};

/*
{
    "themes": [
      {
          "black": "#212121",
          "white": "#FFFFFF",
          "error": "#EF5350",
          "success": "#66BB6A",

          "editableColorSet" : {
          "five": "#9E9E9E",
          "four": "#BDBDBD",
          "three": "#E0E0E0",
          "two": "#EEEEEE",
          "one": "#F5F5F5"
          },
          "mainTheme": {
          "five": "#3F51B5",
          "four": "#5C6BC0",
          "three": "#7986CB",
          "two": "#9FA8DA",
          "one": "#C5CAE9"
          }
      },
      {
          "black": "#212121",
          "white": "#FFFFFF",
          "error": "#EF5350",
          "success": "#66BB6A",

          "editableColorSet" : {
          "five": "#9E9E9E",
          "four": "#BDBDBD",
          "three": "#E0E0E0",
          "two": "#EEEEEE",
          "one": "#F5F5F5"
          },
          "mainTheme": {
          "five": "#FFD60A",
          "four": "#FEE440",
          "three": "#FEEB70",
          "two": "#FEF2A0",
          "one": "#FFF8CF"
          }
      },
      {
          "black": "#212121",
          "white": "#FFFFFF",
          "error": "#EF5350",
          "success": "#66BB6A",

          "editableColorSet" : {
          "five": "#9E9E9E",
          "four": "#BDBDBD",
          "three": "#E0E0E0",
          "two": "#EEEEEE",
          "one": "#F5F5F5"
          },
          "mainTheme": {
          "five": "#F44336",
          "four": "#EF5350",
          "three": "#E57373",
          "two": "#EF9A9A",
          "one": "#FFCDD2"
          }
      },
      {
          "black": "#212121",
          "white": "#FFFFFF",
          "error": "#EF5350",
          "success": "#66BB6A",

          "editableColorSet" : {
          "five": "#9E9E9E",
          "four": "#BDBDBD",
          "three": "#E0E0E0",
          "two": "#EEEEEE",
          "one": "#F5F5F5"
          },
          "mainTheme": {
          "five": "#4CAF50",
          "four": "#66BB6A",
          "three": "#81C784",
          "two": "#A5D6A7",
          "one": "#C8E6C9"
          }
      },
    ]
  }
*/