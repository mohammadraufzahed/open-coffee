import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useRef} from 'react';
import {Animated, Dimensions, StyleSheet, View} from 'react-native';
import {HomeScreens} from '../../stacks/HomeStack';
import StoreBox from '../StoreBox';

const {width, height} = Dimensions.get('screen');

const seperator: React.FC = () => <View style={{height: height * 0.015}} />;
type NavigationPropsCustom = NativeStackNavigationProp<HomeScreens, 'Home'>;

type props = {
  navigation: NavigationPropsCustom;
};

const StoreList: React.FC<props> = ({navigation}) => {
  const viewOpacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(viewOpacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [viewOpacity]);
  return (
    <Animated.FlatList
      data={[0, 1, 2, 3, 4, 5, 6]}
      keyExtractor={(_, id) => id.toString()}
      renderItem={() => <StoreBox navigation={navigation} />}
      ItemSeparatorComponent={seperator}
      showsVerticalScrollIndicator={false}
      bounces
      alwaysBounceVertical
      style={{...styles.container, opacity: viewOpacity}}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.95,
    marginVertical: height * 0.035,
    marginBottom: height * 0.08,
  },
});

export default StoreList;
