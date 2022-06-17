import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const UserSVG = (props: SvgProps) => (
  <Svg {...props} width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M19.2101 15.741L15.67 19.281C15.53 19.421 15.4 19.681 15.37 19.871L15.18 21.221C15.11 21.711 15.45 22.051 15.94 21.981L17.29 21.791C17.48 21.761 17.75 21.631 17.88 21.491L21.42 17.951C22.03 17.341 22.32 16.631 21.42 15.731C20.53 14.841 19.8201 15.131 19.2101 15.741Z"
      stroke="white"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18.7001 16.25C19.0001 17.33 19.84 18.17 20.92 18.47"
      stroke="white"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.40991 22C3.40991 18.13 7.25994 15 11.9999 15C13.0399 15 14.0399 15.15 14.9699 15.43"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default UserSVG;
