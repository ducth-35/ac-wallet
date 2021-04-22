import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgEthernetSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 5v22h22V5H5zm2 2h18v18H7V7zm7 4v3h-3v7h2v-2h2v2h2v-2h2v2h2v-7h-3v-3h-4z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgEthernetSolid;
