import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import StoreMenu from '../components/StoreMenu';
import ArrowRightSVG from '../Svgs/ArrowRightSVG';
import HeartSVG from '../Svgs/HeartSVG';
import LocationSVG from '../Svgs/LocationSVG';
import StarSVG from '../Svgs/StarSVG';

const {width, height} = Dimensions.get('screen');

const StorePage: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerCover}>
          <Image
            source={require('../../assets/images/store.png')}
            style={styles.headerBackground}
            resizeMode="cover"
          />
          <View style={styles.headerMask} />
        </View>
        <View style={styles.headerTop}>
          <HeartSVG />
          <ArrowRightSVG />
        </View>
        <View style={styles.stars}>
          {[0, 1, 2, 3, 4].map(item => (
            <StarSVG fill={item < 3 ? '#C49D68' : 'none'} key={item} />
          ))}
        </View>
      </View>
      <View style={styles.titleContainer}>
        <View style={styles.location}>
          <Text style={styles.locationTitle}>تهران - خیابان اقابزرگی</Text>
          <LocationSVG />
        </View>
        <Text style={styles.storeName}>کافه فرشته</Text>
        <View style={styles.titleImageContainer}>
          <View style={styles.titleImagePlaceholder}>
            <Image
              source={require('../../assets/images/logo.png')}
              resizeMode="cover"
              style={styles.titleImage}
            />
          </View>
        </View>
      </View>
      <StoreMenu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: height,
    backgroundColor: '#000000',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  header: {
    width,
    height: height * 0.23,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  headerCover: {
    position: 'absolute',
    top: 0,
  },
  headerBackground: {
    width,
    height: height * 0.23,
  },
  headerMask: {
    width: '100%',
    height: '100%',
    zIndex: 1000,
    position: 'absolute',
    backgroundColor: 'black',
    bottom: 0,
    opacity: 0.3,
  },
  headerTop: {
    width,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.02,
    paddingVertical: height * 0.01,
  },
  stars: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: width * 0.03,
    marginBottom: height * 0.01,
  },
  titleContainer: {
    width: width * 0.96,
    height: height * 0.07,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  titleImage: {
    width: 50,
    height: 50,
  },
  titleImageContainer: {
    backgroundColor: 'black',
    transform: [{translateY: height * -0.035}],
    padding: width * 0.025,
    borderRadius: 300,
  },
  titleImagePlaceholder: {
    backgroundColor: '#171717',
    borderRadius: 150,
    padding: width * 0.01,
  },
  location: {
    display: 'flex',
    flexDirection: 'row',
  },
  locationTitle: {
    color: 'white',
    marginRight: width * 0.02,
    fontFamily: 'IRANSansX-Medium',
    fontSize: 12,
  },
  storeName: {
    color: 'white',
    fontFamily: 'IRANSansX-Medium',
    fontSize: 18,
    marginLeft: width * 0.13,
    marginRight: width * 0.05,
  },
});

export default StorePage;
