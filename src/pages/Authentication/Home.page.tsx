import React from 'react';
import {StyleSheet, View} from 'react-native';
import Slider from '../../components/Slider';
const HomePage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Slider />
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
