import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import NotFound from '../components/notFound';
import ProfilePage from '../pages/Profile.page';

const SearchRootStack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <SearchRootStack.Navigator screenOptions={{headerShown: false}}>
      <SearchRootStack.Screen name="Profile" component={ProfilePage} />
    </SearchRootStack.Navigator>
  );
};

export default ProfileStack;
