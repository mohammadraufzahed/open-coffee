import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useRef} from 'react';
import {Dimensions, StatusBar, StyleSheet, View} from 'react-native';
import FavoritesStack from './stacks/FavoritesStack';
import HomeStack from './stacks/HomeStack';
import MapStack from './stacks/MapStack';
import ProfileStack from './stacks/ProfileStack';
import SearchStack from './stacks/SearchStack';
import HomeSVG from './Svgs/HomeSVG';
import ProfileSVG from './Svgs/ProfileSVG';
import FavoritesSVG from './Svgs/FavoritesSVG';
import MapSVG from './Svgs/MapSVG';
import SearchSVG from './Svgs/SearchSVG';

import {Animated} from 'react-native';

export type Props = {
  name: string;
  baseEnthusiasmLevel?: number;
};

const BottomStackNavigator = createBottomTabNavigator();

const {height, width} = Dimensions.get('screen');

const App: React.FC<Props> = () => {
  const op = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(op, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [op]);
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#000000" barStyle={'light-content'} />
      <BottomStackNavigator.Navigator
        initialRouteName="HomeStack"
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            ...styles.tabContainer,
            opacity: op,
          },
        }}>
        <BottomStackNavigator.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <ProfileSVG colorMode={focused ? 'inline' : 'outline'} />
              </View>
            ),
          }}
        />
        <BottomStackNavigator.Screen
          name="FavoritesStack"
          component={FavoritesStack}
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <FavoritesSVG colorMode={focused ? 'inline' : 'outline'} />
              </View>
            ),
          }}
        />
        <BottomStackNavigator.Screen
          name="MapStack"
          component={MapStack}
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <MapSVG colorMode={focused ? 'inline' : 'outline'} />
              </View>
            ),
          }}
        />
        <BottomStackNavigator.Screen
          name="SearchStack"
          component={SearchStack}
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <SearchSVG colorMode={focused ? 'inline' : 'outline'} />
              </View>
            ),
          }}
        />
        <BottomStackNavigator.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <HomeSVG colorMode={focused ? 'inline' : 'outline'} />
              </View>
            ),
          }}
        />
      </BottomStackNavigator.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: '#1C1C1C',
    borderWidth: 0,
    position: 'absolute',
    width: width * 0.9,
    bottom: height * 0.02,
    left: width * 0.05,
    borderRadius: 4,
    borderTopWidth: 0,
  },
});

export default App;
