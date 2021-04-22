import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgMicrophoneSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M13 4c-1.094 0-2 .906-2 2v12c0 1.094.906 2 2 2h6c1.094 0 2-.906 2-2V6c0-1.094-.906-2-2-2h-6zm0 2h6v12h-6V6zm-6 8v4c0 3.3 2.7 6 6 6h2v2h-4v2h10v-2h-4v-2h2c3.3 0 6-2.7 6-6v-4h-2v4c0 2.219-1.781 4-4 4h-6c-2.219 0-4-1.781-4-4v-4H7z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgMicrophoneSolid;
