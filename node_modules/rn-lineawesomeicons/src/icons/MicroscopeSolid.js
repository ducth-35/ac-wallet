import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgMicroscopeSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M17 4v2h4V4h-4zm-1 3v2h-2c-2.746 0-5 2.254-5 5v4.188c-1.156.418-2 1.519-2 2.812s.844 2.395 2 2.813V26H7v2h17v-2H11v-2.188A3.016 3.016 0 0012.813 22H24v-2H12.812A3.036 3.036 0 0011 18.187V14a3 3 0 013-3h2v6h6V7h-6zm2 2h2v6h-2V9zm-8 11c.563 0 1 .438 1 1 0 .563-.438 1-1 1-.563 0-1-.438-1-1 0-.563.438-1 1-1z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgMicroscopeSolid;
