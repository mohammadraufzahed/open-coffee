import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {View, StyleSheet, Dimensions, Text, ScrollView} from 'react-native';
import Profile from '../components/Profile';
import {ProfileScreens} from '../stacks/ProfileStack';
import FaqSVG from '../Svgs/FaqSVG';
import LogoutSVG from '../Svgs/LogoutSVG';
import ReceiptItemSVG from '../Svgs/ReceiptItemSVG';
import StorebagSVG from '../Svgs/StorebagSVG';
import UserSVG from '../Svgs/UserSVG';
type NavigationPropsCustom = NativeStackNavigationProp<
  ProfileScreens,
  'Profile'
>;
const {width, height} = Dimensions.get('screen');

const ProfilePage: React.FC = () => {
  const navigation = useNavigation<NavigationPropsCustom>();
  return (
    <View style={styles.container}>
      <Profile />
      <ScrollView contentContainerStyle={styles.options}>
        <View
          style={styles.option}
          onTouchEnd={() => navigation.navigate('OrderHistory')}>
          <Text style={styles.optionText}>تاریخچه سفارشات</Text>
          <StorebagSVG />
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>پرسش های پرتکرار</Text>
          <FaqSVG />
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>صورت حساب مالی</Text>
          <ReceiptItemSVG />
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>ویرایش حساب کاربری</Text>
          <UserSVG />
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>خروج از حساب کاربری</Text>
          <LogoutSVG />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#000000', alignItems: 'center'},
  options: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginTop: height * 0.03,
    width: width * 0.95,
  },
  option: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: height * 0.02,
  },
  optionText: {
    marginRight: width * 0.06,
    color: 'white',
    fontSize: 16,
    fontFamily: 'IRANSansX-Regular',
  },
});

export default ProfilePage;
