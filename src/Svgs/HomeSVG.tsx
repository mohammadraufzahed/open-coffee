import React from 'react';
import Svg, {Path} from 'react-native-svg';
type props = {
  style?: object;
  color?: string | null;
  colorMode?: 'inline' | 'outline';
};
const HomeSVG: React.FC<props> = ({style, color, colorMode}) => {
  const pathColor = color ?? '#fff';
  return (
    <Svg width={24} height={24} fill="none" style={style}>
      <Path
        d="m9.02 3.12-5.39 4.2C2.73 8.02 2 9.51 2 10.64v7.41c0 2.32.89 4.22 3.21 4.22l2.286.006A1.5 1.5 0 0 0 9 20.776V15.78a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5v4.996a1.5 1.5 0 0 0 1.504 1.5l2.286-.006c2.32 0 3.21-1.9 3.21-4.21v-7.28c0-1.21-.81-2.76-1.8-3.45L14.02 3c-1.4-.98-3.65-.93-5 .12Z"
        fill={colorMode === 'inline' ? pathColor : 'none'}
        stroke={colorMode === 'outline' ? pathColor : 'none'}
      />
    </Svg>
  );
};
HomeSVG.defaultProps = {colorMode: 'outline'};

export default HomeSVG;
