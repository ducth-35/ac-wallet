import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCheckSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M28.281 6.281L11 23.563 3.719 16.28 2.28 17.72l8 8 .719.687.719-.687 18-18L28.28 6.28z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgCheckSolid;
