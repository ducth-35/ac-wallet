import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgRev(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M15 3v2.05C9.402 5.559 5 10.274 5 16c0 6.065 4.935 11 11 11h11V16c0-3.367-1.523-6.381-3.914-8.4l-1.863 1.086C23.505 10.319 25 12.986 25 16c0 4.962-4.037 9-9 9s-9-4.038-9-9c0-4.624 3.506-8.442 8-8.941V10l6-3.5L15 3zm1 10a3 3 0 100 6 3 3 0 000-6z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgRev;
