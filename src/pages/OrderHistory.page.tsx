import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import OrderHistoryList from '../components/OrderHistoryList';
import Profile from '../components/Profile';
import {ProfileScreens} from '../stacks/ProfileStack';
import ArrowRightSVG from '../Svgs/ArrowRightSVG';
import StorebagSVG from '../Svgs/StorebagSVG';

const {height, width} = Dimensions.get('screen');
type NavigationPropsCustom = NativeStackNavigationProp<
  ProfileScreens,
  'Profile'
>;

const OrderHistoryPage: React.FC = () => {
  const navigation = useNavigation<NavigationPropsCustom>();
  return (
    <View style={styles.container}>
      <Profile />
      <View style={styles.header}>
        <Text style={styles.title}>تاریخچه سفارشات</Text>
        <StorebagSVG />
        <ArrowRightSVG
          style={styles.arrow}
          onPress={() => navigation.goBack()}
        />
      </View>
      <OrderHistoryList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: height * 0.03,
    alignItems: 'center',
    width: width,
    justifyContent: 'center',
    position: 'relative',
  },
  title: {
    color: 'white',
    marginRight: width * 0.03,
    fontSize: 16,
    fontFamily: 'IRANSansX-Medium',
  },
  arrow: {
    position: 'absolute',
    right: width * 0.02,
  },
});

export default OrderHistoryPage;
