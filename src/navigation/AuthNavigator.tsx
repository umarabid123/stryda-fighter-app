
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Intro from "../screens/Intro/Intro";
import Login from "../screens/AuthScreens/Login";
import SignUp from "../screens/AuthScreens/Signup";
import Register from "../screens/AuthScreens/Register";
import Verify from "../screens/AuthScreens/Verify";
import CompleteProfile from "../screens/AuthScreens/CompleteProfile";
import Welcome from "../screens/AuthScreens/Welcome";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
      <Stack.Navigator
        initialRouteName="Intro"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Verify" component={Verify} />
        <Stack.Screen name="CompleteProfile" component={CompleteProfile} />
        <Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator>
  );
};

export default AuthNavigator;
