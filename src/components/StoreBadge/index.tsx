import React from 'react';
import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';
import {FilterItemTypes} from '../../types/FilterItem';
import Icon from '../Icon';

export type props = {
  type: FilterItemTypes;
};

const {width, height} = Dimensions.get('screen');

const StoreBadge: React.FC<props> = ({type}) => {
  return (
    <TouchableOpacity activeOpacity={0.9}>
      <View style={{...styles.container, ...styles[`${type}Container`]}}>
        <Icon name={type} color="black" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: width * 0.035,
    paddingVertical: height * 0.007,
    borderRadius: 17,
  },
  outdoorContainer: {
    backgroundColor: '#FFC082',
  },
  outdoorFoodContainer: {
    backgroundColor: '#FFB5A3',
  },
  workContainer: {
    backgroundColor: '#77D9DF',
  },
  smokeContainer: {
    backgroundColor: '#98A3E6',
  },
  allContainer: {},
});

export default StoreBadge;
