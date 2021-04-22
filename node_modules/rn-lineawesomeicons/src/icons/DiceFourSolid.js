import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgDiceFourSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 5v22h22V5H5zm2 2h18v18H7V7zm4 2a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4zM11 19a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgDiceFourSolid;
