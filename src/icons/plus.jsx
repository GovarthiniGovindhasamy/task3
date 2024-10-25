// PlusIcon.js
import React from 'react';
import Svg, { Circle, Line } from 'react-native-svg';

const PlusIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="11" stroke="#FF0000" strokeWidth="2" />
    <Line x1="12" y1="7" x2="12" y2="17" stroke="#FF0000" strokeWidth="2" />
    <Line x1="7" y1="12" x2="17" y2="12" stroke="#FF0000" strokeWidth="2" />
  </Svg>
);

export default PlusIcon;
