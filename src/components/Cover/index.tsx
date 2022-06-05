import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

type Props = {};

const Cover: React.FC<Props> = () => {
  const image = require('../../../public/images/covers/1.png');
  return (
    <View style={styles.container}>
      <Image source={image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
  },
});

export default Cover;
