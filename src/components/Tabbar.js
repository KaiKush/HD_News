import * as React from 'react';
import {Text, View} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import SvgUri from 'react-native-svg-uri';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screeens/home_screen/HomeScreen';
import SavedScreen from '../screeens/saved_screen/SavedScreen';
import ProfileScreen from '../screeens/profile_screen/ProfileScreen';
import DetailScreen from '../screeens/detail_screen/DetailScreen';

import IconHome from '../../assets/images/tab_home.svg';
import IconSaved from '../../assets/images/tab_saved.svg';
import IconProfile from '../../assets/images/tab_profile.svg';

const Tab = createMaterialBottomTabNavigator();

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};

const SavedStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Saved"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Saved" component={SavedScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      activeColor="#fff"
      inactiveColor="#d6d6d6"
      barStyle={{backgroundColor: '#696969'}}
      shifting={true}
      labelStyle={{fontSize: 12}}
      style={{backgroundColor: '#fff'}}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => <IconHome height={32} width={32} color={'red'} />,
        }}
      />
      <Tab.Screen
        name="SavedStack"
        component={SavedStack}
        options={{
          tabBarLabel: 'Saved',
          tabBarIcon: () => <IconSaved height={24} width={24} color={'red'} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <IconProfile height={24} width={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
