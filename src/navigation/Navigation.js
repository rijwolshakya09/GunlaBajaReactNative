import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/splashScreen/SplashScreen';
import {screenNames} from '../constant';
import HomeScreen from '../screens/home/HomeScreen';

const Stack = createNativeStackNavigator();

const Route = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
          elevation: 3,
          borderBottomColor: '#C7C7CC',
          borderBottomWidth: 1,
        },
        headerTintColor: '#686868',
        fontWeight: '400',

        headerTitleStyle: {
          fontWeight: '400',
          alignSelf: 'center',
          marginRight: 40,
        },
      }}
      initialRouteName="Splash">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={screenNames.HOME_SCREEN}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Route;

const styles = StyleSheet.create({});
