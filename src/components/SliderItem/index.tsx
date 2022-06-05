import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Cover from '../Cover';

const SliderItem: React.FC = () => {
  return (
    <View style={styles.container}>
      <Cover />
      <View style={styles.content}>
        <Text style={styles.title}>تخفیف ویژه دوشنبه ها</Text>
        <View style={styles.store}>
          <Text style={styles.storeText}>کافه ستاک</Text>
          <Icon name="arrow-left" color="white" style={styles.icon} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  content: {
    direction: 'rtl',
    right: 10,
    flex: 1,
    flexDirection: 'column',
    position: 'absolute',
    bottom: 15,
  },
  title: {
    color: 'white',
    fontFamily: 'IRANSansX-Medium',
    fontSize: 20,
    marginBottom: 10,
  },
  store: {
    opacity: 0.8,
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  storeText: {
    color: 'white',
    fontFamily: 'IRANSansX-Light',
  },
  icon: {marginRight: 10, fontSize: 12},
});

export default SliderItem;
