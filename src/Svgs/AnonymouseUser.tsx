import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Circle,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

const AnonymouseUser = (props: SvgProps) => (
  <Svg width={80} height={80} fill="none" {...props}>
    <Path
      d="M66.701 63.3c-15.729 12.11-37.668 12.013-53.29-.236l11.45-5.367a11.023 11.023 0 0 0 2.01-1.224 10.904 10.904 0 0 0 3.007-3.55 10.514 10.514 0 0 0 1.091-3.407c.115-.772.173-1.552.174-2.332 0-1.346-.072-2.692-.087-4.04-.009-.747-.017-1.493-.023-2.238l.47.236 1.224.633.567.096 6.56 1.115 7.322 1.247.222 7.53.073 2.46.035 1.196v.078l2.847 1.157L66.7 63.3Z"
      fill="#DE8276"
    />
    <Path
      d="M47.459 55.03c-.809.139-1.64.01-2.37-.367L31.05 43.185c-.016-.532-.03.026-.037-.506-.01-.747-.018-1.492-.024-2.238l.47.236 1.224.633.567.096 6.56 1.115 7.323 1.248.22 7.529.074 2.461.035 1.195v.078l-.002-.002Z"
      fill="#A76962"
    />
    <Path
      d="M54.706 34.57c-.366.383-.767.73-1.198 1.038-2.447 1.772-5.713 2.353-8.503 3.308-1.177.402-13.934 4.028-13.934 4.817 0-.172-1.25-1.412-2.824-2.918a18.802 18.802 0 0 1-4.602-20.174c2.567-6.746 10.75-11.396 17.604-12.47 3.264-.511 7.137-.796 10.151.769 1.541.802 2.824 1.971 4 3.268.367.41.723.827 1.068 1.254.148.179.294.357.438.539 5.358 6.73 3.459 14.623-2.2 20.57Z"
      fill="url(#a)"
    />
    <Path
      d="M54.706 34.57c-.366.383-.767.73-1.198 1.038-.1-.175-.19-.355-.27-.54-.621-1.413-.941-2.944-1.177-4.471a64.896 64.896 0 0 1-.75-6.711c-.215-3.61-1.756-5.4 1.31-8.214a10.117 10.117 0 0 1 3.847-2.207c.148.179.294.357.438.539 5.358 6.727 3.459 14.62-2.2 20.567Z"
      fill="url(#b)"
    />
    <Circle cx={28.718} cy={34.322} r={4} fill="#E18477" />
    <Circle cx={29.988} cy={34.323} fill="#A76962" r={3.581} />
    <Path
      d="M30.287 30.53c.195 2.555.188 5.675.257 6.588.177 2.288.352 4.576.527 6.863l15.632 9.132a4.65 4.65 0 0 0 5.808-2.318c2.249-4.607 5.858-11.882 5.383-14.588-.706-4-2.588-5.412-2.588-5.412l.783-4.691c.793-4.77-.842-9.285-6.414-9.807-1.176-.109-2.487.115-3.186 1.054-1.882 2.531-.797 5.647-3.623 8-3.43 2.83-11.085 4.066-12.878 1.78 0 0 .165 1.617.299 3.398Z"
      fill="#DE8276"
    />
    <Path
      d="M42.019 40.512a7.006 7.006 0 0 0 4.362 2.28M47.576 29.402c-.018.083 3.144 8.502 3.144 8.502l-4.221.204M37.581 27.77a18.96 18.96 0 0 1 6.619-.188M51.475 27.8c1.345-.313 2.731-.409 4.106-.284"
      stroke="#00214E"
    />
    <Path
      d="M66.701 63.3c-15.729 12.11-37.668 12.013-53.29-.236l11.45-5.367a11.023 11.023 0 0 0 2.01-1.224 10.906 10.906 0 0 0 3.007-3.55 10.514 10.514 0 0 0 1.091-3.407c.167.16.34.313.523.456a22.388 22.388 0 0 0 7.125 3.518 22.003 22.003 0 0 0 7.764.82c.362-.027.727-.063 1.09-.089l.035 1.196v.078l2.847 1.157L66.7 63.3ZM40.788 30.414c1.436 0 1.436 2.207 0 2.219h-.066c-1.437 0-1.437-2.207 0-2.219h.066ZM52.584 30.088c1.331.012 1.331 2.047 0 2.059h-.062c-1.331 0-1.331-2.047 0-2.06h.062Z"
      fill="#00214E"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={22.435}
        y1={43.742}
        x2={60.078}
        y2={43.742}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#16243F" />
        <Stop offset={1} stopColor="#6878B1" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={44.605}
        y1={28.021}
        x2={60.388}
        y2={32.499}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#16243F" />
        <Stop offset={1} stopColor="#6878B1" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default AnonymouseUser;