import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const NotFound = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Under the development</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  text: {
    color: 'white',
    fontFamily: 'IRANSansX-Bold',
    fontSize: 32,
  },
});

export default NotFound;
