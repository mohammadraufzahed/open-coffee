import React from 'react';
import Svg, {Path} from 'react-native-svg';
type props = {
  style?: object;
  color?: string;
};
const WorkSVG: React.FC<props> = ({style, color}) => (
  <Svg width={12} height={12} fill="none" style={style} color="red">
    <Path
      d="M5 8.475H3.105C1.42 8.475 1 8.055 1 6.37v-3c0-1.685.42-2.105 2.105-2.105H8.37c1.685 0 2.105.42 2.105 2.105M5 10.735v-2.26M1 6.475h4M3.37 10.735H5"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11 6.4v2.855c0 1.185-.295 1.48-1.48 1.48H7.745c-1.185 0-1.48-.295-1.48-1.48V6.4c0-1.185.295-1.48 1.48-1.48H9.52c1.185 0 1.48.295 1.48 1.48ZM8.622 9.125h.005"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

WorkSVG.defaultProps = {color: '#77D9DF'};

export default WorkSVG;
