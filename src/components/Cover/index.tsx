import React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';

type Props = {};

const {width} = Dimensions.get('screen');

const Cover: React.FC<Props> = () => {
  const image = require('../../../assets/images/covers/1.png');
  return (
    <View>
      <Image source={image} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: width * 0.95,
    borderRadius: 10,
  },
});

export default Cover;
