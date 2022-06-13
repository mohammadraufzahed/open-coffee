import React from 'react';
import Svg, {Path} from 'react-native-svg';
type props = {
  style?: object;
  color?: string | null;
  colorMode?: 'inline' | 'outline';
};
const MapSVG: React.FC<props> = ({style, color, colorMode}) => {
  const pathColor = color ?? '#fff';
  return (
    <Svg width={24} height={24} fill="none" style={style}>
      <Path
        d="M12 10.69a2.898 2.898 0 1 1 0-5.798 2.898 2.898 0 1 1 0 5.798Zm0-4.672a1.776 1.776 0 1 0-.002 3.557A1.776 1.776 0 0 0 12 6.018Z"
        fill={pathColor}
        stroke={pathColor}
        strokeWidth={0.25}
      />
      <Path
        d="M11.998 18.133c-1.11 0-1.228-.42-2.098-1.253-2.213-2.13-5.658-6.527-4.735-10.57C5.997 2.643 9.2 1 11.998 1h.007c2.797 0 6 1.643 6.832 5.317.916 4.043-2.53 8.433-4.742 10.563-.87.832-.988 1.253-2.098 1.253Zm0-16.008c-2.183 0-4.988 1.163-5.73 4.433-.81 3.532 2.41 7.577 4.42 9.505 1.297 1.252 1.33 1.252 2.627 0 2.003-1.928 5.223-5.973 4.428-9.505-.75-3.27-3.563-4.433-5.745-4.433Z"
        fill={pathColor}
        stroke={pathColor}
        strokeWidth={colorMode === 'inline' ? 1 : 0.35}
      />
      <Path
        d="M7 18.063H5.78a1 1 0 0 0-.97.757l-.5 2a1 1 0 0 0 .97 1.242h13.44a1 1 0 0 0 .97-1.242l-.5-2a1 1 0 0 0-.97-.758H17"
        stroke={pathColor}
        fill={colorMode === 'inline' ? pathColor : 'none'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

MapSVG.defaultProps = {colorMode: 'outline'};

export default MapSVG;
