import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSith(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M4 4l3.734 6.361L5 10l3.248 4.059A7.96 7.96 0 008 16c0 .67.092 1.319.248 1.941L5 22l2.734-.361L4 28l6.361-3.734L10 27l4.059-3.248A7.96 7.96 0 0016 24a7.96 7.96 0 001.941-.248L22 27l-.361-2.734L28 28l-3.734-6.361L27 22l-3.248-4.059A7.96 7.96 0 0024 16a7.96 7.96 0 00-.248-1.941L27 10l-2.734.361L28 4l-6.361 3.734L22 5l-4.059 3.248A7.96 7.96 0 0016 8a7.96 7.96 0 00-1.941.248L10 5l.361 2.734L4 4zm12 6c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6zm0 2a4 4 0 100 8 4 4 0 000-8z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgSith;
