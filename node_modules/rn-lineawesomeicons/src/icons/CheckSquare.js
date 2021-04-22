import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCheckSquare(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 5v22h22V5H5zm2 2h18v18H7V7zm14.281 4.281L14 18.562l-3.281-3.28-1.438 1.437 4 4 .719.687.719-.687 8-8-1.438-1.438z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgCheckSquare;
