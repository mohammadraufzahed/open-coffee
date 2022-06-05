import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import LoginPage from './pages/Authentication/Login.page';

export type Props = {
  name: string;
  baseEnthusiasmLevel?: number;
};

const Stack = createNativeStackNavigator();

const App: React.FC<Props> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          animation: 'slide_from_right',
          fullScreenGestureEnabled: true,
        }}>
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{title: 'ورود', statusBarStyle: 'light'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
