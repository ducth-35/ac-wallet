import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCheckSquareSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M4 4v24h24V12.187l-2 2V26H6V6h19.813l2-2H4zm23.281 3.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12L27.28 7.28z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgCheckSquareSolid;
