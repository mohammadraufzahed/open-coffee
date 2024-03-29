import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import NotFound from '../components/notFound';

const SearchRootStack = createNativeStackNavigator();

const FavoritesStack = () => {
  return (
    <SearchRootStack.Navigator screenOptions={{headerShown: false}}>
      <SearchRootStack.Screen name="notFound" component={NotFound} />
    </SearchRootStack.Navigator>
  );
};

export default FavoritesStack;
