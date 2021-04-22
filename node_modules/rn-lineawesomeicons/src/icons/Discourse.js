import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgDiscourse(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16.11 3C8.993 3 3 8.716 3 15.773L3.006 29l13.103-.012C23.23 28.988 29 23.051 29 15.994 29 8.937 23.23 3 16.11 3zM16 8a8 8 0 010 16 7.96 7.96 0 01-3.908-1.023L8 24l1.121-3.93A7.946 7.946 0 018 16a8 8 0 018-8z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgDiscourse;
