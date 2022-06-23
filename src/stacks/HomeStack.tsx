import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomePage from '../pages/Home.page';
import StorePage from '../pages/Store.page';

export type HomeScreens = {
  Home: undefined;
  Store: undefined;
};

const HomeRootStack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <HomeRootStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        animation: 'fade_from_bottom',
        headerShown: false,
      }}>
      <HomeRootStack.Screen name="Home" component={HomePage} />
      <HomeRootStack.Screen name="Store" component={StorePage} />
    </HomeRootStack.Navigator>
  );
};

export default HomeStack;
