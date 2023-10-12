import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bai3a from './src/component/Bai3a';
import Bai3b from './src/component/Bai3b';
<div id="root"></div>
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="HOME"
          component={Bai3a}
          options={{ title: 'HOME' }}
        />
         <Stack.Screen
          name="chonmau"
          component={Bai3b}
          options={{ title: 'BACK' }}
        />
         <Stack.Screen
          name="xong"
          component={Bai3a}
          options={{ title: 'HOME' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


