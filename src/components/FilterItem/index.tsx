import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FilterItemProps, FilterItemTypes} from '../../types/FilterItem';
import OutdoorSVG from '../../Svgs/OutdoorSVG';
import OutdoorFoodSVG from '../../Svgs/OutdoorFoodSVG';
import WorkSVG from '../../Svgs/WorkSVG';
import SmokeSVG from '../../Svgs/SmokeSVG';

const names = {
  all: 'همه',
  outdoor: 'فضای باز',
  outdoorFood: 'بیرون بر',
  smoke: 'مناسب سیگار',
  work: 'کار',
};

type IconProps = {
  name: FilterItemTypes;
};

const Icon: React.FC<IconProps> = ({name}) => {
  return name === 'all' ? null : name === 'outdoor' ? (
    <OutdoorSVG style={styles.buttonIcon} />
  ) : name === 'outdoorFood' ? (
    <OutdoorFoodSVG style={styles.buttonIcon} />
  ) : name === 'smoke' ? (
    <SmokeSVG style={styles.buttonIcon} />
  ) : name === 'work' ? (
    <WorkSVG style={styles.buttonIcon} />
  ) : null;
};

/**
 * @name FilterItem
 * @description Filter item
 * @example
 * <FilterItem type="smoke" />
 */

const FilterItem: React.FC<FilterItemProps> = ({type}) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.9}>
      {type === 'all' ? (
        <View style={{...styles.buttonView, ...styles.allButtonView}}>
          <Text style={{...styles.buttonText, ...styles.allButtonText}}>
            {names[type]}
          </Text>
        </View>
      ) : (
        <View style={{...styles.buttonView, ...styles[`${type}ButtonView`]}}>
          <Text style={{...styles.buttonText, ...styles[`${type}ButtonText`]}}>
            {names[type]}
          </Text>
          <Icon name={type} />
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
  },
  buttonView: {
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 34,
  },
  buttonText: {
    fontFamily: 'IRANSansX-Light',
  },
  buttonIcon: {
    marginLeft: 10,
  },
  allButtonView: {
    backgroundColor: '#C49D68',
    borderWidth: 1,
    borderColor: '#C49D68',
    width: 52,
  },
  allButtonText: {
    color: 'black',
    fontFamily: 'IRANSansX-Bold',
  },
  outdoorButtonView: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#FFC082',
    width: 94,
  },
  outdoorButtonText: {
    color: '#FFC082',
    fontFamily: 'IRANSansX-Light',
  },
  outdoorFoodButtonView: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#FFB5A3',
    width: 90,
  },
  outdoorFoodButtonText: {
    color: '#FFB5A3',
    fontFamily: 'IRANSansX-Light',
  },
  workButtonView: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#77D9DF',
    width: 101,
  },
  workButtonText: {
    color: '#77D9DF',
    fontFamily: 'IRANSansX-Light',
  },
  smokeButtonView: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#98A3E6',
    width: 116,
  },
  smokeButtonText: {
    color: '#98A3E6',
    fontFamily: 'IRANSansX-Light',
  },
});

export default FilterItem;
