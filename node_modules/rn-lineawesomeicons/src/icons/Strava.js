import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgStrava(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M14.18 2L5.9 18h4.88l3.4-6.38L17.56 18h4.84L14.18 2zm8.22 16L20 22.79 17.56 18h-3.7L20 30l6.1-12h-3.7z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgStrava;
