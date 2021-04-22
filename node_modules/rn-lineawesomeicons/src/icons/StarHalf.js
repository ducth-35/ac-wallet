import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgStarHalf(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 2.133l-4.164 9.34-10.172 1.074 7.598 6.848L7.14 29.398 16 24.29V2.133z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgStarHalf;
