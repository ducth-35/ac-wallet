import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgBarcodeSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M2 7v18h2V7H2zm4 0v18h6V7H6zm8 0v18h2V7h-2zm4 0v18h4V7h-4zm6 0v18h2V7h-2zm4 0v18h2V7h-2z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgBarcodeSolid;
