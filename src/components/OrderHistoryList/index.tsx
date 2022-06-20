import React from 'react';
import {StyleSheet, FlatList, View, Dimensions} from 'react-native';
import OrderHistoryItem from '../OrderHistoryItem';

const {width, height} = Dimensions.get('screen');

const OrderHistoryList: React.FC = () => {
  return (
    <FlatList
      data={[0, 1, 2, 3, 4, 5]}
      keyExtractor={item => item.toString()}
      style={styles.baseContainer}
      renderItem={OrderHistoryItem}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => (
        <View style={{width, marginVertical: height * 0.02}} />
      )}
      alwaysBounceVertical
      bouncesZoom={true}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: height * 0.03,
    width: width * 0.95,
  },
  baseContainer: {
    marginBottom: height * 0.09,
  },
});

export default OrderHistoryList;
