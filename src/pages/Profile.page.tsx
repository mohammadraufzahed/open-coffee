import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Pressable,
  ScrollView,
} from 'react-native';
import AnonymouseUser from '../Svgs/AnonymouseUser';
import FaqSVG from '../Svgs/FaqSVG';
import LogoutSVG from '../Svgs/LogoutSVG';
import ReceiptItemSVG from '../Svgs/ReceiptItemSVG';
import StorebagSVG from '../Svgs/StorebagSVG';
import UserSVG from '../Svgs/UserSVG';

const {width, height} = Dimensions.get('screen');

const ProfilePage: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.avatar}>
          <AnonymouseUser />
        </View>
        <Text style={styles.userName}>کاربر مهمان</Text>
        <Pressable style={styles.loginButton}>
          <Text style={styles.loginText}>ورود / ثبت نام</Text>
        </Pressable>
      </View>
      <ScrollView contentContainerStyle={styles.options}>
        <View style={styles.option}>
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
  profile: {
    marginTop: height * 0.04,
    backgroundColor: '#171717',
    width: width * 0.95,
    height: height * 0.3,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: height * 0.02,
  },
  avatar: {
    backgroundColor: '#292929',
    borderRadius: 8,
    paddingHorizontal: width * 0.02,
    paddingVertical: height * 0.005,
  },
  userName: {
    color: '#FFFFFFDE',
    fontFamily: 'IRANSansX-Regular',
    fontSize: 18,
    marginVertical: height * 0.025,
    opacity: 0.87,
  },
  loginButton: {
    backgroundColor: '#C49D68',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.35,
    height: height * 0.045,
    borderRadius: 5,
  },
  loginText: {
    color: 'white',
    fontFamily: 'IRANSansX-Bold',
  },
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
