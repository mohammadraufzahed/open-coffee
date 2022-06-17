import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const StorebagSVG = (props: SvgProps) => (
  <Svg {...props} width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path
      d="M2.88538 6.47699C2.95017 5.69956 3.60007 5.10156 4.3802 5.10156H19.6198C20.3999 5.10156 21.0498 5.69956 21.1146 6.47699L22.3195 20.9355C22.4167 22.1015 21.4965 23.1016 20.3264 23.1016H3.6736C2.50352 23.1016 1.58334 22.1015 1.68051 20.9355L2.88538 6.47699Z"
      stroke="white"
      strokeWidth={1.5}
    />
    <Path
      d="M16.5 7.64844V5.39844C16.5 2.91316 14.4853 0.898438 12 0.898438V0.898438C9.51472 0.898438 7.5 2.91316 7.5 5.39844V7.64844"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);

export default StorebagSVG;
