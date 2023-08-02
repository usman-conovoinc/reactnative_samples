import HomeScreen from './HomeScreen.js';
import DetailsScreen from './DetailsScreen.js'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeNavigationStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export {
    HomeNavigationStack,
}