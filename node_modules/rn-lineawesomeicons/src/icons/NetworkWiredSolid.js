import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgNetworkWiredSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M13 4v2H9C7.355 6 6 7.355 6 9v4H4v6h6v-6H8V9c0-.566.434-1 1-1h4v2h6V4h-6zm2 2h2v2h-2V6zm5 0v2h3c.566 0 1 .434 1 1v4h-2v6h6v-6h-2V9c0-1.645-1.355-3-3-3h-3zM6 15h2v2H6v-2zm18 0h2v2h-2v-2zM6 20v3c0 1.645 1.355 3 3 3h4v2h6v-6h-6v2H9c-.566 0-1-.434-1-1v-3H6zm18 0v3c0 .566-.434 1-1 1h-3v2h3c1.645 0 3-1.355 3-3v-3h-2zm-9 4h2v2h-2v-2z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgNetworkWiredSolid;
