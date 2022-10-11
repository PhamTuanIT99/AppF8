import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, View} from 'react-native';
import Home from './customHome';
import Market from './customMarket';
import Profile from '../src/components/profile';
import ProfileDetail from '../src/components/Profile_Detail/component';

function HomeScreen() {
  return <ProfileDetail />;
}
function HomeScreen0() {
  return <Market />;
}
function HomeScreen1() {
  return <Home />;
}
function ProFileScreen() {
  return <Profile />;
}
function HomeScreen3() {
  return <View></View>;
}
function HomeScreen4() {
  return <View></View>;
}
const Tab = createBottomTabNavigator();

export default function CustomTabBar() {
  const [initialRoute, setInitialRoute] = React.useState('Home');

  return (
    <Tab.Navigator
      initialRouteName={initialRoute}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          if (route.name === 'Home') {
            {
              return (
                <Image
                  source={require('../asset/iconHome.png')}
                  style={{height: 25, width: 25, tintColor: color}}
                />
              );
            }
          }
          if (route.name === 'Friends') {
            {
              return (
                <Image
                  source={require('../asset/people.png')}
                  style={{height: 25, width: 25, tintColor: color}}
                />
              );
            }
          } else if (route.name === 'Add Post') {
            {
              return (
                <Image
                  source={require('../asset/addPost.png')}
                  style={{height: 25, width: 25, tintColor: color}}
                />
              );
            }
          } else if (route.name === 'Profile') {
            {
              return (
                <Image
                  source={require('../asset/user.png')}
                  style={{height: 25, width: 25, tintColor: color}}
                />
              );
            }
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#3490e7',
        inactiveTintColor: '#AEAEAE',
        style: {
          height: 60,
          paddingBottom: 5,
        },
        labelStyle: {
          fontSize: 13,
        },
      }}>
      <Tab.Screen
        name={'Home'}
        component={HomeScreen}
        options={() => ({
          headerShown: false,
          title: 'Home',
        })}></Tab.Screen>
      <Tab.Screen
        name="Friends"
        component={HomeScreen1}
        options={() => ({
          headerShown: false,
          title: 'Friends',
        })}></Tab.Screen>
      <Tab.Screen
        name="Add Post"
        component={HomeScreen0}
        options={() => ({headerShown: false, title: 'Add Post'})}></Tab.Screen>
      <Tab.Screen
        name="Profile"
        component={ProFileScreen}
        options={() => ({headerShown: false, title: 'Profile'})}></Tab.Screen>
    </Tab.Navigator>
  );
}
