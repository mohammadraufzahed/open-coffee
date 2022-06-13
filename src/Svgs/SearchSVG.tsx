import React from 'react';
import Svg, {Path} from 'react-native-svg';
type props = {
  style?: object;
  color?: string | null;
  colorMode?: 'inline' | 'outline';
};
const SearchSVG: React.FC<props> = ({style, color, colorMode}) => {
  const pathColor = color ?? '#fff';
  return (
    <Svg
      width={24}
      height={24}
      fill={colorMode === 'inline' ? pathColor : 'none'}
      style={style}>
      <Path
        d="M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM22 22l-2-2"
        stroke={colorMode === 'outline' ? pathColor : 'none'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

SearchSVG.defaultProps = {colorMode: 'outline'};

export default SearchSVG;
