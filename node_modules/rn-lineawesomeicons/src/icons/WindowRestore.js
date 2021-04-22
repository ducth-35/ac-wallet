import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgWindowRestore(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 5v22h22V5H5zm2 2h18v18H7V7zm5 2v4H9v10h11v-4h3V9H12zm2 2h7v1h-7v-1zm0 3h7v3h-7v-3zm-3 1h1v1.031h-1V15zm0 3.031h1V19h6v2h-7v-2.969z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgWindowRestore;
