import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgBusSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M9 4C6.8 4 5 5.8 5 8v5H3v3h2v11c0 .55.45 1 1 1h3l.344-1h13.312L23 28h3c.55 0 1-.45 1-1V16h2v-3h-2V8c0-2.2-1.8-4-4-4H9zm0 2h14c1.117 0 2 .883 2 2H7c0-1.117.883-2 2-2zm-2 4h8v7H7v-7zm10 0h8v7h-8v-7zM7 19h18v6H7v-6zm1 2v2h4v-2H8zm12 0v2h4v-2h-4z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgBusSolid;
