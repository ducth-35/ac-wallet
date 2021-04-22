import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgMinusSquare(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 5v22h22V5H5zm2 2h18v18H7V7zm4 8v2h10v-2H11z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgMinusSquare;
