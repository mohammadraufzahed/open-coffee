import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LocationSVG from '../../Svgs/LocationSVG';
import StoreBadge from '../StoreBadge';

const {width, height} = Dimensions.get('screen');

const StoreBox = () => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.9}>
      <View style={styles.content}>
        <Text style={styles.title}>کافه فرشته</Text>
        <View style={styles.locationContainer}>
          <Text style={styles.location}>تهران - خیابان آقابزرگی</Text>
          <LocationSVG />
        </View>
        <View style={styles.badgesContainer}>
          <StoreBadge type="outdoor" margin />
          <StoreBadge type="outdoorFood" margin />
          <StoreBadge type="work" margin />
          <StoreBadge type="smoke" margin />
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/images/covers/2.png')}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: height * 0.17,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderRadius: 4,
    backgroundColor: '#121212',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginRight: width * 0.05,
    marginTop: height * 0.02,
  },
  imageContainer: {},
  image: {height: height * 0.17},
  title: {
    color: 'white',
    fontFamily: 'IRANSansX-Medium',
    fontSize: 18,
  },
  location: {
    color: 'white',
    fontFamily: 'IRANSansX-Medium',
    fontSize: 12,
    marginRight: 6.25,
  },
  locationContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: height * 0.01,
  },
  badgesContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: height * 0.02,
  },
});

export default StoreBox;
