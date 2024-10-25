// TickIcon.js
import React from 'react';
import Svg, { Path } from 'react-native-svg';

const TickIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
    <Path
      d="M9 16.17L4.83 12a.996.996 0 10-1.41 1.41l5 5c.39.39 1.02.39 1.41 0l12-12a.996.996 0 10-1.41-1.41L9 16.17z"
      fill="#FFF"
    />
  </Svg>
);

export default TickIcon;
