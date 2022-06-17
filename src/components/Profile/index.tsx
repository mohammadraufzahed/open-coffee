import React from 'react';
import {Pressable, View, Text, StyleSheet, Dimensions} from 'react-native';
import AnonymouseUser from '../../Svgs/AnonymouseUser';

const {width, height} = Dimensions.get('screen');

const Profile = () => {
  return (
    <View style={styles.profile}>
      <View style={styles.avatar}>
        <AnonymouseUser />
      </View>
      <Text style={styles.userName}>کاربر مهمان</Text>
      <Pressable style={styles.loginButton}>
        <Text style={styles.loginText}>ورود / ثبت نام</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    marginTop: height * 0.04,
    backgroundColor: '#171717',
    width: width * 0.95,
    height: height * 0.3,
    marginHorizontal: 'auto',
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
});

export default Profile;
