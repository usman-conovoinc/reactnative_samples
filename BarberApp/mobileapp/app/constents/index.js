// import icons from "./icons"
import images from "./images"
import { COLORS, FONTS, SIZES } from "./theme"
import { Platform } from "react-native"


const USER = { "id": "0012", "name": "Test User", "image": images.profile }
const BASE_URL = (Platform.OS === 'android') ? 'http://192.168.100.67:8080' : 'http://127.0.0.1:8080';

export {
    USER,
    images,
    COLORS,
    FONTS,
    SIZES,
    BASE_URL
    // dummyData
}