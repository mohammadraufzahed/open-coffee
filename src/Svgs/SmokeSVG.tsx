import React from 'react';
import Svg, {Path} from 'react-native-svg';
type props = {
  style?: object;
};
const SmokeSVG: React.FC<props> = ({style}) => (
  <Svg width={12} height={12} fill="none" style={style}>
    <Path
      d="M.375 5.625v2.813h8.063V5.624H.374Zm7.313 2.063H1.125V6.375h6.563v1.313ZM9 5.624h.75v2.813H9V5.624Zm1.313 0h.75v2.813h-.75V5.624Zm-1.28-1.563a.75.75 0 0 1 .055-.9 1.494 1.494 0 0 0 .081-1.845l-.137-.192h-.857l-.043.03.427.598a.745.745 0 0 1-.04.92 1.502 1.502 0 0 0-.11 1.805l.14.21h.902l-.418-.626Zm1.688 0a.75.75 0 0 1 .054-.9 1.494 1.494 0 0 0 .082-1.845l-.137-.192h-.857l-.043.03.427.598a.745.745 0 0 1-.041.92 1.502 1.502 0 0 0-.11 1.805l.14.21h.902l-.417-.626Z"
      fill="#98A3E6"
    />
  </Svg>
);

export default SmokeSVG;
