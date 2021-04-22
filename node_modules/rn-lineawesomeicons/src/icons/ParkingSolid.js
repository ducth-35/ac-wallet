import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgParkingSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M6 5v22h20V5H6zm2 2h16v18H8V7zm4 3v12h2v-3h3c1.645 0 3-1.355 3-3v-3c0-1.645-1.355-3-3-3h-5zm2 2h3c.566 0 1 .434 1 1v3c0 .566-.434 1-1 1h-3v-5z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgParkingSolid;
