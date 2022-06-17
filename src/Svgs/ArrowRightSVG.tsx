import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const ArrowRightSVG = (props: SvgProps) => (
  <Svg {...props} width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path
      d="M14.4299 5.92969L20.4999 11.9997L14.4299 18.0697"
      stroke="white"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.5 12H20.33"
      stroke="white"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ArrowRightSVG;
