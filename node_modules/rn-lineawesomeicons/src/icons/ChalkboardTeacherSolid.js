import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgChalkboardTeacherSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M4 6v2h22v16H12v2h18v-2h-2V6H4zm4.002 3A4.016 4.016 0 004 13c0 2.199 1.804 4 4.002 4A4.014 4.014 0 0012 13c0-2.197-1.802-4-3.998-4zM14 10v2h5v-2h-5zm7 0v2h3v-2h-3zM8.002 11C9.116 11 10 11.883 10 13c0 1.12-.883 2-1.998 2C6.882 15 6 14.12 6 13c0-1.117.883-2 2.002-2zM14 14v2h10v-2H14zM4 18v8h2v-6h3v6h2v-5.342l2.065 1.092a2 2 0 001.87 0v.002l3.532-1.867-.934-1.77-3.531 1.867-3.096-1.634A3.004 3.004 0 009.504 18H4z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgChalkboardTeacherSolid;
