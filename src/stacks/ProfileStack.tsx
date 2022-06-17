import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import OrderHistoryPage from '../pages/OrderHistory.page';
import ProfilePage from '../pages/Profile.page';

export type ProfileScreens = {
  Profile: undefined;
  OrderHistory: undefined;
};

const SearchRootStack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <SearchRootStack.Navigator
      screenOptions={{headerShown: false, animation: 'fade_from_bottom'}}>
      <SearchRootStack.Screen name="Profile" component={ProfilePage} />
      <SearchRootStack.Screen
        name="OrderHistory"
        component={OrderHistoryPage}
      />
    </SearchRootStack.Navigator>
  );
};

export default ProfileStack;
