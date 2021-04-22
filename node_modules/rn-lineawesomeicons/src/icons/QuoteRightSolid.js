import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgQuoteRightSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M4 8v10h8c0 2.219-1.781 4-4 4v2c3.3 0 6-2.7 6-6V8H4zm14 0v10h8c0 2.219-1.781 4-4 4v2c3.3 0 6-2.7 6-6V8H18zM6 10h6v6H6v-6zm14 0h6v6h-6v-6z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgQuoteRightSolid;
