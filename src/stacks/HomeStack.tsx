import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomePage from '../pages/Authentication/Home.page';

const HomeRootStack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <HomeRootStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        animation: 'slide_from_right',
        fullScreenGestureEnabled: true,
        headerShown: false,
      }}>
      <HomeRootStack.Screen name="Home" component={HomePage} />
    </HomeRootStack.Navigator>
  );
};

export default HomeStack;
