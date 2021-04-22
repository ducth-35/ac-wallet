import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgRssSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 5v4c9.93 0 18 8.07 18 18h4C27 14.85 17.15 5 5 5zm0 7v4c6.07 0 11 4.93 11 11h4c0-8.28-6.72-15-15-15zm3 9a3 3 0 100 6 3 3 0 000-6z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgRssSolid;
