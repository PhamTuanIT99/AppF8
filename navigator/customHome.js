import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Provider} from 'react-redux';
import Home from '../src/Home/index';
import Detail from '../src/Home/DetailProduct';
import {store} from '../src/store';

function HomeScreen() {
  return <Home />;
}
function DetailScreen() {
  return <Detail />;
}

const Stack = createStackNavigator();
function CustomLogin() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="DetailProduct"
        component={DetailScreen}
        options={() => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
}
export default CustomLogin;
