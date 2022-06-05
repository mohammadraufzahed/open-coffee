import React, {useEffect} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Cover from '../Cover';
const {width} = Dimensions.get('window');

const SliderItem: React.FC = () => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.9}>
      <View>
        <Cover />
        <View style={styles.content}>
          <Text style={styles.title}>تخفیف ویژه دوشنبه ها</Text>
          <View style={styles.store}>
            <Text style={styles.storeText}>کافه ستاک</Text>
            <Icon name="arrow-left" color="white" style={styles.icon} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: width,
    position: 'relative',
    flex: 1,
    alignItems: 'center',
  },
  content: {
    direction: 'rtl',
    right: width * 0.03,
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
    opacity: 0.7,
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
