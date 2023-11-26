import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./src/component/HomeSreen";
// import Home from "./src/component/Home";
import HoatDong from './src/component/Activity';
import MainApp from "./src/component/MainApp"
import Login from "./src/component/Login"
import DatHang from "./src/component/Order"
import ProductDetail from './src/component/ProductDetail';
import Other from './src/component/Other';
import Otp from './src/component/Otp';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: 'HomeScreen' }}
        />
        <Stack.Screen
          name="MainApp"
          component={MainApp}
          options={{ title: 'Back' }}
        />
        <Stack.Screen
          name="HoatDong"
          component={HoatDong}
          options={{ title: 'Back' }}
        />
        <Stack.Screen
          name="DatHang"
          component={DatHang}
          options={{ title: 'Back' }}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{ title: 'Back' }}
        />
        <Stack.Screen
          name="Other"
          component={Other}
          options={{ title: 'Back' }}
        />
         <Stack.Screen
          name="Otp"
          component={Otp}
          options={{ title: 'Back' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
