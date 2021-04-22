import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgElementor(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 5v22h22V5H5zm2 2h18v18H7V7zm4 4v10h2V11h-2zm4 0v2h6v-2h-6zm0 4v2h6v-2h-6zm0 4v2h6v-2h-6z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgElementor;
