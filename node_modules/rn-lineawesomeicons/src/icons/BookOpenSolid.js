import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgBookOpenSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M3 6v19h10c1.102 0 2 .898 2 2h2c0-1.102.898-2 2-2h10V6H19a3.997 3.997 0 00-3 1.36A3.997 3.997 0 0013 6H3zm2 2h8c1.102 0 2 .898 2 2h2c0-1.102.898-2 2-2h8v15h-8a3.997 3.997 0 00-3 1.36A3.997 3.997 0 0013 23H5V8zm10 4v2h2v-2h-2zm0 4v2h2v-2h-2zm0 4v2h2v-2h-2z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgBookOpenSolid;
