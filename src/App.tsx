import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {Button, Text, View} from 'react-native';

export type Props = {
  name: string;
  baseEnthusiasmLevel?: number;
};

const Stack = createNativeStackNavigator();

const App: React.FC<Props> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home'}}
        />
        <Stack.Screen
          name="Log"
          component={LogScreen}
          options={{title: 'Log'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen: React.FC = () => {
  return (
    <View>
      <Text>Hello World</Text>
      <Button title="Go to log page" />
    </View>
  );
};

const LogScreen: React.FC = () => {
  return (
    <View>
      <Text>Log</Text>
    </View>
  );
};

export default App;
