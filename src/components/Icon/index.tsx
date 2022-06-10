import React from 'react';
import {StyleSheet} from 'react-native';
import OutdoorFoodSVG from '../../Svgs/OutdoorFoodSVG';
import OutdoorSVG from '../../Svgs/OutdoorSVG';
import SmokeSVG from '../../Svgs/SmokeSVG';
import WorkSVG from '../../Svgs/WorkSVG';
import {FilterItemTypes} from '../../types/FilterItem';

type IconProps = {
  name: FilterItemTypes;
  margin?: boolean;
  style?: object;
  color?: string | null;
};

const Icon: React.FC<IconProps> = ({name, margin, style, color}) => {
  const marginStyle = margin ? styles.buttonIcon : {};
  return name === 'all' ? null : name === 'outdoor' ? (
    <OutdoorSVG style={{...style, ...marginStyle}} color={color ?? null} />
  ) : name === 'outdoorFood' ? (
    <OutdoorFoodSVG
      style={margin ? styles.buttonIcon : {}}
      color={color ?? null}
    />
  ) : name === 'smoke' ? (
    <SmokeSVG style={margin ? styles.buttonIcon : {}} color={color ?? null} />
  ) : name === 'work' ? (
    <WorkSVG style={margin ? styles.buttonIcon : {}} color={color ?? null} />
  ) : null;
};

Icon.defaultProps = {color: null};

const styles = StyleSheet.create({
  buttonIcon: {
    marginLeft: 10,
  },
});

export default Icon;
