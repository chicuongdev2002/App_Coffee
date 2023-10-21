import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeSreen from "./src/component/HomeSreen";
 import Home from "./src/component/Home";
import MainApp from "./src/component/MainApp"
import Login from "./src/component/Login"
<div id="root"></div>
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeSreen">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="HomeSreen"
          component={HomeSreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainApp"
          component={MainApp}
          options={{
            // cardStyleInterpolator: forFade,
            headerShown: false,
            gestureEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


