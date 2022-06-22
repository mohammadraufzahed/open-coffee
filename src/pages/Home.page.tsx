import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import FiltersContainer from '../components/FiltersContainer';
import Slider from '../components/Slider';
import StoreList from '../components/StoreList';
import {HomeScreens} from '../stacks/HomeStack';

type NavigationPropsCustom = NativeStackNavigationProp<HomeScreens, 'Home'>;

const HomePage: React.FC = () => {
  const navigation = useNavigation<NavigationPropsCustom>();
  return (
    <View style={{...styles.container}}>
      <Slider />
      <FiltersContainer />
      <StoreList navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: 30,
  },
});

export default HomePage;
