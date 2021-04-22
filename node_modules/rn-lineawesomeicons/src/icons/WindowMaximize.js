import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgWindowMaximize(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 5v22h22V5H5zm2 2h18v18H7V7zm2 3v12h14V10H9zm2 2h10v2H11v-2zm0 4h10v4H11v-4z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgWindowMaximize;
