import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgRulerVerticalSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M8 0v32h16V0H8zm2 2h12v3h-7v2h7v2h-4v2h4v2h-7v2h7v2h-4v2h4v2h-7v2h7v2h-4v2h4v3H10V2z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgRulerVerticalSolid;
