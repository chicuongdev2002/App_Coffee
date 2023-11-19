import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeSreen from "./src/component/HomeSreen";
 import Home from "./src/component/Home";
 import HoatDong from './src/component/Activity';
import MainApp from "./src/component/MainApp"
import Login from "./src/component/Login"
import DatHang from "./src/component/Order"
import ProductDetail from './src/component/ProductDetail';
// import PhoneNumber from './src/component/PhoneNumber';
//  import Otp from './src/component/Otp';
<div id="root"></div>

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
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
           <Stack.Screen
          name="HoatDong"
          component={HoatDong}
          options={{
            // cardStyleInterpolator: forFade,
            headerShown: false,
            gestureEnabled: false,
          }}
        />
            <Stack.Screen
          name="DatHang"
          component={DatHang}
          options={{
            // cardStyleInterpolator: forFade,
            headerShown: false,
            gestureEnabled: false,
          }}
        />
            <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
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


