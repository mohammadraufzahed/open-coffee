import React from 'react';
import Svg, {Path} from 'react-native-svg';

type props = {
  style?: object;
  color?: string | null;
};

const OutdoorSVG: React.FC<props> = ({style, color}) => {
  const pathColor = color ?? '#FFC082';
  return (
    <Svg width={13} height={12} fill="none" style={style}>
      <Path
        d="M1 11h11.5M10.79 10.56V8.33M10.8 5c-.61 0-1.1.49-1.1 1.1v1.135c0 .61.49 1.1 1.1 1.1.61 0 1.1-.49 1.1-1.1V6.1c0-.61-.49-1.1-1.1-1.1ZM6.776 10.56V6.926M6.792 1.5C5.798 1.5 5 2.298 5 3.292v1.85c0 .994.798 1.792 1.792 1.792s1.793-.798 1.793-1.792v-1.85c0-.994-.799-1.792-1.793-1.792ZM2.59 10.56V8.33M2.6 5c-.61 0-1.1.49-1.1 1.1v1.135c0 .61.49 1.1 1.1 1.1.61 0 1.1-.49 1.1-1.1V6.1c0-.61-.49-1.1-1.1-1.1Z"
        stroke={pathColor}
        strokeWidth={0.8}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default OutdoorSVG;
