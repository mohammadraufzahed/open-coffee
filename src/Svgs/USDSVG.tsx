import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const USDSVG = (props: SvgProps) => (
  <Svg width={8} height={14} fill="none" {...props}>
    <Path
      d="M1 9.5c0 1.384.89 2.5 1.997 2.5h2.258C6.217 12 7 11.024 7 9.822c0-1.31-.477-1.77-1.187-2.07L2.187 6.248C1.477 5.949 1 5.487 1 4.179 1 2.975 1.783 2 2.745 2h2.258C6.109 2 7 3.116 7 4.5M4 1v12"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default USDSVG;
