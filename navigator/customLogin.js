import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useMemo, useState} from 'react';
import {Provider} from 'react-redux';
import Login from '../src/Login/Login';
import Register from '../src/Login/Register';
import Profile from '../src/components/profile/index';
import {store} from '../src/store';
import Main from './main';
import InfomationComponent from '../src/components/InfomationComponent/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProfileDetail from '../src/components/Profile_Detail/component';
function LoginScreen() {
  return <Login />;
}
function RegisterScreen() {
  return <Register />;
}
function ProfileScreen() {
  return <Profile />;
}
function MainScreen() {
  return <Main />;
}

const Stack = createStackNavigator();
function CustomLogin() {
  // SplashScreen.hide();
  const [initialRouter, setInittialRoute] = useState('Login');
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    AsyncStorage.getItem('FirstLogin').then(result => {
      if (result !== null) {
        setInittialRoute('Main');
      }
    });
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={initialRouter}>
          <>
            {initialRouter == 'true' ? (
              <>
                <Stack.Screen
                  name="Main"
                  component={MainScreen}
                  options={() => ({
                    headerShown: false,
                  })}
                />
                {/* <Stack.Screen
                  name="Profile"
                  component={ProfileScreen}
                  options={() => ({
                    headerShown: false,
                  })}
                /> */}
                <Stack.Screen
                  name="InfomationComponent"
                  component={InfomationComponent}
                  options={() => ({
                    headerShown: false,
                  })}
                />
                <Stack.Screen
                  name="ProfileDetail"
                  component={ProfileDetail}
                  options={() => ({
                    headerShown: false,
                  })}
                />
                <Stack.Screen
                  name="Login"
                  component={LoginScreen}
                  options={() => ({
                    headerShown: false,
                  })}
                />
              </>
            ) : (
              <>
                <Stack.Screen
                  name="Main"
                  component={MainScreen}
                  options={() => ({
                    headerShown: false,
                  })}
                />
                <Stack.Screen
                  name="Register"
                  component={RegisterScreen}
                  options={() => ({
                    headerShown: false,
                  })}
                />
              </>
            )}
          </>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
export default CustomLogin;
