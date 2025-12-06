import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DiscoverScreen from '../screens/DiscoverScreen';
import EventDetail from '../screens/EventDetail';
import EventScreen from '../screens/EventScreen';
import FighterProfileScreen from '../screens/FighterProfileScreen';
import FighterScreen from '../screens/FighterScreen';
import OrganizerScreen from '../screens/OrganizerScreen';

const Stack = createNativeStackNavigator();

const DiscoverNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Discover"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Discover" component={DiscoverScreen} />
      <Stack.Screen name="Event" component={EventScreen} />
      <Stack.Screen name="EventDetail" component={EventDetail} />
      <Stack.Screen name="FighterScreen" component={FighterScreen} />
      <Stack.Screen name="ManagerScreen" component={OrganizerScreen} />
      <Stack.Screen name="FighterProfileScreen" component={FighterProfileScreen} />
    </Stack.Navigator>
  );
};

export default DiscoverNavigator;
