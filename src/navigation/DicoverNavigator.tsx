import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from '../screens/Menu';
import AppSetting from '../screens/AppSetting';
import Home from '../screens/Home';
import MedicalPaper from '../screens/MedicalPaper';
import GiveFeedback from '../screens/GiveFeedback';
import DiscoverScreen from '../screens/DiscoverScreen';
import EventScreen from '../screens/EventScreen';

const Stack = createNativeStackNavigator();

const DiscoverNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Discover"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Discover" component={DiscoverScreen} />
      <Stack.Screen name="Event" component={EventScreen} />
      
    </Stack.Navigator>
  );
};

export default DiscoverNavigator;
