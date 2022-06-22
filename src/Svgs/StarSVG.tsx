import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const StarSVG = (props: SvgProps) => (
  <Svg width={15} height={12} fill="none" {...props}>
    <Path
      d="m6.865 1.755.88 1.76c.12.245.44.48.71.525l1.595.265c1.02.17 1.26.91.525 1.64l-1.24 1.24c-.21.21-.325.615-.26.905l.355 1.535c.28 1.215-.365 1.685-1.44 1.05L6.495 9.79c-.27-.16-.715-.16-.99 0l-1.495.885c-1.07.635-1.72.16-1.44-1.05l.355-1.535c.065-.29-.05-.695-.26-.905l-1.24-1.24c-.73-.73-.495-1.47.525-1.64l1.595-.265c.265-.045.585-.28.705-.525l.88-1.76C5.61.8 6.39.8 6.865 1.755Z"
      stroke="#C49D68"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default StarSVG;
