import React from 'react';
import Svg, {Path} from 'react-native-svg';
type props = {
  style?: object;
  color?: string | null;
  colorMode?: 'inline' | 'outline';
};
const ProfileSVG: React.FC<props> = ({style, color, colorMode}) => {
  const pathColor = color ?? '#fff';
  return (
    <Svg
      width={24}
      height={24}
      fill={colorMode === 'inline' ? pathColor : 'none'}
      style={style}>
      <Path
        d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM20.59 22c0-3.87-3.85-7-8.59-7s-8.59 3.13-8.59 7"
        stroke={colorMode === 'outline' ? pathColor : 'none'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

ProfileSVG.defaultProps = {colorMode: 'outline'};

export default ProfileSVG;
