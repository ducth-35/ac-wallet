import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgUserFriendsSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M9 7c-3.3 0-6 2.7-6 6 0 1.984.977 3.75 2.469 4.844C2.832 19.152 1 21.864 1 25h2c0-3.324 2.676-6 6-6s6 2.676 6 6h2c0-3.324 2.676-6 6-6s6 2.676 6 6h2c0-3.137-1.832-5.848-4.469-7.156A6.006 6.006 0 0029 13c0-3.3-2.7-6-6-6s-6 2.7-6 6c0 1.984.977 3.75 2.469 4.844A8.062 8.062 0 0016 21.125a8.062 8.062 0 00-3.469-3.281A6.006 6.006 0 0015 13c0-3.3-2.7-6-6-6zm0 2c2.223 0 4 1.777 4 4s-1.777 4-4 4-4-1.777-4-4 1.777-4 4-4zm14 0c2.223 0 4 1.777 4 4s-1.777 4-4 4-4-1.777-4-4 1.777-4 4-4z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgUserFriendsSolid;
