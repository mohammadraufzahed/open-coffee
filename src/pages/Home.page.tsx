import React from 'react';
import {StyleSheet, View} from 'react-native';
import FiltersContainer from '../components/FiltersContainer';
import Slider from '../components/Slider';
import StoreList from '../components/StoreList';
const HomePage: React.FC = () => {
  return (
    <View style={{...styles.container}}>
      <Slider />
      <FiltersContainer />
      <StoreList />
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
