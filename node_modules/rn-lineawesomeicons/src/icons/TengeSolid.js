import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgTengeSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M6.633 5A.625.625 0 006 5.621v2.746c0 .348.285.633.633.633h18.746A.625.625 0 0026 8.367V5.621A.616.616 0 0025.379 5H6.633zm0 7a.632.632 0 00-.633.621v2.746c0 .348.285.633.633.633H14v11.379c0 .347.274.621.621.621h2.758a.616.616 0 00.621-.621V16h7.379a.625.625 0 00.621-.633v-2.746a.622.622 0 00-.621-.621H6.633z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgTengeSolid;
