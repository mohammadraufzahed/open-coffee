import React from 'react';
import Svg, {Path} from 'react-native-svg';
type props = {
  style?: object;
};
const OutdoorFoodSVG: React.FC<props> = ({style}) => (
  <Svg width={12} height={12} fill="none" style={style}>
    <Path
      d="m5 8.25 1.5.5S10.25 8 10.75 8s.5.5 0 1S8.5 11 7 11s-2.5-.75-3.5-.75H1"
      stroke="#FFB5A3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4 4.5v-2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v4M1 7.25C1.5 6.75 2.5 6 3.5 6s3.375 1 3.75 1.5-.75 1.25-.75 1.25L1 7.25Z"
      stroke="#FFB5A3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.25 2h2.5v2.25h-2.5V2Z"
      stroke="#FFB5A3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default OutdoorFoodSVG;
