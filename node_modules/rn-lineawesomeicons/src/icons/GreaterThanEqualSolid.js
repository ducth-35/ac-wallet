import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgGreaterThanEqualSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M6 5v2.156L22.531 14 6 20.844V23l20-8.219V13.22L6 5zm0 20v2h20v-2H6z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgGreaterThanEqualSolid;
