import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScreensName from '../Constants/ScreensName';
import Home from '../Screens/Home/Home';
import VectorIcon from '../Constants/VectorIcon';
import Colors from '../Constants/Colors';
import {hp} from '../Constants/Responsive';

const Tab = createBottomTabNavigator();

const tabBarActiveTintColor = Colors.PurpleDark;
const tabBarInactiveTintColor = Colors.PurpleLight;
const IconSize = hp(3);
export default function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: 'pink',
        tabBarInactiveTintColor: 'green',
        tabBarStyle: {backgroundColor: 'red'},
      }}>
      <Tab.Screen
        name={ScreensName.HOME}
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color, size}) => (
            <VectorIcon
              type="Entypo"
              name="home"
              color={color}
              size={IconSize}
            />
          ),
          tabBarActiveTintColor: tabBarActiveTintColor,
          tabBarInactiveTintColor: tabBarInactiveTintColor,
        }}
      />
      <Tab.Screen
        name={ScreensName.FEACHURE}
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color, size}) => (
            <VectorIcon
              type="AntDesign"
              name="heart"
              color={color}
              size={IconSize}
            />
          ),
          tabBarActiveTintColor: tabBarActiveTintColor,
          tabBarInactiveTintColor: tabBarInactiveTintColor,
        }}
      />
      <Tab.Screen
        name={ScreensName.MENU}
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color, size}) => (
            <VectorIcon
              type="MaterialCommunityIcons"
              name="menu"
              color={color}
              size={IconSize}
            />
          ),
          tabBarActiveTintColor: tabBarActiveTintColor,
          tabBarInactiveTintColor: tabBarInactiveTintColor,
        }}
      />
      <Tab.Screen
        name={ScreensName.MESSEGER}
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarBadge: 3,
          tabBarIcon: ({color, size}) => (
            <VectorIcon
              type="MaterialCommunityIcons"
              name="message"
              color={color}
              size={IconSize}
            />
          ),
          tabBarActiveTintColor: tabBarActiveTintColor,
          tabBarInactiveTintColor: tabBarInactiveTintColor,
        }}
      />

      <Tab.Screen
        name={ScreensName.USER}
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <VectorIcon
              type="FontAwesome5"
              name="user-alt"
              color={color}
              size={IconSize}
            />
          ),
          tabBarActiveTintColor: tabBarActiveTintColor,
          tabBarInactiveTintColor: tabBarInactiveTintColor,
        }}
      />
    </Tab.Navigator>
  );
}
