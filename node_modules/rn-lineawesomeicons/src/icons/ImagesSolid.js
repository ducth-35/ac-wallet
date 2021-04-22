import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgImagesSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M2 5v18h4v4h24V9h-4V5H2zm2 2h20v14H4V7zm2 2v10h16V9H6zm2 2h12v6H8v-6zm18 0h2v14H8v-2h18V11z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgImagesSolid;
