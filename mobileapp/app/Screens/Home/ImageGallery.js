const { useRef } = require("react");
import {
    ScrollView,
    StyleSheet,
    View,
    Image,
    Animated,
    useWindowDimensions,
} from 'react-native';
import { Images } from '../../Resources/index.js';

const imageArray = new Array(6).fill(
    Images.sofaImage,
);

export default ImageGallery = () => {

    const scrollX = useRef(new Animated.Value(0)).current;
    const { width: windowWidth } = useWindowDimensions();
    const { styles } = useStyle()

    return (
        <View style={styles.scrollContainerHorizontal}>
            <ScrollView
                horizontal={true}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event([
                    {
                        nativeEvent: {
                            contentOffset: {
                                x: scrollX,
                            },
                        },
                    },
                ])}
                scrollEventThrottle={2}>
                {imageArray.map((image, imageIndex) => {
                    return (
                        <View style={styles.productImageContainer} key={imageIndex.toString()}>
                            <Image
                                source={image}
                                style={styles.productImage} />
                        </View>
                    );
                })}
            </ScrollView>
            <View style={styles.indicatorContainer}>
                {
                    imageArray.map((image, imageIndex) => {

                        const _width = scrollX.interpolate({
                            inputRange: [
                                windowWidth * (imageIndex - 1),
                                windowWidth * imageIndex,
                                windowWidth * (imageIndex + 1),
                            ],
                            outputRange: [8, 16, 8],
                            extrapolate: 'clamp',
                        });

                        console.log('------------------ width -------------------', _width)
                        return (
                            <Animated.View key={imageIndex.toString()} style={[styles.normalDot, { _width }]} />
                        );
                    })}

            </View>
        </View>
    )
}

const useStyle = () => {

    const dimensions = useWindowDimensions();
    console.log('Logging dimensions', dimensions)

    const styles = StyleSheet.create({

        scrollContainerHorizontal: {
            marginTop: 70,
            // backgroundColor: '#000'
        },
        normalDot: {
            height: 8,
            width: 8,
            borderRadius: 4,
            backgroundColor: 'silver',
            marginHorizontal: 4,
        },

        indicatorContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
        productImageContainer: {
            width: dimensions.width,
            // backgroundColor: 'red',
            aspectRatio: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        productImage: {
            resizeMode: 'contain',
            width: '80%',
            height: undefined,
            aspectRatio: 0.95,
        },
    })

    return { styles }

}