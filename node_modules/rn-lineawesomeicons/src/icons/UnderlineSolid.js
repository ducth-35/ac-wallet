import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgUnderlineSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M8 4v12c0 4.43 3.57 8 8 8s8-3.57 8-8V4h-2v12c0 3.371-2.629 6-6 6s-6-2.629-6-6V4H8zM6 26v2h20v-2H6z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgUnderlineSolid;
