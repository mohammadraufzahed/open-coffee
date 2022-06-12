import React from 'react';
import Svg, {Path} from 'react-native-svg';
type props = {
  style?: object;
  color?: string | null;
};
const LocationSVG: React.FC<props> = ({style, color}) => {
  const pathColor = color ?? '#fff';
  return (
    <Svg width={16} height={16} fill="none" style={style}>
      <Path
        d="M8 8.953a2.08 2.08 0 1 0 0-4.16 2.08 2.08 0 0 0 0 4.16Z"
        stroke={pathColor}
      />
      <Path
        d="M2.413 5.66c1.314-5.774 9.867-5.767 11.174.006.766 3.387-1.34 6.254-3.187 8.027a3.462 3.462 0 0 1-4.807 0c-1.84-1.773-3.946-4.647-3.18-8.033Z"
        stroke={pathColor}
      />
    </Svg>
  );
};

export default LocationSVG;
