import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

const {width, height} = Dimensions.get('screen');

const OrderHistoryItem: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.tableNumber}>میز شماره 2</Text>
        <Text style={styles.storeName}>کافه فرشته</Text>
        <Image
          source={require('../../../assets/images/orderHistory.png')}
          resizeMode="cover"
        />
      </View>
      <View style={styles.content}>
        <View style={styles.item}>
          <Text style={styles.itemCount}>1</Text>
          <View style={styles.line} />
          <Text style={styles.itemName}>قهوه عربی</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemCount}>1</Text>
          <View style={styles.line} />
          <Text style={styles.itemName}>قهوه عربی</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemCount}>1</Text>
          <View style={styles.line} />
          <Text style={styles.itemName}>قهوه عربی</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#171717',
    width: width * 0.95,
    minHeight: height * 0.15,
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.02,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  tableNumber: {
    color: 'white',
    fontFamily: 'IRANSansX-Regular',
    fontSize: 14,
    marginRight: width * 0.31,
  },
  storeName: {
    color: 'white',
    justifyContent: 'flex-start',
    fontFamily: 'IRANSansX-Regular',
    fontSize: 14,
    marginRight: width * 0.05,
  },
  content: {
    marginVertical: height * 0.02,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: height * 0.008,
  },
  itemName: {color: 'white', fontFamily: 'IRANSansX-Regular', fontSize: 12},
  line: {
    width: '70%',
    height: 2,
    backgroundColor: 'white',
  },
  itemCount: {color: 'white', fontFamily: 'IRANSansX-Regular', fontSize: 12},
});

export default OrderHistoryItem;
