import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import DoneeScreen from "./screens/Donee";
import DonorScreen from "./screens/Donor";
import ThankyouScreen from "./screens/ThankYou"


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Donee" component={DoneeScreen} />
        <Stack.Screen name="Donor" component={DonorScreen} />
        <Stack.Screen name="Thankyou" component={ThankyouScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;