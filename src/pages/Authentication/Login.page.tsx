import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {Button, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootNavigationType} from '../../types/RootNavigationType';
const LoginPage: React.FC<NativeStackScreenProps<RootNavigationType>> = ({
  navigation,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>سلام</Text>
      <Button title="Hiii" onPress={() => navigation.push('Login')} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    direction: 'rtl',
  },
});

export default LoginPage;
