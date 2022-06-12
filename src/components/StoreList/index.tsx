import React from 'react';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import StoreBox from '../StoreBox';

const {width, height} = Dimensions.get('screen');

const seperator: React.FC = () => <View style={{height: height * 0.015}} />;

const StoreList = () => {
  return (
    <FlatList
      data={[0, 1, 2, 3, 4, 5, 6]}
      keyExtractor={(_, id) => id.toString()}
      renderItem={StoreBox}
      ItemSeparatorComponent={seperator}
      showsVerticalScrollIndicator={false}
      bounces
      alwaysBounceVertical
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.95,
    marginVertical: height * 0.035,
  },
});

export default StoreList;
