import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Index from '../src/Market/index';
import Detail from '../src/Market/Detail';
import Main from './main';
function IndexScreen() {
  return <Index />;
}
function DetailScreen() {
  return <Detail />;
}
function MainScreen() {
  return <Main />;
}

const Stack = createStackNavigator();

function CustomLogin() {
  return (
    <Stack.Navigator initialRouteName>
      <Stack.Screen
        name="Index"
        component={IndexScreen}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={() => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
}
export default CustomLogin;
