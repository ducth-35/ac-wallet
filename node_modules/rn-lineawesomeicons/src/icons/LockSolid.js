import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgLockSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 3c-3.844 0-7 3.156-7 7v3H6v16h20V13h-3v-3c0-3.844-3.156-7-7-7zm0 2c2.754 0 5 2.246 5 5v3H11v-3c0-2.754 2.246-5 5-5zM8 15h16v12H8V15z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgLockSolid;
