import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const DateSVG = (props: SvgProps) => (
  <Svg width={18} height={18} fill="none" {...props}>
    <Path
      d="M6 1.5v2.25M12 1.5v2.25M2.625 6.817h12.75M16.5 14.25a2.94 2.94 0 0 1-.435 1.545A2.977 2.977 0 0 1 13.5 17.25a2.929 2.929 0 0 1-1.973-.75 2.695 2.695 0 0 1-.592-.705 2.94 2.94 0 0 1-.435-1.545 3 3 0 1 1 6 0Z"
      stroke="#292D32"
      strokeWidth={1.2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m12.33 14.25.743.742 1.597-1.477"
      stroke="#292D32"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.75 6.375v5.895a3 3 0 0 0-5.25 1.98c0 .563.158 1.095.435 1.545.157.27.36.51.592.705H6c-2.625 0-3.75-1.5-3.75-3.75V6.375c0-2.25 1.125-3.75 3.75-3.75h6c2.625 0 3.75 1.5 3.75 3.75Z"
      stroke="#292D32"
      strokeWidth={1.2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.997 10.275h.006M6.22 10.275h.007M6.22 12.525h.007"
      stroke="#292D32"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default DateSVG;
