import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgGreaterThanSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M6 6v2.156L22.531 16 6 23.844V26l20-9.219V15.22L6 6z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgGreaterThanSolid;
