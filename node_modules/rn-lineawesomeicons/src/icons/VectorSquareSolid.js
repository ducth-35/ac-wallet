import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgVectorSquareSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 5v7h2v8H5v7h7v-2h8v2h7v-7h-2v-8h2V5h-7v2h-8V5H5zm2 2h3v3H7V7zm15 0h3v3h-3V7zM12 9h8v3h3v8h-3v3h-8v-3H9v-8h3V9zM7 22h3v3H7v-3zm15 0h3v3h-3v-3z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgVectorSquareSolid;
