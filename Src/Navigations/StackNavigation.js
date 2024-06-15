import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ScreensName from '../Constants/ScreensName';
import BottomNavigation from './BottomNavigation';

const Stack = createStackNavigator();
export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={ScreensName.BOOTOMNAVIGATION}>
        <Stack.Screen
          name={ScreensName.BOOTOMNAVIGATION}
          component={BottomNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
