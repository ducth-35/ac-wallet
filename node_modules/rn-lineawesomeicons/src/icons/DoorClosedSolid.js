import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgDoorClosedSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M8 5v22h16V5H8zm2 2h12v18H10V7zm10 8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgDoorClosedSolid;
