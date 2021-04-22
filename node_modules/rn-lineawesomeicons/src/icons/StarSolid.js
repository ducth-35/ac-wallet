import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgStarSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M30.336 12.547l-10.172-1.074L16 2.133l-4.164 9.34-10.172 1.074 7.598 6.848L7.14 29.398 16 24.29l8.86 5.11-2.122-10.005 7.598-6.847z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgStarSolid;
